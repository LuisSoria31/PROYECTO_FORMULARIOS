import React from 'react'
import { Card, Button, Container, Nav } from 'react-bootstrap'

export const Home = ()=>{
    return (
        <>
        <Nav activeKey="/home"
        onSelect={(selectedKey)=> alert(`selected ${selectedKey}`)}>
        
        <Nav.Item>
            <Nav.Link href='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>Bases</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/craete-quistionaire'>Craer Nuevo Cuestionario</Nav.Link>
        </Nav.Item>
        </Nav>
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Lista De Usuarios</Card.Title>
                    <div className='text-end'>
                    <Button variant='success'>Agregar Usuario</Button>
                        </div>
                </Card.Body>
            </Card>
        </Container>
        </>


    )
}

export default Home;