import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Section4 = () => {
  return (
    <>
        <Container id='Container-sec-4'>
          <Row id='Sec-4-Row'>
            <Col id='Sec-4-Col-Left'>
                <Row>Want to work with me?</Row>
                <Row>Always feel Free to Contact & Hire me</Row>
            </Col>
            <Col id='Sec-4-Col-Right'> <Button variant="light" size='lg'>Hire Me</Button>{' '}</Col>
          </Row>
        </Container>
    </>
  )
}

export default Section4