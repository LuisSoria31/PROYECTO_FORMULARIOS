import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap"
/**De momento todo se va a ir guardando en los useState y eso. Ya al final Asignaremos las cosas a el objeto */



export const CreacionDeFormulario=()=>{

    const question={
        titulo:'',
        descripcion:'Introduce la descripcion de tu cuestionario',
        //*Preguntate a ti mismo si es singular o plural*	
        preguntas:[
            {
            tituloQ:'Pregunta 1',//*aqui es donde va el texto de la pregunta*,
            tipoPregunta:'Aqui deberia ir el tipo de la pregunta',
            opciones:['Opcion 1'],//*aqui van las diferentes opciones*
            esObligatoria: null
            }
               ]
    }
    
    const [TituloP, setTituloP] = useState('Cuestionario');
    const [DescripcionP, setDescripcionP] = useState('');
    const [preguntaTitle, setpreguntaTitle] = useState('');
    const [opcionDePregunta, setopcionDePregunta] = useState('');

    
    const recogerTitulo=(e)=>{
    e.preventDefault();
    let tituloTemporal=e.target.value
    console.log(tituloTemporal)
    setTituloP(tituloTemporal)
    question.titulo=tituloTemporal
    }
    const recogerDescripcion=(e)=>{
        e.preventDefault();
        let descTemporal=e.target.value
        console.log(descTemporal)
        setDescripcionP(descTemporal)
        question.descripcion=descTemporal
        }
    const recogerPreguntaTitle=(e)=>{
        e.preventDefault();
        let PTtemporal=e.target.value
        console.log(PTtemporal)
        setpreguntaTitle(PTtemporal)

    }
    const recogerPreguntaOpcion=(e)=>{
        e.preventDefault();
        let OPtemporal=e.target.value
        console.log(OPtemporal)
        setopcionDePregunta(OPtemporal)
    
    }

    const agregarPregunta=()=>{
        const addPregunta=            {
            tituloQ:'Pregunta 1',//*aqui es donde va el texto de la pregunta*,
            tipoPregunta:'Aqui deberia ir el tipo de la pregunta',
            opciones:['Opcion 1'],//*aqui van las diferentes opciones*
            esObligatoria: null
            }

        question['preguntas'].push(addPregunta)        
        console.log('mandaron a llamar a agregarPregunta')
        console.log(question)
        generarPregunta()

    }
    const generarPregunta=()=>{
        question['preguntas'].map((pregunta)=>(

            <Card>
                <Card.Title>{preguntaTitle}</Card.Title>

                <Form.Group>
                <Form.Control placeholder="Escribe la pregunta que quieres hacer" onChange={recogerPreguntaTitle}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tipo de pregunta</Form.Label>
                    <Form.Select>
                        <option>Elegir tipo de pregunta</option>
                        <option>Opcion multiple</option>
                        <option>Casillas</option>
                    </Form.Select>
                </Form.Group>
                {
                    pregunta['opciones'].map((opcion)=>(
                        <Form.Control onChange={recogerPreguntaOpcion}></Form.Control>
                    ))
                }

            </Card>
        ))
    }
    return(
        <>
        <Container>
            <Card>
                <Card.Body>
                <Card.Title>{TituloP}
                </Card.Title>

                <Form.Group>
                <Form>       
                        <Form.Control  onChange={recogerTitulo}></Form.Control>
                    </Form>
                
                </Form.Group>

                <Form.Group>
                    <Form.Control on onChange={recogerDescripcion} placeholder="Ingresa la descripcion de este formulario"></Form.Control>
                </Form.Group>

                </Card.Body>

            </Card>


           {/*
                question['preguntas'].map((pregunta)=>(

                    <Card>
                        <Card.Title>{preguntaTitle}</Card.Title>

                        <Form.Group>
                        <Form.Control placeholder="Escribe la pregunta que quieres hacer" onChange={recogerPreguntaTitle}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Tipo de pregunta</Form.Label>
                            <Form.Select>
                                <option>Elegir tipo de pregunta</option>
                                <option>Opcion multiple</option>
                                <option>Casillas</option>
                            </Form.Select>
                        </Form.Group>
                        {
                            pregunta['opciones'].map((opcion)=>(
                                <Form.Control onChange={recogerPreguntaOpcion}></Form.Control>
                            ))
                        }

                    </Card>
                ))
           */ }
            <Button onClick={()=>agregarPregunta()}>Agregar pregunta</Button>



        
        </Container>
        </>
    )
}