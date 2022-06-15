import { ITodo } from './../models/ITodo';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ITodoBody {
  id?: number;
  title: string;
  type: "active" | "done" | "removed";
}

export const todoAPI = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    fetchAllTodos: build.query<ITodo[], any>({
      query: () => ({
        url: "/todos",
      }),
      providesTags: ["Todos"]
    }),
    addTodo: build.mutation<ITodo, ITodoBody>({
      query: (todo) => ({
        url: '/todos',
        method: "POST",
        body: todo
      }),
      invalidatesTags: ["Todos"]
    }),
    changeTodoStatus: build.mutation<ITodo, ITodoBody>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"]
    })
  }),
});
