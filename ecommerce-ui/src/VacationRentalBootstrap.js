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
import ShoppingCart from "./ShoppingCart";

import 'bootstrap/dist/css/bootstrap.css';

function VacationRentalBootstrap({properties}) {
  const [pname, setPname] = React.useState([]);
  const [rcost, setRcost] = React.useState([]);


  function addToCart({title, cost}) {
    setPname([...pname, title]);
    setRcost([...rcost, cost]);

  }

  return (
    <Container fluid>
      <Row>
        <CardGroup>
          {/*<div className={styles.propcard.left}>*/}
          {properties.map((properties, i) => (
            <Col>
              <Card style={{width: '16rem'}}>
                <Card.Img variant="top" src={properties.image}/>
                <Card.Body>
                  <Card.Title>{properties.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item><b>Type:</b> {properties.houseType}</ListGroup.Item>
                  <ListGroup.Item><b>Address:</b>{properties.location.city}, {properties.location.country}
                  </ListGroup.Item>
                  <ListGroup.Item><b>Cost:</b>${properties.payment.cost} per night</ListGroup.Item>
                  <ListGroup.Item>{properties.payment.description}</ListGroup.Item>
                  <ListGroup.Item><b>Host:</b> {properties.host.name}</ListGroup.Item>
                  <ListGroup.Item>{properties.host.isSuperhost ? <b>SuperHost</b> : ""}</ListGroup.Item>
                  <ListGroup.Item>rating {properties.rating.stars}</ListGroup.Item>
                  <ListGroup.Item>Number of reviews {properties.rating.reviews}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button variant="success"
                          onClick={() => addToCart({
                              title: properties.title,
                              cost: properties.payment.cost
                          }

                          )}>Reserve</Button>{' '}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </Row>
      <ShoppingCart pname={pname} rcost={rcost} />
    </Container>
  )
}

VacationRentalBootstrap.propTypes = {
  title: PropTypes.string,
  houseType: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  payment: PropTypes.shape({
    cost: PropTypes.number,
    description: PropTypes.string,
  }),
  host: PropTypes.shape({
    name: PropTypes.string,
    isSuperhost: PropTypes.bool,
  }),
  rating: PropTypes.shape({
    stars: PropTypes.number,
    reviews: PropTypes.number,
  })
};
export default VacationRentalBootstrap;
