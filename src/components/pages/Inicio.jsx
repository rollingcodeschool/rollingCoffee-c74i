import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
const Inicio = () => {
  return (
    <>
    <img src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banner RollingCoffee" />
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