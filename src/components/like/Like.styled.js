import styled from 'styled-components';

export const LikeButton = styled.button`
  background-color: transparent;
<<<<<<< HEAD
  font-size: 16px;
  color: white;
=======
  font-size: 15x;
  color: ${(props) => props.color ? 'lightpink' : 'white'};
>>>>>>> d1fc8b1288bcfd0cbeef74a248945d6bdf4fa145
  border: 1px solid white;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
