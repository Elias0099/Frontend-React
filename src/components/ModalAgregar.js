import React from 'react';

const AddProductModal = ({
                             showModalAgregar,
                             closeModalAgregar,
                             handleInputChange,
                             handleAgregarProducto,
                             nuevoProducto,
                         }) => {
    return (
        <div
            className={`modal fade ${showModalAgregar ? 'show' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{
                display: showModalAgregar ? 'block' : 'none',
            }}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Producto</h5>

                            <i className="fa-solid fa-xmark"
                               style={{ cursor: 'pointer' }}
                               onClick={closeModalAgregar}
                               aria-label="Close"></i>

                    </div>
                    <div className="modal-body mt-1">
                        <form onSubmit={handleAgregarProducto}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    id="nombre"
                                    name="nombre"
                                    value={nuevoProducto.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="descripcion">Descripción:</label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    id="descripcion"
                                    name="descripcion"
                                    value={nuevoProducto.descripcion}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="precio">Precio:</label>
                                <input
                                    type="number"
                                    className="form-control mt-2"
                                    id="precio"
                                    name="precio"
                                    value={nuevoProducto.precio}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="stock">Stock:</label>
                                <input
                                    type="number"
                                    className="form-control mt-2"
                                    id="stock"
                                    name="stock"
                                    value={nuevoProducto.stock}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">
                                Agregar Producto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductModal;
