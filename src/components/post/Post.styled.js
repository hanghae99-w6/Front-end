import styled from 'styled-components';

export const PostBox = styled.div`
  grid-row-end: span 10;
  width: 290px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PostBoxText = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 60%;
  font-family: NotoSansKR-Light;
  border-radius: 10px;
  padding: 10px;
  text-overflow: ellipsis;
  background-color: #000000;
  opacity: 0.9;
  color: #cecece;
`;
export const PostBoxButtonGroup = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
