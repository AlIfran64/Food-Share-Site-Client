import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import FeaturedFoods from '../../Components/FeaturedFoods/FeaturedFoods';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import UserTestimonial from '../../Components/UserTestimonial/UserTestimonial';
import Statistics from '../../Components/Statistics/Statistics';
import FAQ from '../../Components/FAQ/FAQ';
import OurPartners from '../../Components/OurPartners/OurPartners';

const Home = () => {
  return (
    <div>
      <Banner />
      <OurPartners />
      <FeaturedFoods />
      <HowItWorks />
      <UserTestimonial />
      <Statistics />
      <FAQ />
    </div>
  );
};

export default Home;
