import styled from 'styled-components';

export const PostBox = styled.div`
  grid-row-end: span 10;
  width: 290px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PostBoxText = styled.div`
  box-sizing: border-box;
  padding: 8px;
  width: 100%;
  height: 58%;
  font-family: NotoSansKR-Light;
  border-radius: 10px;
  text-overflow: ellipsis;
  background-color: #000000;
  opacity: 0.9;
  word-break: break-all;
  overflow: visible;
  text-overflow: clip;
  color: #cecece;
`;
export const PostBoxButtonGroup = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 31%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PostBoxCreatedDate = styled.div`
  font-family: NotoSansKR-Light;
  box-sizing: border-box;
  width: 90%;
  height: 1%;
  text-align: right;
  font-size: 12px;
  color: white;
`;
