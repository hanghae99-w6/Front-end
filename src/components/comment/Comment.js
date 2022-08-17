import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Component & Element import
import { useState } from 'react';
const Comment = ({ postId, content, createdAt, modifiedAt }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState;

  
  // //처음에 만들어놨었음
  // const commentData = useSelector((state) => state.comment.comment);
  // const is_loaded = useSelector((state) => state.comment.is_loaded);
};

export default Comment;

export const DetailCommentBox = styled.div`
  position: absolute;
  width: 620px;
  height: 390px;
  border: 1px solid purple;
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
  border: 1px solid blue;
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
  height: 243px;
  top: 7%;
  display: flex;
  flex-direction: column;
  background-color: rgba(255,255,255,0.35);
  border-radius: 10px;
  align-items: center;
`;

export const DetailCommentGroupInput = styled.div`
  position: absolute;
  width: 90%;
  height: 80px;
  resize: none;
  font-size: 16px;
  line-height: 125%;
  padding: 12px;
  top: 10px;
  border-radius: 8px;
  border: 1px solid green;
`;

export const DetailCommentStatusBox = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid yellow;
  background: white;
  border-radius: 10px;
  line-height: 40px;
  font-size: 18px;
`;

export const DetailCommentStatus = styled.div`
  position: absolute;
  height: 40px;
  width: 85%;
  border-radius: 8px;
  border: 1px solid blue;
  border-radius: 10px;
  color: #202020;
  text-align: left;
`;

export const DetailCommentEditButton = styled.div`
  position: absolute;
  width: 6%;
  border: 1px solid pink;
  font-size: 14px;
  left: 485px;
  height: 40px;
  border-radius: 10px;
  color: #202020;
  &:hover {
    cursor: pointer;
    .text {
      opacity: 0.9;
      color: white;
    }
  }
`;

export const DetailCommentDeleteButton = styled.div`
  position: absolute;
  width: 6%;
  border: 1px solid pink;
  font-size: 14px;
  left: 525px;
  height: 40px;
  border-radius: 10px;
  color: #202020;
  &:hover {
    cursor: pointer;
    .text {
      opacity: 0.9;
      color: white;
    }
  }
`;

export const DetailCommentLikes = styled.div`
  position: absolute;
  top: 60%;
`;

export const DetailCommentCreatedAt = styled.div`
  position: absolute;
  border: 1px solid red;
  width: 25%;
  left: 73%;
  top: 68%;
  color: #202020;
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
