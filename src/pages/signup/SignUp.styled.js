import styled from 'styled-components';
import '../../static/font/font.css';

export const SignUpBox = styled.div`
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
`;
export const SignUpBoxTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 15%;
`;
export const SignUpBoxTitleSpan = styled.span`
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
export const SignUpBoxForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const SignUpBoxInputGroup = styled.div`
  box-sizing: border-box;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SignUpBoxInputWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  .icon-password {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-20px);
    font-size: 40px;
    color: #202020;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignUpBoxInput = styled.input`
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
export const SignUpBoxInputIcon = styled.div`
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
  .icon-cancel-password {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-15px);
    font-size: 30px;
    color: #202020;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignUpBoxSpan = styled.span`
  height: 20px;
  color: transparent;
  font-family: NotoSansKR-Thin;
  font-size: 13px;
`;
export const SignUpButtonGroup = styled.div`
  margin-top: 5%;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 57px;
`;