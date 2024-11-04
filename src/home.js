import React,{ useState } from 'react';
import { Card, Button, Container, Nav, ListGroup, Alert, Navbar} from 'react-bootstrap';

export const Home = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleDelete = (usuario) => {
        setAlertMessage(`${usuario} ha sido eliminado`);
        setShowAlert(true);

    setTimeout(() => {
        setShowAlert(false);
    }, 4000); 
};
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark" defaultActiveKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href='/home'>Home</Nav.Link>
                <Nav.Link href='/create-questionnaire'>Crear Nuevo Cuestionario</Nav.Link>
                <Nav.Link eventKey='/recuperarContraseña'>Recuperar Contraseña</Nav.Link>
                <Nav.Link eventKey='/Login'>Iniciar Sesion</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
            <Container className='mt-5'>
            {showAlert && (
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
                <Card className="shadow-sm mb-4" style={{ borderRadius: '8px' }}>
                    <Card.Body style={{backgroundColor: 'lightblue'}}>
                        <Card.Title className="text-center">Lista De Usuarios</Card.Title>
                        <div className="text-end mb-3">
                            <Button variant='success' size="lg">Agregar Usuario</Button>
                        </div>
                        <ListGroup >
                            <ListGroup.Item className="d-flex justify-content-between align-items-center" style={{backgroundColor: '#cdd9dd'}}>Usuario 1
                            <Button variant="danger" size="sm" onClick={() => handleDelete('Usuario 1')}>
                                    Eliminar
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center" style={{backgroundColor: '#cdd9dd'}}>Usuario 2
                            <Button variant="danger" size="sm" onClick={() => handleDelete('Usuario 2')}>
                                    Eliminar
                                </Button> 
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center" style={{backgroundColor: '#cdd9dd'}}>Usuario 3
                            <Button variant="danger" size="sm" onClick={() => handleDelete('Usuario 3')}>
                                    Eliminar
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Home;