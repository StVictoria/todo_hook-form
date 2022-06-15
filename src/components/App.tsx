import { useEffect, useState } from "react";
import styled from "styled-components";
import { todoAPI } from "../services/TodoAPI";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import List from "./List";
import ColumnBlock from "./common/ColumnBlock";
import { IListsState } from "../models/ITodo";
import Loader from "./common/Loader";
import { filterTodosByType } from "../utils/helpers";

const AppStyled = styled.div`
  display: flex;
  overflow: hidden;
`;

function App() {
  const [lists, setLists] = useState<any>({
    active: [],
    done: [],
    removed: [],
  });
  const { data: todos, isLoading: isTodosLoading } = todoAPI.useFetchAllTodosQuery("");

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
        {lists.active.length !== 0 && <TodoList data={lists.active} />}
      </ColumnBlock>
      {lists.done.length !== 0 && <List title="DONE" data={lists.done} />}
    </AppStyled>
  );
}

export default App;
