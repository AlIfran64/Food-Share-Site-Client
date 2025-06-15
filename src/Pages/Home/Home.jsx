import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import FeaturedFoods from '../../Components/FeaturedFoods/FeaturedFoods';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import UserTestimonial from '../../Components/UserTestimonial/UserTestimonial';
import Statistics from '../../Components/Statistics/Statistics';


const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <FeaturedFoods></FeaturedFoods>

      <HowItWorks></HowItWorks>

      <UserTestimonial></UserTestimonial>

      <Statistics></Statistics>
    </div>
  );
};

export default Home;