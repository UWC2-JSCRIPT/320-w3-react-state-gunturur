import React, {useState} from "react";
import PropTypes from 'prop-types';
import styles from './vacstyle.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { addToCart } from './VacationRentalBootstrap';
import _ from "lodash";


import 'bootstrap/dist/css/bootstrap.css';
import VacationRentalBootstrap from "./VacationRentalBootstrap";

const ShoppingCart = ({pname, rcost}) => {
  // const [properties, setProperties] = React.useState([...pname]);
  // const [costofprop, setCostofprop] = React.useState([...rcost]);
  const [properties, setProperties] = React.useState(_.cloneDeep(pname));
  const [costofprop, setCostofprop] = React.useState(_.cloneDeep(rcost));
  console.log("MY TESTING STARTS")
  console.log(pname)
  console.log(properties)
  console.log(costofprop)
  console.log("MY TESTING ENDS")
  // const removeFromCart = (name) => {
  //   console.log("removeFromCart called")
  //   const filteredProperties = properties.filter(p => p !==name)
  //   const filteredCost = costofprop.filter((_, i) => properties[i] !== name)
  //   setProperties(filteredProperties)
  //   setCostofprop(filteredCost)
  // };


  const removeFromCart = (name) => {
    const filteredProperties = properties.filter((_, i) => properties[i] !== name);
    const filteredCostofprop = costofprop.filter((_, i) => i !== name);
    setProperties(filteredProperties);
    setCostofprop(filteredCostofprop);
  };

  // const removeFromCart = (name) => {
  //   console.log("removeFromCart called")
  //   console.log(properties)
  //   const index = properties.indexOf(name);
  //   console.log("MY TESTING STARTS")
  //   console.log(name)
  //   console.log(index)
  //   console.log("MY TESTING ENDS")
  //
  //   if (index !== -1) {
  //     properties.splice(index, 1);
  //     costofprop.splice(index, 1);
  //     setProperties([...properties]);
  //     setCostofprop([...costofprop]);
  //   }
  // };


  const totalcost = rcost.reduce((acc, cur) => acc + cur, 0);

    return (

      <Col>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top"
                    src="https://media.istockphoto.com/id/464762352/es/vector/hotel-de-inversores.jpg?s=1024x1024&w=is&k=20&c=lU0GhUBKZ-1CAblV_Pg6pe7ufQ2Rmqxj6bo4-P-VvPI="
                    alt=""/>
          <Card.Body>
            <Card.Title>Selected Rentals</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup horizontal>
              {pname.map((name, i) => (
                <React.Fragment key={name}>
                  <ListGroup.Item>
                    <b>Name:</b> {name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Price:</b> {rcost[i]}
                  </ListGroup.Item>
                  <ListGroup.Item><Button variant="danger"
                                          onClick={() => removeFromCart({name})}>Remove</Button>{' '}</ListGroup.Item>
                </React.Fragment>
              ))}
            </ListGroup>
            <ListGroup.Item><b>Total:</b>{totalcost} </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

    )
}


export default ShoppingCart;


