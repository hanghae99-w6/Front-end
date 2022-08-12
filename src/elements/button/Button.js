import styled from 'styled-components';

const Button = ({ text, width, height, ft_size }) => {
  return (
    <StyledButton width={width} height={height} ft_size={ft_size}>
      {text}
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: ${(props) => (props.height ? props.height : '50px')};
  font-size: ${(props) => (props.ft_size ? props.ft_size : '15px')};
  border-radius: 10px;
  background-color: #ff0356;
  border: none;
  color: #000000;
  font-weight: 900;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid black;
  }
`;
