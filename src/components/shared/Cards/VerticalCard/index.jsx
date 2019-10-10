import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.scss';

const VerticalCard = ({ name, population, temperature, width, img }) => (
  <Card style={{ width }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>Population: {population}</Card.Text>
      <Card.Text>Temperature: {temperature}</Card.Text>
      <Button variant="dark">
        Read More <i className="fas fa-arrow-right"></i>
      </Button>
    </Card.Body>
  </Card>
);

export default VerticalCard;
