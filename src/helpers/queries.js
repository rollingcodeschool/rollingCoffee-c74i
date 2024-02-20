const URI_Producto = import.meta.env.VITE_API_PRODUCTO;

console.log(URI_Producto);

// POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URI_Producto, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoNuevo)
    });
    return respuesta
  } catch (error) {
    console.log(error);
  }
};

//GET

export const leerProductosAPI =  async()=>{
  try{
    const respuesta = await fetch(URI_Producto);
    console.log(respuesta);
    return respuesta;
  }catch (error){
    console.log(error)
  }
}