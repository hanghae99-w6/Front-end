import styled from 'styled-components';

export const DramaBox = styled.div`
  // Position
  left: 50%;
  transform: translateX(-600px);
  position: absolute;
  top: 17%;
  width: 1200px;
  height: 700px;

  // Grid diplay
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 10px;
  justify-content: center;

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
    background-color: #202020;
  }
  &::-webkit-scrollbar-corner {
    background-color: #202020;
  }
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
`;
