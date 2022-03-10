import { ITodo } from './../models/ITodo';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoAPI = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    fetchAllTodos: build.query<ITodo[], any>({
      query: () => ({
        url: "/todos",
      }),
      providesTags: result => ["Todo"]
    }),
    addTodo: build.mutation<ITodo, string>({
      query: (todo: string) => ({
        url: '/todos',
        method: "POST",
        body: todo
      }),
      invalidatesTags: ["Todo"]
    })
  }),
});
