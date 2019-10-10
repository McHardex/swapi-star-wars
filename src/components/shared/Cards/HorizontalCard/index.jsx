import React from 'react';
import Card from 'react-bootstrap/Card';
import char1 from '../../../../images/character-1.jpg';
import './index.scss';

const HorizontalCard = ({ title, birthYear, gender, width }) => (
  <Card style={{ width }} className="horizontal-card">
    <Card.Img variant="top" src={char1} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Birth Year: {birthYear}</Card.Text>
      <Card.Text>Gender: {gender}</Card.Text>
    </Card.Body>
  </Card>
);

export default HorizontalCard;
