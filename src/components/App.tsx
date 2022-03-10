import styled from "styled-components";
import { todoAPI } from "../services/TodoAPI";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const { data } = todoAPI.useFetchAllTodosQuery("");
  console.log(data);
  return (
    <AppStyled>
      <AddTodoForm />
      <TodoList data={data} />
    </AppStyled>
  );
}

export default App;
