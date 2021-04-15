import React from "react";
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row
  } from 'reactstrap';

  
function Product(props){
    return(
        <Row>
          
            { props.data && props.data.map((item, index)=>
            (
              <Col xs="3">
                <Card key={+index}>
                <CardImg width="20%" src={item.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>{item.description}</CardText>
                  <Button onClick={()=>props.onAddToCart(item)}>                  <Link to="/cart">Add Cart</Link>
</Button>

                </CardBody>
              </Card>
              </Col>
              ))}
        </Row>
    )
}

export default Product;