import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Comment = () => {
  

};

export default Comment;

//input이 비어있을 때, button name = 작성
//input에 값이 들어가 있을때, button name = 수정/삭제
export const DetailCommentInputGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid green;
`;

export const DetailCommentInput = styled.input`
  width: 80%;
  height: 50px;
  resize: none;
  font-size: 16px;
  line-height: 150%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
  &:focus {
    border: 3px solid #ff6b6b;
  }
`;

export const DetailCommentGroup = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
`;