import styled from "styled-components";
import { todoAPI } from "../services/TodoAPI";
import { DragDropContext } from "react-beautiful-dnd";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import List from "./List";
import ColumnBlock from "./common/ColumnBlock";
import { IListsState } from "../models/ITodo";
import Loader from "./common/Loader";

const AppStyled = styled.div`
  display: flex;
  overflow: hidden;
`;

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  sourceList: any,
  destinationList: any,
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceCloneList = Array.from(sourceList);
  const destCloneList = Array.from(destinationList);
  const [removed] = sourceCloneList.splice(droppableSource.index, 1);

  destCloneList.splice(droppableDestination.index, 0, removed);

  const result: any = {};
  result[droppableSource.droppableId] = sourceCloneList;
  result[droppableDestination.droppableId] = destCloneList;

  return result;
};

function App() {
  const [lists, setLists] = useState<IListsState[]>([
    { id: 0, listName: "activeTodos", list: null },
    { id: 1, listName: "doneTodos", list: null },
    { id: 2, listName: "removedTodos", list: null },
  ]);
  const { data: todos, isLoading: isTodosLoading } = todoAPI.useFetchAllTodosQuery("");

  function onDragEnd({ source, destination }: any) {
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items: any = reorder(lists[sInd].list, source.index, destination.index);
      const newLists: IListsState[] = [...lists];
      newLists[sInd].list = items;
      setLists(newLists);
    } else {
      const result = move(lists[sInd].list, lists[dInd].list, source, destination);
      console.log(lists[sInd].list, lists[dInd].list, source, destination);
      const newLists = [...lists];
      newLists[sInd].list = result[sInd];
      newLists[dInd].list = result[dInd];

      setLists(newLists.filter(group => group?.list?.length));
      
    }
  }

  useEffect(() => {
    if (todos) {
      setLists([
        {
          id: 0,
          listName: "activeTodos",
          list: todos.filter((todo) => todo.type === "active"),
        },
        {
          id: 1,
          listName: "doneTodos",
          list: todos.filter((todo) => todo.type === "done"),
        },
        {
          id: 2,
          listName: "removedTodos",
          list: todos.filter((todo) => todo.type === "removed"),
        },
      ]);
    }
  }, [todos]);

  if (isTodosLoading) {
    return <Loader />
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppStyled>
        {lists[2].list !== null && <List title="REMOVED" data={lists[2]} />}
        <ColumnBlock>
          <AddTodoForm />
          {lists[0].list !== null && <TodoList data={lists[0]} />}
        </ColumnBlock>
        {lists[1].list !== null && <List title="DONE" data={lists[1]} />}
      </AppStyled>
    </DragDropContext>
  );
}

export default App;
