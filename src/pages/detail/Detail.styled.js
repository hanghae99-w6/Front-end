import styled from 'styled-components';
import { logoHeader } from '../../static/image/image';

export const DetailAuthor = styled.div`
  position: absolute;
  width: 1200px;
  height: 100px;
  left: 50%;
  transform: translateX(-600px);
  top: 10%;
  display: flex;
  font-family: NotoSansKR-Bold;
  color: #cecece;
  font-size: 20px;
  justify-content: flex-start;
  align-items: center;
`;
export const DetailBox = styled.div`
  position: absolute;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  width: 1200px;
  height: 700px;
  box-sizing: border-box;
  left: 50%;
  transform: translateX(-600px);
  top: 17%;
`;

export const DetailTitle = styled.div`
  font-size: 18px;
  position: absolute;
  background: white;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  width: 620px;
  height: 40px;
  color: black;
  transform: translateY(30px);
  left: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NotoSansKR-Regular;
`;

export const DetailStar = styled.div`
  font-size: 18px;
  position: absolute;
  border-radius: 10px;
  background: white;
  width: 620px;
  height: 40px;
  transform: translateY(100px);
  color: white;
  left: 550px;
  text-align: center;
  line-height: 55px;
  font-family: NotoSansKR-Light;
`;

export const StarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .star {
    cursor: pointer;
    transition: color 200ms;
  }
`;
export const StarInput = styled.input`
  display: none;
`;

export const DetailContent = styled.div`
  font-size: 18px;
  position: absolute;
  background: white;
  border-radius: 10px;
  width: 620px;
  height: 70px;
  transform: translateY(170px);
  color: black;
  left: 550px;
  display: flex;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  line-height: 30px;
  font-family: NotoSansKR-Regular;
  word-break: break-all;

  // Custom scroll
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cecece;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: white;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  &::-webkit-scrollbar-button {
    background-color: transparent;
  }
`;

export const DetailImage = styled.div`
  position: absolute;
  background-image: url(${(props) => props.imgUrl ? props.imgUrl : logoHeader});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  border-radius: 10px;
  width: 500px;
  height: 630px;
  left: 25px;
  top: 30px;
  background-color: rgba(255, 255, 255, 0.35);
`;

export const ButtonBox = styled.div`
  position: absolute;
  width: 1200px;
  height: 100px;
  left: 50%;
  transform: translateX(-600px);
  top: 82%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
export const DetailCommentBox = styled.div`
  position: absolute;
  width: 620px;
  height: 392px;
  border-radius: 10px;
  transform: translateY(267px);
  left: 550px;
  text-align: left;
  color: white;
  overflow-y: auto;
`;

export const DetailCommentHeader = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  text-align: left;
  transform: translateY(5px);
  background-color: white;
  border-radius: 10px;
`;

export const DetailCommentComments = styled.div`
  position: absolute;
  width: 22%;
  height: 30px;
  border-width: 0px;
  border-bottom: 1px;
  border-style: solid;
  border-color: black;
  font-size: 24px;
  font-family: NotoSansKR-Regular;
  color: black;
  left: 3%;
  transform: translateY(10px);
`;

export const DetailCommentInput = styled.input`
  position: relative;
  width: 75%;
  height: 26px;
  font-size: 16px;
  line-height: 125%;
  padding: 12px;
  border-width: 0px;
  border-bottom: 2px;
  border-style: solid;
  border-color: black;
  font-family: NotoSansKR-Light;
  background-color: transparent;
  top: 40%;
  left: 3%;
  &:focus {
    outline: none;
  }
`;

export const CommentBoxButton = styled.div`
  .content-icon {
    position: absolute;
    right: 10px;
    top: 70%;
    display: flex;
    flex-direction: row;
    font-size: 30px;
    color: #202020;
    &:hover {
      cursor: pointer;
    }
  }
  position: absolute;
  width: 10%;
  height: 40%;
  top: 43%;
  left: 84%;
`;

export const DetailCommentGroup = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 245px;
  top: 7%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  align-items: center;

  // Custom scroll
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cecece;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #6e6e6e;
  }
  &::-webkit-scrollbar-corner {
    background-color: #6e6e6e;
  }
  &::-webkit-scrollbar-button {
    background-color: transparent;
  }
`;

export const DetailSubCommentButton = styled.div`
  position: absolute;
  width: 12%;
  border: 1px solid red;
  height: 20px;
  top: 68%;
  left: 20%;
  color: green;
`;
