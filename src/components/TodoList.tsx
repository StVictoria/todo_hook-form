import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { IListsState, ITodo } from "../models/ITodo";

interface ITodoListProps {
  data: IListsState | null;
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
    <Droppable droppableId={`${data?.id}`}>
      {(provided) => (
        <TodoListStyled {...provided.droppableProps} ref={provided.innerRef}>
          {data?.list?.map((item: ITodo, index: number) => (
            <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
              {(provided) => (
                <TodoStyled
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  key={item.id}
                  ref={provided.innerRef}
                >
                  {item.title}
                </TodoStyled>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </TodoListStyled>
      )}
    </Droppable>
  );
};

export default TodoList;
