// Style import
import { StyledButton } from './Button.styled';

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