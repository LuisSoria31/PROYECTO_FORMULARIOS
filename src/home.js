import React,{ useState } from 'react';
import { Card, Button, Container, Nav, ListGroup, Alert } from 'react-bootstrap';

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
            <Nav variant="tabs" defaultActiveKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item className='mt-3'>
                    <Nav.Link href='/home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mt-3'>
                    <Nav.Link eventKey='/'>Bases</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mt-3'>
                    <Nav.Link eventKey='/create-questionnaire'>Crear Nuevo Cuestionario</Nav.Link>
                </Nav.Item>
            </Nav>
            <Container className='mt-5'>
            {showAlert && (
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
                <Card className="shadow-sm mb-4" style={{ borderRadius: '8px' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Lista De Usuarios</Card.Title>
                        <div className="text-end mb-3">
                            <Button variant='success' size="lg">Agregar Usuario</Button>
                        </div>
                        <ListGroup>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">Usuario 1
                            <Button variant="danger" size="sm" onClick={() => handleDelete('Usuario 1')}>
                                    Eliminar
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">Usuario 2
                            <Button variant="danger" size="sm" onClick={() => handleDelete('Usuario 2')}>
                                    Eliminar
                                </Button> 
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">Usuario 3
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