import { Container } from "react-bootstrap";
const Administrador = () => {
  return (
    <Container className="mainContainer">
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Url Img</th>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Capuccino</td>
              <td>$150</td>
              <td>
                <div className="middle-item">
                  <img className="img-fluid" src="https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Capuchino" />
                </div>
              </td>
              <td>Nose</td>
              <td>
                <button className="btn btn-success">Editar</button>
                <button className="btn btn-danger">Borrar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Administrador;