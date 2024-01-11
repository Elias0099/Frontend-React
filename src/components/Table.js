// Table.js
import React from 'react';

const Table = ({ data, openEditModal, handleEliminarProducto }) => {
    return (
        <table className="table">
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
                                className="btn btn-warning mr-2"
                                onClick={() => openEditModal(item)}
                            >
                                Editar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleEliminarProducto(item.id)}
                            >
                                Eliminar
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
