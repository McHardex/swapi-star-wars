import React from 'react';
import './index.scss';

const StarwarTitle = ({ header }) => {
  return (
    <div className="starship-title">
      <h3>{header}</h3>
      <hr className="title-line" />
    </div>
  );
};

export default StarwarTitle;
