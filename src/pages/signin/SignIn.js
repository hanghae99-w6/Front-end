// React import
import { useRef, useState, useEffect } from 'react';

// Component import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';

// Package import
import { useNavigate } from 'react-router-dom';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { MdCancel } from 'react-icons/md';

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
  SignInBoxSocialGroup,
  SignInBoxSignUp,
  SignInBoxSignUpText,
  SignInBoxSignUpLink
} from './SignIn.styled';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const emailRef = useRef();
  const emailIconRef = useRef();
  const passwordRef = useRef();
  const passwordIconRef = useRef();

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
  }, [email, password]);

  const deleteEmailText = () => {
    setEmail('');
  };
  const deletePasswordText = () => {
    setPassword('');
  };

  return (
    <>
      <Header />
      <SignInBox>
        <SignInBoxTitle>
          <SignInBoxTitleSpan>Sign In</SignInBoxTitleSpan>
        </SignInBoxTitle>
        <SignInBoxForm>
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
            <SignInBoxSpan ref={emailRef}>
              이메일 주소를 확인해주세요.
            </SignInBoxSpan>
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
            <SignInBoxSpan ref={passwordRef}>
              비밀번호를 확인해주세요
            </SignInBoxSpan>
          </SignInBoxInputGroup>
          <Button
            text={'SIGN IN'}
            style={{
              width: '200px',
              height: '50px',
              ft_size: '20px',
              color: '#202020',
            }}
          />
        </SignInBoxForm>
        <SignInBoxSocialGroup>
          <RiKakaoTalkFill className="icon-kakao" />
          <SiNaver className="icon-naver" />
        </SignInBoxSocialGroup>
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
    </>
  );
};

export default SignIn;
