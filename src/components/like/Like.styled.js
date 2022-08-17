import styled from 'styled-components';

export const LikeButton = styled.button`
  background-color: transparent;
  font-size: 15x;
  color: ${(props) => props.color ? 'lightpink' : 'white'};
  border: 1px solid white;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
