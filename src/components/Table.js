import React from 'react';

const Table = ({ data, openEditModal, handleEliminarProducto }) => {
    return (
        <table className="table table-bordered table-striped mt-3" >
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.descripcion}</td>
                        <td>{item.precio}</td>
                        <td>{item.stock}</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-warning "
                                onClick={() => openEditModal(item)}
                            >
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>


                            <button
                                type="button"
                                className="btn btn-danger mx-lg-2"
                                onClick={() => handleEliminarProducto(item.id)}
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr key="no-data">
                    <td colSpan="5">No hay datos disponibles</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default Table;
