import styled from "styled-components";
import { ReactComponent as TrashIcon } from "../assets/icons/trash.svg";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";
import { IListsState, ITodo } from "../models/ITodo";
import { todoAPI } from "../services/TodoAPI";

interface ITodoListProps {
  data: any;
  className?: string;
}

const TodoListStyled = styled.ul`
  width: 400px;
`;

const TodoStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid grey;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const TodoList: React.FC<ITodoListProps> = ({ data, className }) => {
  const [changeTodoStatus] = todoAPI.useChangeTodoStatusMutation();

  const handleChangeTodo = (id: number, title: string, type: "done" | "removed") => changeTodoStatus({id, title, type});

  return (
    <TodoListStyled>
      {data.map((item: ITodo) => (
        <TodoStyled key={item.id}>
          <button onClick={(e) => handleChangeTodo(item.id, item.title, "removed")}>
            <TrashIcon height={20} />
          </button>
          {item.title}
          <button onClick={(e) => handleChangeTodo(item.id, item.title, "done")}>
            <CheckIcon height={20} />
          </button>
        </TodoStyled>
      ))}
    </TodoListStyled>
  );
};

export default TodoList;
