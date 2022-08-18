import styled from 'styled-components';

export const DropImageBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
`;
export const DropImageBoxPreView = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 77%;
  background-size: contain;
  border: 1px solid white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    color: white;
    font-size: 50px;
  }
`;
export const DropImageBoxPreViewImg = styled.img`
  width: auto;
  height: auto;
`;
export const DropImageBoxInputLabel = styled.label`
  background-color: #ff8eb2;
  text-align: center;
  box-sizing: border-box;
  color: black;
  width: 100%;
  font-family: NotoSansKR-Bold;
  height: 12%;
  font-size: 15px;
  padding-top: 10px;
  border-radius: 10px;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
  }
`;
export const DropImageBoxInput = styled.input`
  display: none;
`;
