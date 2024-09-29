import { Button, Card, Container, Form } from 'react-bootstrap';

export const RecuperarContraseña= () =>{
  return (
    <>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Recuperarcion de su Contraseña</Card.Title>
        </Card.Body>
      </Card>
      <Container className='mt-3'>
        <Card>
            <Card.Body>
                <Card.Title>Recuperar su Contraseña</Card.Title>
                <Form>
                    <Form.Group>
                        <Form.Control placeholder="Ingrese su correo electronico" type="email" name='email'></Form.Control>
                    </Form.Group>
                </Form>
                <Button className='mt-3'>Enviar</Button>
            </Card.Body>
        </Card>
      </Container>
    </>
  );
}