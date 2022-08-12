// Component import
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Package import
import styled from "styled-components";

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
  top: 30%;
  left : 50%;
  width: 100px;
  height: 100px;
  background-color: red;
`;
