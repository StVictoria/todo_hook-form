import { useEffect, useState } from "react";
import styled from "styled-components";
import { todoAPI } from "../services/TodoAPI";
import AddTodoForm from "./AddTodoForm";
import ActiveList from "./ActiveList";
import List from "./List";
import ColumnBlock from "./ColumnBlock";
import Loader from "./Loader";
import { filterTodosByType } from "../utils/helpers";
import { ITodo } from "../models/todoModels";

const AppStyled = styled.div`
  display: flex;
  overflow: hidden;
`;

interface ILists {
  active: ITodo[],
  done: ITodo[],
  removed: ITodo[],
}

const App: React.FC = () => {
  const [lists, setLists] = useState<ILists>({
    active: [],
    done: [],
    removed: [],
  });
  const { data: todos, isLoading: isTodosLoading } = todoAPI.useFetchAllTodosQuery();

  useEffect(() => {
    if (todos) {
      setLists({
        active: filterTodosByType(todos, "active"),
        done: filterTodosByType(todos, "done"),
        removed: filterTodosByType(todos, "removed"),
      });
    }
  }, [todos]);

  if (isTodosLoading) {
    return <Loader />;
  }

  return (
    <AppStyled>
      {lists.removed.length !== 0 && <List title="REMOVED" data={lists.removed} />}
      <ColumnBlock>
        <AddTodoForm />
        {lists.active.length !== 0 && <ActiveList data={lists.active} />}
      </ColumnBlock>
      {lists.done.length !== 0 && <List title="DONE" data={lists.done} />}
    </AppStyled>
  );
};

export default App;
