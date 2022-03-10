import styled from "styled-components";
import { ITodo } from "../models/ITodo";

interface ITodoListProps {
  data: ITodo[] | undefined;
  className?: string;
}

const TodoListStyled = styled.div`
  width: 300px;
`;

const TodoStyled = styled.div`
  max-width: 300px;
  padding: 10px;
  border: 1px solid grey;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const TodoList: React.FC<ITodoListProps> = ({ data, className }) => {
  return (
    <TodoListStyled>
      {data?.map((item: ITodo) => (
        <TodoStyled key={item.id}>{item.title}</TodoStyled>
      ))}
    </TodoListStyled>
  );
};

export default TodoList;
