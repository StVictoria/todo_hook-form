import styled from "styled-components";
import AddTodoForm from "./AddTodoForm";
import List from "./List";

const AppStyled = styled.div`
  display: flex;
`;

function App() {
  return (
    <AppStyled>
      <AddTodoForm />
      <List />
    </AppStyled>
  );
}

export default App;
