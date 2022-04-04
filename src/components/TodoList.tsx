import styled from "styled-components";
import { ITodo } from "../models/ITodo";

interface ITodoListProps {
  data: ITodo[] | undefined;
  className?: string;
}

const TodoListStyled = styled.ul`
  width: 400px;
`;

const TodoStyled = styled.li`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid grey;

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
