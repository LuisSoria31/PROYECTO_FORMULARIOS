import { Card, Container, Form } from "react-bootstrap";
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
        <Container>
            <Card>
                <Card.Title>
                    Registro de usuario
                </Card.Title>
                <Card.Body>
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
                        </Form>
                    </Card.Body>
            </Card>
        </Container>
        </>
    );


}