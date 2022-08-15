// React import
import { useEffect, useState, useRef } from 'react';

// Package import
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../shared/cookie';

// Component & Element import
import Button from '../../elements/button/Button';

import {
  HeaderBox,
  HeaderBoxContents,
  HeaderBoxLogo,
  HeaderBoxCategory,
  HeaderBoxCategoryText,
  HeaderBoxSign,
  HeaderBoxSignUser,
} from './Header.styled';

const Header = ({ category }) => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const movieRef = useRef();
  const dramaRef = useRef();
  const entertainRef = useRef();

  useEffect(() => {
    if (getCookie('nickname') !== undefined) {
      setState(true);
    }

    if (category) {
      switch (category) {
        case 'movie': {
          movieRef.current.style.color = '#ff0356';
          break;
        }
        case 'drama': {
          dramaRef.current.style.color = '#ff0356';
          break;
        }
        case 'entertain': {
          entertainRef.current.style.color = '#ff0356';
          break;
        }
        default: {
          break;
        }
      }
    }
  }, []);

  const signOut = () => {
    removeCookie('nickname');
    setState(false);
    alert('로그아웃 되었습니다.');
  };

  return (
    <HeaderBox>
      <HeaderBoxContents>
        <HeaderBoxLogo onClick={() => navigate('/')} />
        <HeaderBoxCategory>
          <HeaderBoxCategoryText
            onClick={() => navigate('/movie')}
            ref={movieRef}
          >
            영화
          </HeaderBoxCategoryText>
          <HeaderBoxCategoryText
            onClick={() => navigate('/drama')}
            ref={dramaRef}
          >
            드라마
          </HeaderBoxCategoryText>
          <HeaderBoxCategoryText
            onClick={() => navigate('/entertain')}
            ref={entertainRef}
          >
            예능
          </HeaderBoxCategoryText>
        </HeaderBoxCategory>
        <HeaderBoxSign>
          {state ? (
            <>
              <HeaderBoxSignUser>
                {getCookie('nickname').split('@')[0]}
              </HeaderBoxSignUser>
              <Button _onClick={signOut} text={'로그아웃'}></Button>
            </>
          ) : (
            <Button
              _onClick={() => navigate('/signin')}
              text={'로그인'}
            ></Button>
          )}
        </HeaderBoxSign>
      </HeaderBoxContents>
    </HeaderBox>
  );
};

export default Header;
