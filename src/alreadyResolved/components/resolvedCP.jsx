import React, { useState, useEffect, Component } from 'react';
import { Alert, Row, Col} from 'react-bootstrap';




export default function resolvedCP(props) {
  const CPDate = props.date;
        return  (
          <Row>
            
          <Alert variant="success">
          <p>You have confirmed that a payment has been made on {CPDate}.</p>
          </Alert>
        
          </Row>);
}
