import styled from 'styled-components';

export const CommentGroupInput = styled.div`
  font-family: NotoSansKR-Thin;
  position: relative;
  width: 90%;
  font-size: 16px;
  line-height: 125%;
  padding: 12px;
  top: 10px;
  border-radius: 8px;
  border: 1px solid #cecece;
`;

export const CommentStatusBox = styled.div`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  background: white;
  border-radius: 10px;
  line-height: 40px;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const CommentStatus = styled.div`
  position: absolute;
  height: 38px;
  width: 80%;
  font-size: 15px;
  padding-left: 10px;
  border-radius: 8px;
  border-radius: 10px;
  color: #202020;
  text-align: left;
`;

export const CommentDeleteButton = styled.button`
  position: absolute;
  width: 10%;
  background-color: #ff8eb2;
  font-family: NotoSansKR-Bold;
  font-size: 15px;
  right: 10px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #202020;
  &:hover {
    cursor: pointer;
  }
`;
export const CommentAuthor = styled.div`
  position: absolute;
  width: 20%;
  left: 3%;
  top: 68%;
  color: #cecece;
  font-size: 12px;
  text-align: start;
`;
export const CommentCreatedAt = styled.div`
  position: absolute;
  width: 25%;
  left: 73%;
  top: 68%;
  color: #cecece;
  font-size: 12px;
  text-align: end;
`;
