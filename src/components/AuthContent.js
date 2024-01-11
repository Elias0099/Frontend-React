import * as React from 'react';

import {setAuthHeader } from '../Helpers/axios_helper';
import ProductoService from '../Helpers/ProductoService';
import {Component} from "react";
import Table from './Table';
import AddProductModal from './ModalAgregar';
import EditProductModal from './ModalEditar';

class AuthContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            nuevoProducto: {
                nombre: '',
                descripcion: '',
                precio: '',
                stock: '',
            },
            productoEditado: null,
            showModalAgregar: false,
            showEditModal: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        ProductoService.obtenerProductos()
            .then((data) => {
                // Ordenar los productos por ID de menor a mayor
                const sortedData = data.sort((a, b) => a.id - b.id);
                this.setState({ data: sortedData });
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    console.error('Error fetching data:', error);
                }
            });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            nuevoProducto: {
                ...prevState.nuevoProducto,
                [name]: value,
            },
        }));
    };

    handleAgregarProducto = (e) => {
        e.preventDefault();
        ProductoService.agregarProducto(this.state.nuevoProducto)
            .then(() => {
                this.setState({
                    nuevoProducto: {
                        nombre: '',
                        descripcion: '',
                        precio: '',
                        stock: '',
                    },
                    showModalAgregar: false,
                });
                this.fetchData();
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };

    handleEliminarProducto = (id) => {
        const confirmacion = window.confirm("¿Estás seguro de eliminar este producto?");

        if (confirmacion) {
            ProductoService.eliminarProducto(id)
                .then(() => {
                    console.log(`Producto con ID ${id} eliminado.`);
                    this.fetchData();
                })
                .catch((error) => {
                    console.error('Error eliminando el producto:', error);
                });
        }
    };

    openModalAgregar = () => {
        this.setState({ showModalAgregar: true });
    };

    closeModalAgregar = () => {
        this.setState({ showModalAgregar: false });
    };

    openEditModal = (producto) => {
        this.setState({
            showEditModal: true,
            productoEditado: { ...producto },
        });
    };

    closeEditModal = () => {
        this.setState({
            showEditModal: false,
            productoEditado: null,
        });
    };

    handleEditInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            productoEditado: {
                ...prevState.productoEditado,
                [name]: value,
            },
        }));
    };

    handleEditarProducto = (e) => {
        e.preventDefault();
        ProductoService.actualizarProducto(
            this.state.productoEditado.id,
            this.state.productoEditado
        )
            .then(() => {
                this.setState({
                    productoEditado: null,
                    showEditModal: false,
                });
                this.fetchData();
            })
            .catch((error) => {
                console.error('Error updating product:', error);
            });
    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-8">
                    <h2>Productos</h2>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.openModalAgregar}
                    >
                        Agregar
                    </button>

                    <Table
                        data={this.state.data}
                        openEditModal={this.openEditModal}
                        handleEliminarProducto={this.handleEliminarProducto}
                    />

                    <AddProductModal
                        showModalAgregar={this.state.showModalAgregar}
                        closeModalAgregar={this.closeModalAgregar}
                        handleAgregarProducto={this.handleAgregarProducto}
                        handleInputChange={this.handleInputChange}
                        nuevoProducto={this.state.nuevoProducto}
                    />

                    <EditProductModal
                        showEditModal={this.state.showEditModal}
                        closeEditModal={this.closeEditModal}
                        handleEditInputChange={this.handleEditInputChange}
                        handleEditarProducto={this.handleEditarProducto}
                        productoEditado={this.state.productoEditado}
                    />
                </div>
            </div>
        );
    }
}

export default AuthContent;
