// Package import
import React from 'react';

// Component import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ImageSlider from './ImageSlider';

// Package import 
// import 'swiper/css/bundle';

// Style import
import { LandingBox } from './Landing.styled';

const Landing = () => {
  return (
    <>
      <Header />
      <LandingBox>
        <ImageSlider />
      </LandingBox>
      <Footer />
    </>
  );
};

export default Landing;