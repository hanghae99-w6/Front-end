// Package import
import styled from 'styled-components';

const Header = () => {
  return <HeaderBox></HeaderBox>;
};

export default Header;

export const HeaderBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  top: 0;
  border: 7px solid black;
  background-color: grey;
  box-sizing: border-box;
`;
