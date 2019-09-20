import React from 'react';
import Card from 'react-bootstrap/Card';
import char1 from '../../../../images/character-1.jpg';
import './index.scss';

const HorizontalCard = () => (
  <Card style={{ width: '35rem' }} className="horizontal-card">
    <Card.Img variant="top" src={char1} />
    <Card.Body>
      <Card.Title>Luke Title</Card.Title>
      <Card.Subtitle>Son of Anakin</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content Some quick example text to build on the card title
        and make up the bulk of the card's content...<a href="!#">Read More</a>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default HorizontalCard;
