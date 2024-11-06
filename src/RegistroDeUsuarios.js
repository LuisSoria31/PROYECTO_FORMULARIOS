import { Card, Container, Form, Nav, Navbar, Button} from "react-bootstrap";
import { useState } from "react";


export const RegistroDeUsuarios=()=>{
    const [datos, setDatos]=useState({})

    const recogerDatos=(e)=>{
    e.preventDefault()
    let datosN = datos
    datosN[e.target.name]=e.target.value
    setDatos(datosN)
    console.log(datos)
    }

    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark" defaultActiveKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Container>
                <Navbar.Brand>Registrate</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>

        <Container>
            <Card>
                <Card.Body style={{backgroundColor: 'lightblue'}}>
                        <Form>
                            <Form.Group>
                            <Form.Label>Ingresa tu nombre</Form.Label>
                            <Form.Control onChange={recogerDatos} name='email' placeholder="Ingresa tu nombre"></Form.Control>
                            </Form.Group>

                            <Form.Group>
                            <Form.Label>Apellido paterno</Form.Label>
                            <Form.Control onChange={recogerDatos}  name='AP' placeholder="Ingresa apellido paterno"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Apellido materno</Form.Label>
                            <Form.Control onChange={recogerDatos} name='AM' placeholder="Ingresa tu apellido materno"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Ocupacion?</Form.Label>
                            <Form.Control onChange={recogerDatos}  name='Ocupacion' placeholder="¿A que te dedicas?"></Form.Control>
                            </Form.Group>

                            <Button className='mt-3' href="/Login">Registrate</Button>
                        </Form>
                    </Card.Body>
            </Card>
        </Container>
        </>
    );


}