import { ITodo } from './../models/ITodo';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ITodoBody {
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
      providesTags: result => ["Todos"]
    }),
    addTodo: build.mutation<ITodo, ITodoBody>({
      query: (todo) => ({
        url: '/todos',
        method: "POST",
        body: todo
      }),
      invalidatesTags: ["Todos"]
    }),
    changeTodo: build.mutation<ITodo, ITodoBody>({
      query: (todo) => ({
        url: '/todos',
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"]
    })
  }),
});
