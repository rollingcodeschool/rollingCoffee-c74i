import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await leerProductosAPI();
    if (respuesta.status === 200) {
      //guardar el array en el state
      const datos = await respuesta.json();
      setProductos(datos);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mainContainer my-4">
        <section>
          <h2 className="display-3">Nuestros productos</h2>
          <hr />
          <Row>
            {productos.map((producto) => (
              <CardProducto
                producto={producto}
                key={producto.id}
              ></CardProducto>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Inicio;
