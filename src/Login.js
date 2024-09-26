import { useState } from "react";
import { Button, Card, Container, Form} from "react-bootstrap";

const Login=()=>{

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
    <Container  style={{ backgroundColor: '#c6c6c6 ',height: '100vh',overflow:'auto'}} fluid className='p-0 m-0'>
        <Card style={{width:'60%'}} className="mx-auto my-auto">
            <Card.Title className="text-center">¡Bienvenido!</Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={recogerDatos} type="email" name='email' placeholder="Ingresa tu correo electrónico"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control onChange={recogerDatos} type="password" name='password' placeholder="Ingresa tu contraseña"></Form.Control>
                    </Form.Group>
                </Form>
                <Card style={{width:'60%'}} className="mx-auto my-3">
                    <Button>Iniciar sesión</Button>
                </Card>
        

             
            </Card.Body>
        </Card>

    </Container>


</>
);


}

export default Login;