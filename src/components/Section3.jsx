import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Section3 = () => {
  return (
    <>
        <Container id='Container3'>
          <Row id='Row-a'> What I Did ? </Row>
          <Row id='Row-b'> Projects </Row>
          <Row id='Row-c'>  
          <CardGroup>
      <Card>
        <Card.Img variant="top" />
        <img src="/public/image/messho.png" alt="" height="250px" />
        <Card.Body>
          <Card.Title id='Card-haed'>Meesho-Website</Card.Title>
          <Card.Text>
            Categories:- E-Commerce
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"/>
        <img src="/public/image/paypal.png" alt="" height="250px" />
        <Card.Body>
          <Card.Title id='Card-haed'>Paypal-Website</Card.Title>
          <Card.Text>
          Categories:- Online Payment System
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" />
        <img src="/public/image/dash.png" alt="" height="250px" />
        <Card.Body>
          <Card.Title id='Card-haed'>Cybrom-Dashboard</Card.Title>
          <Card.Text>
          Categories:- Admin Dashboard
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
          </Row>
        </Container>
    </>
  )
}

export default Section3