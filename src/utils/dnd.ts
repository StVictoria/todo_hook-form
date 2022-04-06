export const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  export const move = (
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
  