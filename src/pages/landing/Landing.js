// Component import
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Package import
import styled from "styled-components";
import { ImageLanding } from "../../static/image/image";

const Entertain = () => {
  return (
    <>
      <Header />
      <LandingBox />
      <Footer />
    </>
  );
};

export default Entertain;

export const LandingBox = styled.div`
  position: absolute;
  background-image: url(${ImageLanding});
  background-repeat: no-repeat;
  background-position : center;
  background-size: 70%;
  top: 20%;
  left: 50%;
  transform: translateX(-600px);
  width: 1200px;
  height: 600px;
  /* background-color: #cecece; */
  border: 1px solid red;
`;
