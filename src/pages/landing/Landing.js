// Package import
import React from 'react';
import 'swiper/css/bundle';

// Component import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { LandingBox } from './Landing.styled';
import ImageSlider from './ImageSlider.js';
import './ImageSlider';

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