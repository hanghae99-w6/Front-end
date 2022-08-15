// React import
import { useRef, useState, useEffect, useCallback, Fragment } from 'react';

// Redux import
import { useDispatch } from 'react-redux';
import {
  emailDupCheckThunk,
  nickNameDupCheckThunk,
  addMemberThunk,
} from '../../redux/modules/member';

// Component import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';

// Package import
import { useNavigate } from 'react-router-dom';
import { GrFormView } from 'react-icons/gr';
import { MdCancel } from 'react-icons/md';
import { debounce } from 'lodash';
import PasswordStrengthBar from 'react-password-strength-bar';

//Style import
import {
  SignUpBox,
  SignUpBoxTitle,
  SignUpBoxTitleSpan,
  SignUpBoxForm,
  SignUpBoxInputGroup,
  SignUpBoxInputWrap,
  SignUpBoxInput,
  SignUpBoxInputIcon,
  SignUpBoxSpan,
  SignUpButtonGroup,
} from './SignUp.styled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [nickname, setNickName] = useState('');
  const [nicknameCheck, setNickNameCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const emailIconRef = useRef();
  const nickNameRef = useRef();
  const nickNameIconRef = useRef();
  const passwordRef = useRef();
  const passwordSpanRef = useRef();
  const passwordIconRef = useRef();
  const rePasswordRef = useRef();
  const rePasswordSpanRef = useRef();
  const rePasswordIconRef = useRef();
  const strengthBarRef = useRef();

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const newMember = {
    loginId: email,
    password,
    nickname,
  };

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (nickname !== '') nickNameIconRef.current.style.display = 'block';
    else nickNameIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
    if (repassword !== '') rePasswordIconRef.current.style.display = 'block';
    else rePasswordIconRef.current.style.display = 'none';
  }, [email, nickname, password, repassword]);

  useEffect(() => {
    if (password === '' && repassword === '') {
      passwordSpanRef.current.innerText = '';
    } else if (password === '') {
      rePasswordSpanRef.current.style.color = '';
      rePasswordSpanRef.current.innerText = '';
      passwordSpanRef.current.style.color = '#f2153e';
      passwordSpanRef.current.innerText = '비밀번호를 입력해주세요';
    } else if (repassword === '') {
      rePasswordSpanRef.current.style.color = '';
      passwordSpanRef.current.style.color = '';
    } else {
      if (password !== repassword) {
        rePasswordSpanRef.current.style.color = '#f2153e';
        rePasswordSpanRef.current.innerText = '입력한 비밀번호와 다릅니다';
        passwordSpanRef.current.style.color = '';
      } else {
        passwordSpanRef.current.style.color = '';
        rePasswordSpanRef.current.innerText = '비밀번호가 일치합니다';
        rePasswordSpanRef.current.style.color = '#0fe05f';
      }
    }
  }, [password, repassword]);

  useEffect(() => {
    if (email !== '') {
      checkLoginId(email);
    } else {
      emailRef.current.innerText = '';
      emailRef.current.style.color = '';
    }
  }, [email]);
  useEffect(() => {
    if (nickname !== '') {
      checkNickNameId(nickname);
    } else {
      nickNameRef.current.innerText = '';
      nickNameRef.current.style.color = '';
    }
  }, [nickname]);

  const checkLoginId = useCallback(
    debounce((email) => {
      if (emailRegExp.test(email) === false) {
        emailRef.current.innerText = '이메일 형식에 맞지 않습니다';
        emailRef.current.style.color = '#f2153e';
        setEmailCheck(false);
      } else {
        dispatch(emailDupCheckThunk(email)).then((res) => {
          console.log(res);
          if (res.payload) {
            emailRef.current.innerText = '중복되는 이메일입니다';
            emailRef.current.style.color = '#f2153e';
            setEmailCheck(false);
          } else {
            emailRef.current.innerText = '사용가능한 이메일입니다';
            emailRef.current.style.color = '#0fe05f';
            setEmailCheck(true);
          }
        });
      }
    }, 500),
    [email]
  );
  const checkNickNameId = useCallback(
    debounce((nickname) => {
      dispatch(nickNameDupCheckThunk(nickname)).then((res) => {
        if (res.payload) {
          nickNameRef.current.innerText = '중복되는 닉네임입니다';
          nickNameRef.current.style.color = '#f2153e';
          setNickNameCheck(false);
        } else {
          nickNameRef.current.innerText = '사용가능한 닉네임입니다';
          nickNameRef.current.style.color = '#0fe05f';
          setNickNameCheck(true);
        }
      });
    }, 500),
    [nickname]
  );

  const deleteText = (state) => {
    switch (state) {
      case 'email': {
        setEmail('');
        break;
      }
      case 'nickname': {
        setNickName('');
        break;
      }
      case 'password': {
        setPassword('');
        break;
      }
      case 'repassword': {
        setRePassword('');
        break;
      }
      default:
        break;
    }
  };

  const viewPassword = (state) => {
    switch (state) {
      case 'password': {
        if (password === '') {
          break;
        } else {
          const type = passwordRef.current.type;
          if (type === 'password') passwordRef.current.type = 'text';
          else passwordRef.current.type = 'password';
          break;
        }
      }
      case 'repassword': {
        if (repassword === '') {
          break;
        } else {
          const type = rePasswordRef.current.type;
          if (type === 'password') rePasswordRef.current.type = 'text';
          else rePasswordRef.current.type = 'password';
          break;
        }
      }
      default:
        break;
    }
  };

  const signUpAccount = (event) => {
    event.preventDefault();
    if (emailCheck === false) {
      emailRef.current.focus();
      emailRef.current.style.color = 'white';
      emailRef.current.innerText = '중복되는 이메일입니다';
    } else if (nicknameCheck === false) {
      nickNameRef.current.focus();
      nickNameRef.current.style.color = 'white';
      nickNameRef.current.innerText = '중복되는 이메일입니다';
    } else {
      if (strengthBarRef.current.state.score <= 2) {
        passwordRef.current.focus();
        passwordSpanRef.current.style.color = '#f2153e';
        passwordSpanRef.current.innerText =
          '취약한 비밀번호입니다(영 대/소문자, 숫자, 특수문자 혼합)';
        rePasswordSpanRef.current.style.innerText = '';
      } else if (password !== repassword) {
        passwordRef.current.style.innerText = '';
        rePasswordSpanRef.current.focus();
        rePasswordSpanRef.current.innerText = '입력한 비밀번호와 다릅니다';
      } else {
        dispatch(addMemberThunk(newMember));
        alert('Watchao의 멤버가 되신것을 축하드립니다!🎉');
        navigate('/signin');
      }
    }
  };

  return (
    <Fragment>
      <Header />
      <SignUpBox>
        <SignUpBoxTitle>
          <SignUpBoxTitleSpan>Sign Up</SignUpBoxTitleSpan>
        </SignUpBoxTitle>
        <SignUpBoxForm onSubmit={(event) => signUpAccount(event)}>
          <SignUpBoxInputGroup>
            <SignUpBoxInputWrap>
              <SignUpBoxInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                required
              ></SignUpBoxInput>
              <SignUpBoxInputIcon ref={emailIconRef}>
                <MdCancel
                  onClick={() => deleteText('email')}
                  className="icon"
                />
              </SignUpBoxInputIcon>
            </SignUpBoxInputWrap>
            <SignUpBoxSpan ref={emailRef}>
              이메일 주소를 확인해주세요
            </SignUpBoxSpan>
          </SignUpBoxInputGroup>
          <SignUpBoxInputGroup>
            <SignUpBoxInputWrap>
              <SignUpBoxInput
                type="text"
                value={nickname}
                onChange={(e) => setNickName(e.target.value)}
                placeholder="닉네임을 입력하세요"
                minLength="4"
                maxLength="6"
                required
              />
              <SignUpBoxInputIcon ref={nickNameIconRef}>
                <MdCancel
                  onClick={() => deleteText('nickname')}
                  className="icon"
                />
              </SignUpBoxInputIcon>
            </SignUpBoxInputWrap>
            <SignUpBoxSpan ref={nickNameRef}>
              닉네임을 확인해주세요
            </SignUpBoxSpan>
          </SignUpBoxInputGroup>
          <SignUpBoxInputGroup>
            <SignUpBoxInputWrap>
              <SignUpBoxInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                ref={passwordRef}
                required
              ></SignUpBoxInput>
              <SignUpBoxInputIcon ref={passwordIconRef}>
                <MdCancel
                  onClick={() => deleteText('password')}
                  className="icon-cancel-password"
                />
              </SignUpBoxInputIcon>
              <GrFormView
                onClick={() => viewPassword('password')}
                className="icon-password"
              />
            </SignUpBoxInputWrap>
            <PasswordStrengthBar
              password={password}
              style={{ display: 'none' }}
              ref={strengthBarRef}
            />
            <SignUpBoxSpan ref={passwordSpanRef}>
              비밀번호를 입력해주세요
            </SignUpBoxSpan>
          </SignUpBoxInputGroup>
          <SignUpBoxInputGroup>
            <SignUpBoxInputWrap>
              <SignUpBoxInput
                type="password"
                value={repassword}
                onChange={(e) => setRePassword(e.target.value)}
                placeholder="비밀번호를 다시 입력하세요"
                ref={rePasswordRef}
                required
              ></SignUpBoxInput>
              <SignUpBoxInputIcon ref={rePasswordIconRef}>
                <MdCancel
                  onClick={() => deleteText('repassword')}
                  className="icon-cancel-password"
                />
              </SignUpBoxInputIcon>
              <GrFormView
                onClick={() => viewPassword('repassword')}
                className="icon-password"
              />
            </SignUpBoxInputWrap>
            <SignUpBoxSpan ref={rePasswordSpanRef}>
              비밀번호가 일치하지 않습니다
            </SignUpBoxSpan>
          </SignUpBoxInputGroup>
          <SignUpButtonGroup>
            <Button
              type={'submit'}
              text={'Submit'}
              style={{
                width: '170px',
                height: '50px',
                ft_size: '20px',
                color: '#202020',
              }}
            />
            <Button
              type={'button'}
              _onClick={() => navigate('/signin')}
              text={'Back'}
              style={{
                width: '170px',
                height: '50px',
                ft_size: '20px',
                color: '#202020',
              }}
            />
          </SignUpButtonGroup>
        </SignUpBoxForm>
      </SignUpBox>
      <Footer />
    </Fragment>
  );
};

export default SignUp;
