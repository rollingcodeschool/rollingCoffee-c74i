const URI_Producto = import.meta.env.VITE_API_PRODUCTO;

console.log(URI_Producto);

// POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URI_Producto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET

export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URI_Producto);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//DELETE
export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${id}`, {
      method: "DELETE"});
    console.log(respuesta);
    return respuesta
  } catch (error) {
    console.log(error);
  }
};
//GET de un producto
export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${id}`);
    console.log(respuesta);
    return respuesta
  } catch (error) {
    console.log(error);
  }
};
