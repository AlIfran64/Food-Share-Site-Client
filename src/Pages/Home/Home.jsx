import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import FeaturedFoods from '../../Components/FeaturedFoods/FeaturedFoods';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import UserTestimonial from '../../Components/UserTestimonial/UserTestimonial';


const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <FeaturedFoods></FeaturedFoods>

      <HowItWorks></HowItWorks>

      <UserTestimonial></UserTestimonial>
    </div>
  );
};

export default Home;