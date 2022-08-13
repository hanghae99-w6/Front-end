// Package import

import Button from '../../elements/button/Button';
import { useNavigate } from 'react-router-dom';
import {
  HeaderBox,
  HeaderBoxContents,
  HeaderBoxLogo,
  HeaderBoxCategory,
  HeaderBoxCategoryText,
  HeaderBoxSign,
  HeaderBoxSignUser,
} from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const username = 'Username';
  const status = false;

  return (
    <HeaderBox>
      <HeaderBoxContents>
        <HeaderBoxLogo onClick={() => navigate('/')} />
        <HeaderBoxCategory>
          <HeaderBoxCategoryText onClick={() => navigate('/movie')}>
            영화
          </HeaderBoxCategoryText>
          <HeaderBoxCategoryText onClick={() => navigate('/drama')}>
            드라마
          </HeaderBoxCategoryText>
          <HeaderBoxCategoryText onClick={() => navigate('/entertain')}>
            예능
          </HeaderBoxCategoryText>
        </HeaderBoxCategory>
        <HeaderBoxSign>
          {status ? (
            <>
              <HeaderBoxSignUser>{username}</HeaderBoxSignUser>
              <Button text={'로그아웃'}></Button>
            </>
          ) : (
            <Button _onClick={() => navigate('/signin')} text={'로그인'}></Button>
          )}
        </HeaderBoxSign>
      </HeaderBoxContents>
    </HeaderBox>
  );
};

export default Header;
