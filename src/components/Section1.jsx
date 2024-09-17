import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section1 = () => {
  return (
    <div id='sec-1-box'>
    <Container className='sec-1'>
        <Row className='Head-hi'>
          <Col>HI!</Col>
        </Row>
        <Row className='Head'>
          <Col>I am Kunal Pateriya</Col>
        </Row>
        <Row id='Row-front'>
          <Col>FRONTEND WEB DESIGNER</Col>
        </Row>
    </Container>
    </div>
  )
}

export default Section1