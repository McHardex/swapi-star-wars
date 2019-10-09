import React from 'react';
import Header from '../shared/Header/Header';
import VerticalCard from '../shared/Cards/VerticalCard';
import HorizontalCard from '../shared/Cards/HorizontalCard';

const Home = () => {
  return (
    <div>
      <Header transition />
      <VerticalCard />
      <HorizontalCard />
    </div>
  );
};

export default Home;
