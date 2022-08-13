import styled from 'styled-components';

const Button = ({ type, text, style, _onClick }) => {
  return (
    <StyledButton
      type={type}
      onClick={_onClick}
      width={style?.width}
      height={style?.height}
      ft_size={style?.ft_size}
      bg_color={style?.bg_color}
      color={style?.color}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button`
  font-family: NotoSansKR-Bold;
  width: ${(props) => (props.width ? props.width : '100px')};
  height: ${(props) => (props.height ? props.height : '50px')};
  font-size: ${(props) => (props.ft_size ? props.ft_size : '15px')};
  background-color: ${(props) => (props.bg_color ? props.bg_color : '#ff0356')};
  color: ${(props) => (props.color ? props.color : '#000000')};
  border-radius: 10px;
  border: none;
  font-weight: 900;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid black;
  }
`;
