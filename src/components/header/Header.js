// React import
import { useEffect, useState, useRef, Fragment } from 'react';

// Redux import
import { useDispatch, useSelector } from 'react-redux';
import { headerAction } from '../../redux/modules/member';

// Package import
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../shared/cookie';
import jwt_decode from 'jwt-decode';

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

  const movieRef = useRef();
  const dramaRef = useRef();
  const entertainRef = useRef();

  const nickname = useSelector((state) => state.member.nickname);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (
        window.localStorage.getItem('authorization') !== '' ||
        window.localStorage.getItem('authorization') !== undefined ||
        window.localStorage.getItem('authorization') !== null
      ) {
        const nickname = jwt_decode(
          window.localStorage.getItem('authorization')
        ).sub;
        dispatch(headerAction({ nickname, loginStatus: true }));
        setState(true);
      }
    } catch (err) {
      console.error(err);
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
    window.localStorage.setItem('authorization', '');
    window.localStorage.setItem('refresh-token', '');
    setState(false);
    dispatch(headerAction({ nickname: '', loginStatus: false }));
    alert('???????????? ???????????????.');
    navigate('/');
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
            ??????
          </HeaderBoxCategoryText>
          <HeaderBoxCategoryText
            onClick={() => navigate('/drama')}
            ref={dramaRef}
          >
            ?????????
          </HeaderBoxCategoryText>
          <HeaderBoxCategoryText
            onClick={() => navigate('/entertain')}
            ref={entertainRef}
          >
            ??????
          </HeaderBoxCategoryText>
        </HeaderBoxCategory>
        <HeaderBoxSign>
          {state ? (
            <Fragment>
              <HeaderBoxSignUser>{nickname}</HeaderBoxSignUser>
              <Button _onClick={signOut} text={'????????????'}></Button>
            </Fragment>
          ) : (
            <Button
              _onClick={() => navigate('/signin')}
              text={'?????????'}
            ></Button>
          )}
        </HeaderBoxSign>
      </HeaderBoxContents>
    </HeaderBox>
  );
};

export default Header;
