import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import FeaturedFoods from '../../Components/FeaturedFoods/FeaturedFoods';

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <FeaturedFoods></FeaturedFoods>
    </div>
  );
};

export default Home;