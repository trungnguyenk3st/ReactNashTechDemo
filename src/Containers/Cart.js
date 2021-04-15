import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row
  } from 'reactstrap';

export default function Cart ({item}){
    return (
        <Row>
          <Col xs="3">
            <Card>
            <CardImg width="20%" src={item.image} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>{item.description}</CardText>
            </CardBody>
          </Card>
          </Col>
    </Row>
    )
}