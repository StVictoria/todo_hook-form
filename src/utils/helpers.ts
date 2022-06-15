import { ITodo } from './../models/ITodo';

export const filterTodosByType = (todos: ITodo[], type: "active" | "done" | "removed") => todos.filter((todo) => todo.type === type)