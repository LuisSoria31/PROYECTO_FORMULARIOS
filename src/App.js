import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LinesChart from "./LinesChart";
import {Nav, Navbar, Container} from 'react-bootstrap';

function App() {
    return (
      <>
      <Navbar bg="primary" data-bs-theme="dark" defaultActiveKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Container>
            <Navbar.Brand href="#home">Graficar Datos</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href='/home'>Home</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <div>
            <div>
              <center>
                <p className="m-2"><b>Gráfico de líneas</b></p>
                </center>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"1000px", height:"600px"}}>
                    <LinesChart/>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;