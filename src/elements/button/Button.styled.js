import styled from 'styled-components';

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
  }
`;