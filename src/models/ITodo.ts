export interface ITodo {
    id: number;
    title: string;
    type: "active" | "done" | "removed";
}

export interface IListsState {
    id: number;
    listName: "activeTodos" | "doneTodos" | "removedTodos";
    list: ITodo[] | null;
  }