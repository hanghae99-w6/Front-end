import styled from 'styled-components';
import { DetailImage1 } from '../../static/image/image.js';

export const DetailBox = styled.div`
  position: absolute;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  width: 1200px;
  height: 700px;
  border: 1px solid red;
  box-sizing: border-box;
  left: 50%;
  transform: translateX(-600px);
  top: 20%;
`;

export const DetailTitle = styled.div`
  position: absolute;
  width: 600px;
  height: 40px;
  border: 1px solid orange;
  left: 550px;
  top: 30px;
  color: white;
  text-align: center;
`;

export const DetailStar = styled.div`
  position: absolute;
  width: 600px;
  height: 40px;
  border: 1px solid yellow;
  transform: translateY(100px);
  left: 550px;
  top: 5px;
  text-align: center;
  color: white;
`;

export const DetailContent = styled.div`
  position: absolute;
  width: 600px;
  height: 100px;
  border: 1px solid green;
  transform: translateY(180px);
  left: 550px;
  text-align: center;
  color: white;
`;

export const DetailImage = styled.div`
  position: absolute;
  background-image: url(${DetailImage1});
  background-size: cover;
  box-sizing: border-box;
  width: 500px;
  height: 640px;
  border: 1px solid blue;
  left: 25px;
  top: 30px;
  text-align: center;
  color: white;
`;
