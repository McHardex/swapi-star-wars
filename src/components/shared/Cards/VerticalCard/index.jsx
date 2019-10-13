import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.scss';

const VerticalCard = ({
  title,
  item1Key,
  item2Key,
  item1,
  item2,
  width,
  image
}) => (
  <Card style={{ maxWidth: width }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {item1Key}: {item1}
      </Card.Text>
      <Card.Text>
        {item2Key}: {item2}
      </Card.Text>
      <Button variant="dark">
        Read More <i className="fas fa-arrow-right"></i>
      </Button>
    </Card.Body>
  </Card>
);

export default VerticalCard;
