export type TodoType = "active" | "done" | "removed";

export interface ITodo {
    id: number;
    title: string;
    type: TodoType;
}

export interface IAddTodo {
    title: string;
    type: TodoType;
}

export interface IChangeTodoStatus extends IAddTodo {
    id: number;
}