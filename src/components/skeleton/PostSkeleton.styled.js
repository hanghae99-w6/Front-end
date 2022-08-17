import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


export const Large = styled.div`
  grid-row-end: span 20;
  width: 290px;
  box-sizing: border-box;
  background-color: grey;
  -webkit-animation: ${boxFade} 5s infinite ease-in-out;
  animation: ${boxFade} 5s infinite ease-in-out;
`;
export const Small = styled.div`
  grid-row-end: span 10;
  width: 290px;
  box-sizing: border-box;
  background-color: grey;
  -webkit-animation: ${boxFade} 6s infinite ease-in-out;
  animation: ${boxFade} 6s infinite ease-in-out;
`;