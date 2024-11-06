import { Button, Card, Container, Form, Nav, Navbar} from 'react-bootstrap';

export const RecuperarContraseña= () =>{
  return (
    <>
            <Navbar bg="primary" data-bs-theme="dark" defaultActiveKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Container>
            <Navbar.Brand href="#home">Recuperar Contraseña</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href='/home'>Home</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

      <Container className='mt-3'>
        <Card>
            <Card.Body style={{backgroundColor: 'lightblue'}}>
                <Card.Title>Recuperar su Contraseña</Card.Title>
                <Form>
                    <Form.Group>
                        <Form.Control placeholder="Ingrese su correo electronico" type="email" name='email'></Form.Control>
                    </Form.Group>
                </Form>
                <Button className='mt-3' >Enviar</Button>
            </Card.Body>
        </Card>
      </Container>
    </>
  );
}