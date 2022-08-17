// React import
import React from 'react';

// Package import
import ImageSlider from './ImageSlider.js';

// Component & Element import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

// Style import
import { LandingBox, LandingText } from './Landing.styled';

const Landing = () => {
  return (
    <>
      <Header />
      <LandingBox>
        <ImageSlider />
        <LandingText>
          <span>영화, 드라마, 예능을 리뷰하는 사이트입니다.</span><br />
          <span>좋아하는 콘텐츠에 대해 별점과 코멘트를 남겨주세요.</span>
        </LandingText>
      </LandingBox>
      <Footer />
    </>
  );
};

export default Landing;
