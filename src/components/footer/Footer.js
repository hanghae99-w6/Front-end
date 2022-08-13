// Package import
import styled from 'styled-components';
import { logoFooter } from '../../static/image/image.js';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';
const Footer = () => {
  return (
    <FooterBox>
      <FooterBoxContents>
        <FooterBoxLogo />
        <FooterBoxIconGroup>
          <AiFillGithub className="icon"></AiFillGithub>
          <SiNotion className="icon"></SiNotion>
          <AiFillYoutube className="icon"></AiFillYoutube>
        </FooterBoxIconGroup>
      </FooterBoxContents>
    </FooterBox>
  );
};

export default Footer;

export const FooterBox = styled.div`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const FooterBoxContents = styled.div`
  position: relative;
  width: 1200px;
  height: 100%;
  box-sizing: border-box;
`;

export const FooterBoxLogo = styled.div`
  position: absolute;
  background-image: url(${logoFooter});
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 50px;
  box-sizing: border-box;
  top: 50%;
  left: 0;
  transform: translateY(-45%);
`;

export const FooterBoxIconGroup = styled.div`
  position: absolute;
  left: 150px;
  width: 150px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  .icon {
    width: 30px;
    height: 30px;
    color: #ff0356;
    &:hover{
      cursor: pointer;
    }
  }
`;
