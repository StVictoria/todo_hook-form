import { IAddTodo, IChangeTodoStatus } from './../models/todoModels';
import { ITodo } from '../models/todoModels';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoAPI = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    fetchAllTodos: build.query<ITodo[], void>({
      query: () => ({
        url: "/todos",
      }),
      providesTags: ["Todos"]
    }),
    addTodo: build.mutation<ITodo, IAddTodo>({
      query: (todo) => ({
        url: '/todos',
        method: "POST",
        body: todo
      }),
      invalidatesTags: ["Todos"]
    }),
    changeTodoStatus: build.mutation<ITodo, IChangeTodoStatus>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"]
    })
  }),
});
