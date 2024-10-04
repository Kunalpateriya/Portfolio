import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <>
    <Container id='Contact-Container'>
      <Row id='Contact-Row'>
        <Row id='Contact-Content-Row1'>How can you communicate?</Row>
        <Row id='Contact-Content-Row2'>Contact Me</Row>
        <Row id='Contact-Content-Row3'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write Somethings</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <br />
        <Button id='btn' variant="outline-primary" size="sm">Get In Touch</Button>{' '}
        </Row>
      </Row>
    </Container>
    </>
  )
}

export default Contact