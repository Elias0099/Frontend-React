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
                        <i className="fa-solid fa-xmark"
                           style={{ cursor: 'pointer' }}
                           aria-label="Close"
                           onClick={closeEditModal}></i>

                    </div>
                    <div className="modal-body mt-1">
                        <form onSubmit={handleEditarProducto}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    id="nombre"
                                    name="nombre"
                                    value={productoEditado ? productoEditado.nombre : ''}
                                    onChange={handleEditInputChange}
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
                                    value={productoEditado ? productoEditado.descripcion : ''}
                                    onChange={handleEditInputChange}
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
                                    value={productoEditado ? productoEditado.precio : ''}
                                    onChange={handleEditInputChange}
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
                                    value={productoEditado ? productoEditado.stock : ''}
                                    onChange={handleEditInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">
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
