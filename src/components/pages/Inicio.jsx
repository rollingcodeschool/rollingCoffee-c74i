import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
const Inicio = () => {
  return (
    <>
       <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mainContainer">
      <section>
        <h2 className="display-3">Nuestros productos</h2>
        <hr />
        <Row className="justify-content-around">
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </section>
    </Container>
    </>
    
  );
};

export default Inicio;