import styled from 'styled-components';

export const ImagePostBox = styled.div`
  grid-row-end: span 20;
  width: 290px;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;
export const PostBoxImage = styled.div`
  box-sizing: border-box;
  background-image: url(${(props) => props.imgUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 75%;
  &:hover {
    .text {
      opacity: 0.9;
      color: #cecece;
    }
  }
`;
export const PostBoxImageText = styled.div`
  font-family: NotoSansKR-Light;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  text-overflow: ellipsis;
  height: 100%;
  box-sizing: border-box;
  background-color: #000000;
  opacity: 0;
`;
export const PostBoxButtonGroup = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PostBoxCreatedDate = styled.div`
  font-family: NotoSansKR-Light;
  box-sizing: border-box;
  width: 90%;
  height: 5.5%;
  text-align: right;
  font-size: 12px;
  color: white;
`;