import styled from "styled-components";
import { ReactComponent as TrashIcon } from "../assets/icons/trash.svg";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";
import { ITodo, TodoType } from "../models/todoModels";
import { todoAPI } from "../services/TodoAPI";

interface IActiveListProps {
  data: ITodo[];
  className?: string;
}

const ActiveListStyled = styled.ul`
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

const ActiveList: React.FC<IActiveListProps> = ({ data, className }) => {
  const [changeTodoStatus] = todoAPI.useChangeTodoStatusMutation();

  const handleChangeTodo = (id: number, title: string, type: TodoType) => changeTodoStatus({ id, title, type });

  const renderTodos = (): JSX.Element[] => data.map((item: ITodo) => (
    <TodoStyled key={item.id}>
      <button onClick={(e) => handleChangeTodo(item.id, item.title, "removed")}>
        <TrashIcon height={20} />
      </button>
      {item.title}
      <button onClick={(e) => handleChangeTodo(item.id, item.title, "done")}>
        <CheckIcon height={20} />
      </button>
    </TodoStyled>
  ));

  return (
    <ActiveListStyled>
      {renderTodos()}
    </ActiveListStyled>
  );
};

export default ActiveList;
