// Package import
import styled from 'styled-components';

const Footer = () => {
  return <FooterBox></FooterBox>;
}

export default Footer;

export const FooterBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  border: 7px solid black;
  background-color: grey;
  box-sizing: border-box;
`;