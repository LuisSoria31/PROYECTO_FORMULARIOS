import './App';
import { Card, Form, FormControl } from 'react-bootstrap';

export const App = () => {
  return (
    <>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Inicio del proyecto de Formularios</Card.Title>
        </Card.Body>
      </Card>

      <Card className='mt-3' bg='primary'>
      <Card.Title className='text-center mt-3'>Registro de Usuario</Card.Title>
      <Form>
      <Form.Group>
        <Form.Control></Form.Control>
      </Form.Group>
      </Form>
      <Card.Title className='mt-2'>Nombres</Card.Title>
      <Form className='mt-2'>
        <Form.Group>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
      <Card.Title className='mt-2'>Apellido Paterno</Card.Title>
      <Form className='mt-2'>
        <Form.Group>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
      <Card.Title className='mt-2'>Apellido Materno</Card.Title>
      <Form className='mt-2'>
        <Form.Group>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
      <Card.Title className='mt-2'>Correo Electronico</Card.Title>
      <Form className='mt-2'>
        <Form.Group>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
      <Card.Title className='mt-2'>Contraseña</Card.Title>
      <Form className='mt-2'>
        <Form.Group>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
      <Card.Title className='mt-2'>Confirmar Contraseña</Card.Title>
      <Form className='mt-2'>
        <Form.Group>
          <Form.Control placeholder='Confrima tu Contraseña'></Form.Control>
        </Form.Group>
      </Form>
      </Card>
    </>
  );
}

export default App;