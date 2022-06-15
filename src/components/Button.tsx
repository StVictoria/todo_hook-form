import styled from "styled-components";

const ButtonStyled = styled.button`
  color: white;
  width: 100%;
  background-color: #ec5990;
  padding: 10px 30px;
  border: 2px solid #ec5990;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: inherit;
  }
`;

interface IButton {
  type: "submit" | "button";
  title: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IButton> = ({ type, title, onClick, className }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
};

export default Button;
