import React, { Component } from 'react';
import Header from '../../shared/components/Header';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import logo from '../../assets/Bank of Naboo-logos.jpeg'
import savetrees from '../../assets/SavePaper.jpg'
import Options from './Options';

class Collections extends React.Component {
    render() { 
        return (
        <div>
    <Container>
    <Row><br/></Row>
    <Row>
      <Col>
      
      </Col>
    </Row>
    <Row>
      
      <Col>
        
            <Card style={{ width: '28rem' }}>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src= {logo}
      alt="First slide" width="450"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src= {savetrees}
      alt="First slide" width="450"
    />
  </Carousel.Item>
  </Carousel>
    
    <Card.Body>
    <Card.Title>Due on your Credit Card ending 1234</Card.Title>
      <Card.Text>
      Hello {this.props.name}. Our records show that you just missed a paymemt of $100 on your credit card ending 1234.
      </Card.Text>
      <Card.Text>
      We understand this may be an oversight. Let us help you resolving this easily. Please choose one of the following options to inform us of your intentions.
      </Card.Text>
      <Options/>
    </Card.Body>
  </Card>
  </Col>
  </Row>
    
  
</Container>
        </div>);
    }
}
 
export default Collections;