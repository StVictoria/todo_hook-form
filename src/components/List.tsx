import styled from "styled-components";
import { IListsState, ITodo } from "../models/ITodo";
import ColumnBlock from "./common/ColumnBlock";

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
  data: any;
}

const List = ({ title, data }: IList) => {
  return (
    <ColumnBlock>
      <Title type={title}>{title}</Title>
      <ul>
        {data.map((item: ITodo) => (
          <LiStyled key={item.id}>
            {item.title}
          </LiStyled>
        ))}
      </ul>
    </ColumnBlock>
  );
};

export default List;
