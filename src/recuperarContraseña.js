
import { Card, Container, Form } from 'react-bootstrap';

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
                        <Form.Control></Form.Control>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
      </Container>
    </>
  );
}