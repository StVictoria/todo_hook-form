import styled from "styled-components";

interface IListProps {
  className?: string;
}

const ListStyled = styled.div`
  width: 50%;
`;

const List: React.FC<IListProps> = ({ className }) => {
  return <ListStyled>LIST</ListStyled>;
};

export default List;
