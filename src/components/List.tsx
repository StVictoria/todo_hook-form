import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { IListsState, ITodo } from "../models/ITodo";
import ColumnBlock from "./common/ColumnBlock";

const Title = styled.h2<{ type: string }>`
  color: ${({ type }) => (type === "REMOVED" ? "grey" : "#05be05")};
`;

const LiStyled = styled.li`
  text-align: center;
  text-decoration: line-through;
  color: grey;
  padding: 10px;
`;

interface IList {
  title: string;
  data: IListsState | null;
}

const List = ({ title, data }: IList) => {
  return (
    <Droppable droppableId={`${data?.id}`}>
      {(provided) => (
        <ColumnBlock>
          <Title type={title}>{title}</Title>
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {data?.list?.map((item: ITodo, index: number) => (
              <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                {(provided) => (
                  <LiStyled
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    key={item.id}
                    // style={getItemStyle(
                    //   snapshot.isDragging,
                    //   provided.draggableProps.style
                    // )}
                  >
                    {item.title}
                  </LiStyled>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        </ColumnBlock>
      )}
    </Droppable>
  );
};

export default List;
