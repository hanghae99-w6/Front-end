// Package import
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';

// Style import
import {
  FooterBox,
  FooterBoxContents,
  FooterBoxLogo,
  FooterBoxIconGroup,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterBox>
      <FooterBoxContents>
        <FooterBoxLogo />
        <FooterBoxIconGroup>
          <AiFillGithub
            onClick={() => window.open('https://github.com/hanghae99-w6')}
            className="icon"
          ></AiFillGithub>
          <SiNotion
            onClick={() =>
              window.open(
                'https://www.notion.so/5-abb0b2421aa6449abd1b7a4251a9e819'
              )
            }
            className="icon"
          ></SiNotion>
          <AiFillYoutube className="icon"></AiFillYoutube>
        </FooterBoxIconGroup>
      </FooterBoxContents>
    </FooterBox>
  );
};

export default Footer;
