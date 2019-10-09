import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import char1 from '../../../../images/character-1.jpg';
import './index.scss';

const VerticalCard = () => (
  <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={char1} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="dark">
        Read More <i className="fas fa-arrow-right"></i>
      </Button>
    </Card.Body>
  </Card>
);

export default VerticalCard;
