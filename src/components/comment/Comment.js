import styled from 'styled-components';
import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";

const Comment = () => {

  // 로그인 후 현재 경로로 돌아오기 위해 useLocation 사용
  // const location = useLocation();

  const navigate = useNavigate
  const [commentList, setCommentList] = useState([]);

  //입력한 댓글 내용
  const [comment, setComment] = useState('');
  const token = useSelector((state) => state.Auth.token);

  // 현재 페이지, 전체 페이지 갯수
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  //처음에 만들어놨었음
  const commentData = useSelector((state) => state.comment.comment);
  const is_loaded = useSelector((state) => state.comment.is_loaded);

  useEffect(() => {
    const getCommentList = async () => {
      const { data } = await axios.get(
        `/api/comment/list?comment_id=${commentData}&page_number=${page}&page_size=${5}`
      );
      return data;
    };

    //기존 commentList에 데이터를 덧붙임
    getCommentList().then((result) =>
      setCommentList([...commentList, ...result])
    );
  }, [page]);

  // 댓글 추가하기, 댓글 추가하는 API는 인증 미들웨어가 설정되어 있으므로
  // HTTP HEADER에 jwt-token 정보를 보내는 interceptor 사용
  const submit = useCallback(async () => {
    const comment = {
      comment_id: commentData,
      // DB에 엔터가 먹힌 상태로 들어가므로 제대로 화면에 띄우기 위해 <br>로 치환
      comment: comment,
    }
    // axios interceptor 사용 : 로그인한 사용자만 쓸 수 있다!
  }, []);
  console.log(commentList)

};

export default Comment;

export const DetailCommentBox = styled.div`
  position: absolute;
  width: 600px;
  height: 365px;
  border: 1px solid purple;
  transform: translateY(300px);
  left: 550px;
  text-align: left;
  color: white;
  overflow-y: auto;
`;

export const DetailCommentHeader = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: 1px solid blue;
  text-align: left;
`;

export const DetailCommentInput = styled.input`
  position: relative;
  display: flex;
  width: 80%;
  height: 23px;
  resize: none;
  font-size: 12x;
  line-height: 125%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid yellow;
  outline: none;
  &:focus {
    border: 3px solid yellow;
  }
  top: 5px;
`;

export const DetailCommentGroup = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 285px;
  top: 5%;
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
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
  outline: none;
`;

export const DetailCommentStatus = styled.div`
  position: absolute;
  height: 40px;
  width: 90%;
  border-radius: 8px;
  border: 1px solid blue;
`;

export const DetailCommentLikes = styled.div`
  position: absolute;
  width: 20%;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  height: 30px;
  top: 60%;
`;

export const DetailSubCommentButton = styled.div`
  position: absolute;
  width: 25%;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  height: 30px;
  top: 60%;
  left: 67%;
`;
