import styled from 'styled-components';

export const WriteBox = styled.div`
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
export const WriteBoxForm = styled.form`
  width: 100%;
  height: 100%;
`;
export const WriteBoxTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteBoxInputGroup = styled.div`
  box-sizing: border-box;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const WriteBoxInputWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
`;
export const WriteBoxInput = styled.input`
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
export const WriteBoxInputIcon = styled.div`
  .title-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    color: #202020;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const WriteBoxImageUpload = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteBoxComment = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 26%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteBoxCommentWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 80%;
  height: 100%;
`;
export const WriteBoxCommentArea = styled.textarea`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 50px;
  font-family: NotoSansKR-Bold;
  font-size: 15px;
  background-color: #cecece;
  color: black;
  width: 100%;
  height: 80%;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
export const WriteBoxCommentIcon = styled.div`
  .content-icon {
    position: absolute;
    right: 10px;
    top: 70%;
    font-size: 30px;
    color: #202020;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const WriteBoxStarButton = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 15%;
  display: flex;
`;
export const WriteBoxStar = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const WriteBoxStarComment = styled.div`
  font-family: NotoSansKR-Bold;
  color: #cecece;
`;
export const WriteBoxButton = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
