import { useState } from "react";
import { Button, Card, Container, Form, Nav, Navbar} from "react-bootstrap";

export const Login=()=>{

    const [FORMM, setFORMM] = useState({});
    const [ERRORES, setERRORES] = useState({});
    
    //Funcion que va a setear los valores del objeto FORMM, se trae todo lo del FORMM y si no existe el campo que se manda, lo crea y setea.
    //Si sí existe, pues solo lo setea
    const setValue=(field, value)=>{
    
        setFORMM({
            ...FORMM,
            [field]:value
        })
    
        if(!!ERRORES[field]){
            setERRORES({
                ...ERRORES,
                [field]: null
    
            })
    
        }
    
    }
    
    
    
    const validar=()=>{
        const {correo, contrasena}= FORMM
        const newErrors ={}
    
        if(!correo || correo=== ''){
            newErrors.correo= 'Ingresa tu correo correctamente por favor'
            console.log('entre al primer error')
        }  
    
            if(!contrasena || contrasena=== ''){
               newErrors.contrasena= 'Ingresa algo por favor'
               console.log('entre al segundo2 error')
    
           }
        
    
        return newErrors
    }
    
    const handleSubmit=(e)=>{ 
    
    
    
        const formErrors= validar()
    
        if(Object.keys(formErrors).length>0){
            setERRORES(formErrors)
        }else{
            console.log(FORMM)
            console.log('Formulario enviado juaz juaz XD')
        }
    
    
    }
return(
<>
<Navbar bg="primary" data-bs-theme="dark" defaultActiveKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Container>
            <Navbar.Brand href="#home">Inicio de Sesión</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href='/home'>Home</Nav.Link>
            </Nav>
            </Container>
</Navbar>
    <Container  style={{ backgroundColor: '#c6c6c6 ',height: '100vh',overflow:'auto'}} fluid className='p-0 m-0'>
        <Card style={{width:'60%', backgroundColor: 'lightblue'}} className="mx-auto my-auto mt-5">
            <Card.Title className="text-center">¡Bienvenido!</Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group>
                    <Form.Label>Ingresa tu correo</Form.Label>
                               
                               {/*La funcion flecha, que es automatica en el onChange, manda a llamar a set value y manda esos valores como parametro */}
                               <Form.Control 
                               onChange={(e)=>setValue('correo', e.target.value)}
                                placeholder="correo@algo.com" 
                                required
                                isInvalid={!!ERRORES.correo}></Form.Control>
                               <Form.Control.Feedback type="invalid">
                                   {ERRORES.correo}
                               </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                                <Form.Control 
                                type="password" 
                                onChange={(e)=>setValue('contrasena', e.target.value)} 
                                placeholder="Contraseña" 
                                required
                                isInvalid={!!ERRORES.contrasena}></Form.Control>
                                <Form.Control.Feedback type="invalid">{ERRORES.contrasena}</Form.Control.Feedback>
                                
                    </Form.Group>
                <Card style={{width:'60%'}} className="mx-auto my-3">
                    <Button variant="info"  onClick={()=>handleSubmit()}>Iniciar sesión</Button>{/*Elimine el href para ver las validaciones. 
                    Debemos implementar algo para cuando jale algo de la BD */}
                </Card>

                <Card style={{width:'60%'}} className="mx-auto my-3">
                    <Button variant="info" href="/RU">Registrate</Button>
                </Card>
                </Form>
             
            </Card.Body>
        </Card>

    </Container>


</>
);


}

export default Login;