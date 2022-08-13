import styled from 'styled-components';
import { logo } from '../../static/image/image.js';
import '../../static/font/font.css';

export const HeaderBox = styled.div`
  position: absolute;
  width: 100%;
  height: 120px;
  top: 0;
  background-color: black;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const HeaderBoxContents = styled.div`
  position: relative;
  width: 1200px;
  height: 100%;
  box-sizing: border-box;
`;
export const HeaderBoxLogo = styled.div`
  position: absolute;
  left: 0;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  height: 80px;
  box-sizing: border-box;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderBoxCategory = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 400px;
  height: 100%;
  left: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const HeaderBoxCategoryText = styled.span`
  font-family: NotoSansKR-Light;
  width: 100px;
  height: 20px;
  color: white;
  font-size: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: #ff0356;
  }
`;
export const HeaderBoxSign = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  width: 250px;
  height: 100%;
  right: 0;
`;
export const HeaderBoxSignUser = styled.span`
  font-family: NotoSansKR-Bold;
  font-size: 20px;
  color: white;
`;
