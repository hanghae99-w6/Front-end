// React import
import { useRef, useState, useCallback, useEffect, Fragment } from 'react';

// Redux import
import { useDispatch } from 'react-redux/es/exports';
import { signMemberThunk, signInAction } from '../../redux/modules/member';

// Package import
import { useNavigate } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';

// Component & Element import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';

//Style import
import {
  SignInBox,
  SignInBoxTitle,
  SignInBoxTitleSpan,
  SignInBoxForm,
  SignInBoxInputGroup,
  SignInBoxInputWrap,
  SignInBoxInput,
  SignInBoxInputIcon,
  SignInBoxSpan,
  SignInBoxButtonGroup,
  SignInBoxSignUp,
  SignInBoxSignUpText,
  SignInBoxSignUpLink,
} from './SignIn.styled';

const SignIn = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = 'http://watchao-bucket-deploy.s3-website.ap-northeast-2.amazonaws.com/kakao/callback';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const emailIconRef = useRef();
  const passwordRef = useRef();
  const passwordIconRef = useRef();

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
  }, [email, password]);

  const deleteEmailText = useCallback(() => {
    setEmail('');
  }, [email]);
  const deletePasswordText = useCallback(() => {
    setPassword('');
  }, [password]);

  const signInAccount = useCallback(
    async (event) => {
      event.preventDefault();
      dispatch(signMemberThunk({ loginId: email, password })).then((res) => {
        if (email === '') {
          emailRef.current.innerText = '계정을 입력해주세요';
          emailRef.current.style.color = '#f2153e';
          passwordRef.current.innerText = '';
        } else if (emailRegExp.test(email) === false) {
          emailRef.current.innerText = '이메일 형식에 맞지 않습니다';
          emailRef.current.style.color = '#f2153e';
          passwordRef.current.innerText = '';
        } else {
          if (res.payload) {
            dispatch(signInAction({ nickname: email, loginStatus: true }));
            navigate('/');
          } else {
            alert('로그인 실패하였습니다.');
          }
        }
      });
    },
    [email, password]
  );

  return (
    <Fragment>
      <Header />
      <SignInBox>
        <SignInBoxTitle>
          <SignInBoxTitleSpan>Sign In</SignInBoxTitleSpan>
        </SignInBoxTitle>
        <SignInBoxForm onSubmit={(event) => signInAccount(event)}>
          <SignInBoxInputGroup>
            <SignInBoxInputWrap>
              <SignInBoxInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요."
                required
              ></SignInBoxInput>
              <SignInBoxInputIcon ref={emailIconRef}>
                <MdCancel onClick={deleteEmailText} className="icon" />
              </SignInBoxInputIcon>
            </SignInBoxInputWrap>
            <SignInBoxSpan ref={emailRef}></SignInBoxSpan>
          </SignInBoxInputGroup>
          <SignInBoxInputGroup>
            <SignInBoxInputWrap>
              <SignInBoxInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="패스워드를 입력하세요."
              />
              <SignInBoxInputIcon ref={passwordIconRef}>
                <MdCancel onClick={deletePasswordText} className="icon" />
              </SignInBoxInputIcon>
            </SignInBoxInputWrap>
            <SignInBoxSpan ref={passwordRef}></SignInBoxSpan>
          </SignInBoxInputGroup>
          <SignInBoxButtonGroup>
            <Button
              type={'submit'}
              text={'SIGN IN'}
              style={{
                width: '170px',
                height: '50px',
                ft_size: '15px',
                color: '#202020',
              }}
            />
            <Button
              type={'button'}
              text={'KAKAO SIGN IN'}
              _onClick={() => {
                window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
              }}
              style={{
                width: '170px',
                height: '50px',
                ft_size: '15px',
                color: '#202020',
                bg_color: '#F7E111',
              }}
            />
          </SignInBoxButtonGroup>
        </SignInBoxForm>
        <SignInBoxSignUp>
          <SignInBoxSignUpText>
            회원이 아니신가요?
            <SignInBoxSignUpLink onClick={() => navigate('/signup')}>
              회원가입
            </SignInBoxSignUpLink>
          </SignInBoxSignUpText>
        </SignInBoxSignUp>
      </SignInBox>
      <Footer />
    </Fragment>
  );
};

export default SignIn;