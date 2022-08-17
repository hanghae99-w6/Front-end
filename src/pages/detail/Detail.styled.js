import styled from 'styled-components';

export const DetailBox = styled.div`
  position: absolute;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  width: 1200px;
  height: 700px;
  border: 1px solid red;
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
  border: 1px solid orange;
  color: black;
  transform: translateY(30px);
  left: 550px;
  text-align: center;
  line-height: 40px;
  font-family: NotoSansKR-Regular;
`;

export const DetailStar = styled.div`
  font-size: 18px;
  position: absolute;
  border-radius: 10px;
  background: white;
  width: 620px;
  height: 40px;
  border: 1px solid yellow;
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
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  width: 620px;
  height: 70px;
  border: 1px solid green;
  transform: translateY(170px);
  color: black;
  left: 550px;
  text-align: center;
  line-height: 70px;
  font-family: NotoSansKR-Regular;
`;

export const DetailImage = styled.div`
  position: absolute;
  background-image: url(${(props) => props.imgUrl});
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
  /* border: solid 1px yellow; */
  gap: 20px;
`;