import React, { useState, useEffect, Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import Form from "react-bootstrap/Form"
import { Navigate, useLocation } from "react-router-dom";
import CollectionsCarousel from '../shared/components/carousel';
import { useAuth0 } from "@auth0/auth0-react";



export default function App() {
  const [option, setOption] = useState("");
  const location = useLocation();
  const { user} = useAuth0();
  useEffect(() => {
  

    // Create PaymentIntent as soon as the page loads
    fetch(" https://tv0t7pabab.execute-api.eu-central-1.amazonaws.com/dev/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email:user.email,templateId:"d-489a0233899545f1ad051bc48b2306ef" }),
    })

    fetch(" https://tv0t7pabab.execute-api.eu-central-1.amazonaws.com/dev/updatestatus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, collectionsStatus:"PTP", resolvedStatus:true,resolvedData:{PTPDate:location.state} }),
    })
      
  }, []);

        return  (
          <Container fluid>
           
            {option==="collections" && (<Navigate to="/collections" replace={true} />)} 
           
            <Row><br/></Row>
            <Row >
    <Col xs={12} sm={10} lg={4} md={4}></Col>
    <Col xs={12} sm={10} lg={4} md={6}>
    <Card.Title>Due on your Credit Card ending 1234</Card.Title>
    </Col>
  </Row>
  
              
              
                
   <Row>
              
              <Col xs={12} sm={10} lg={4} md={4}></Col>
    <Col xs={12} sm={10} lg={4} md={6}>
                <Card.Text>
                Thanks for confirming.
                </Card.Text>
                <Card.Text>
                We noted that a payment will be made by {location.state}
                </Card.Text>
                <br/>
                </Col>
                <Row>
                <Col xs={1} sm={6} lg={5} md={4}></Col>
                <Col xs={1} sm={6} lg={1} md={4}><Button variant="danger" onClick={e => setOption( "collections")}>Back</Button></Col>
                <Col xs={1} sm={6} lg={4} md={4}></Col>
            </Row>
             
          
            </Row>
            
              
        
                </Container>);
}
