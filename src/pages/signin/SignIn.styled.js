import styled from 'styled-components';
import '../../static/font/font.css';

export const SignInBox = styled.div`
  z-index: 1;
  position: absolute;
  border-radius: 5%;
  top: 20%;
  width: 500px;
  height: 700px;
  left: 50%;
  transform: translateX(-250px);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10%;
`;
export const SignInBoxTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 15%;
`;
export const SignInBoxTitleSpan = styled.span`
  top: 50%;
  transform: translateY(-25px);
  font-family: NotoSansKR-Bold;
  position: absolute;
  width: 200px;
  height: 50px;
  left: 30px;
  color: #cecece;
  font-size: 40px;
`;
export const SignInBoxForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const SignInBoxInputGroup = styled.div`
  box-sizing: border-box;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SignInBoxInputWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
`;
export const SignInBoxInput = styled.input`
  position: absolute;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 50px;
  font-family: NotoSansKR-Bold;
  font-size: 15px;
  background-color: #cecece;
  color: black;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
export const SignInBoxInputIcon = styled.div`
  .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-15px);
    font-size: 30px;
    color: #202020;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignInBoxSpan = styled.span`
  height: 20px;
  color: transparent;
  font-family: NotoSansKR-Thin;
  font-size: 13px;
`;
export const SignInBoxButtonGroup = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;
export const SignInBoxSignUp = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignInBoxSignUpText = styled.span`
  text-align: center;
  font-family: NotoSansKR-Light;
  width: 250px;
  color: #cecece;
  font-size: 15px;
`;
export const SignInBoxSignUpLink = styled.span`
  margin-left: 10px;
  &:hover {
    color: #ff0356;
    font-family: NotoSansKR-Bold;
    cursor: pointer;
  }
`;
