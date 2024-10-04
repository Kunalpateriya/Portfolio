import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import code from "../image/code.gif";


const Section2 = () => {
  return (
    <>
    <Container id='container-box'>
        <Row id='contain-row'>
          <Col id='Column1' className='col'>
              <img src={code} alt="" srcset="" width="100%" />
          </Col>
          <Col id='Column2'>
                  <Row id='Rowbox1'>
                    <p>Who Am I ?</p>
                  </Row>
                  <Row id='Rowbox2'>
                    <p>About Me</p>
                  </Row>
                  <Row id='Rowbox3'>
                    <p>I have a solid background in HTML, CSS, and JavaScript and am an enthusiastic and driven junior front-end developer. After completing my B.Tech at RGPV University, 
                      I have honed my attention to detail and gained a firm grasp of user experience and responsive design concepts.
                      I am proficient in using frameworks and libraries such as React and Bootstrap,
                      My ability to quickly learn and adapt to new technologies allows me to stay up-to-date with the latest industry trends
                      </p>
                  </Row>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default Section2