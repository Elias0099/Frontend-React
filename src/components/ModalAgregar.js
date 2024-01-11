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
                        <button
                            type="button"
                            className="close"
                            onClick={closeModalAgregar}
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleAgregarProducto}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    value={nuevoProducto.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripción:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="descripcion"
                                    name="descripcion"
                                    value={nuevoProducto.descripcion}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="precio"
                                    name="precio"
                                    value={nuevoProducto.precio}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock">Stock:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="stock"
                                    name="stock"
                                    value={nuevoProducto.stock}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
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
