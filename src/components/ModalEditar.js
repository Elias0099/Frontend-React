// EditProductModal.js
import React from 'react';

const EditProductModal = ({
                              showEditModal,
                              closeEditModal,
                              handleEditInputChange,
                              handleEditarProducto,
                              productoEditado,
                          }) => {
    return (
        <div
            className={`modal fade ${showEditModal ? 'show' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{
                display: showEditModal ? 'block' : 'none',
            }}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editar Producto</h5>
                        <button
                            type="button"
                            className="close"
                            onClick={closeEditModal}
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleEditarProducto}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    value={productoEditado ? productoEditado.nombre : ''}
                                    onChange={handleEditInputChange}
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
                                    value={productoEditado ? productoEditado.descripcion : ''}
                                    onChange={handleEditInputChange}
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
                                    value={productoEditado ? productoEditado.precio : ''}
                                    onChange={handleEditInputChange}
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
                                    value={productoEditado ? productoEditado.stock : ''}
                                    onChange={handleEditInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProductModal;
