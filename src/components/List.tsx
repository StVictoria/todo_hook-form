import styled from "styled-components";
import { ITodo } from "../models/todoModels";
import ColumnBlock from "./ColumnBlock";

const Title = styled.h2<{ type: string; }>`
  color: ${({ type }) => (type === "REMOVED" ? "grey" : "#05be05")};
`;

const LiStyled = styled.li`
  text-align: center;
  text-decoration: line-through;
  color: grey;
  padding: 10px;
`;

interface IList {
  title: string;
  data: ITodo[];
}

const List: React.FC<IList> = ({ title, data }) => {
  const renderList = (): JSX.Element[] => data.map((item: ITodo) => (
    <LiStyled key={item.id}>
      {item.title}
    </LiStyled>
  ));

  return (
    <ColumnBlock>
      <Title type={title}>{title}</Title>
      <ul>
        {renderList()}
      </ul>
    </ColumnBlock>
  );
};

export default List;
