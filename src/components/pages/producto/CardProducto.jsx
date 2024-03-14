import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProducto = ({ producto }) => {
  return (
    <Col md={4} lg={3} className="my-2">
      <Card className="h-100 ">
        <Card.Img
          className="card-img-top-nueva"
          variant="top"
          src={producto.imagen}
          alt={producto.nombreProducto}
        />
        <Card.Body>
          <Card.Title className="txt-verdecito">
            {producto.nombreProducto}
          </Card.Title>
          <Card.Text>
            {producto.descripcion_breve}
            <br />
            <b>Precio: ${producto.precio}</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link className="btn btn-success" to={'/detalleProducto/'+ producto.id}>Ver mas</Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
