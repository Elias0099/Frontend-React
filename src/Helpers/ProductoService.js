
import { request, setAuthHeader } from './axios_helper';

const ProductoService = {
    obtenerProductos: () => {
        return request('GET', '/api/productos/', {})
            .then(response => {
                console.log("Productos obtenidos:", response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error fetching productos:', error);
                throw error; // Re-lanza el error para que pueda ser manejado en la llamada del componente.
            });
    },

    agregarProducto: (nuevoProducto) => {
        return request('POST', '/api/productos/', nuevoProducto);
    },

    obtenerProductoPorId: (id) => {
        return request('GET', `/api/productos/${id}`, {});
    },

    actualizarProducto: (id, productoActualizado) => {
        return request('PUT', `/api/productos/${id}`, productoActualizado);
    },

    eliminarProducto: (id) => {
        return request('DELETE', `/api/productos/${id}`, {});
    },
};

export default ProductoService;
