import axios from "axios";
import { AppDispatch } from "./../store";
import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";

interface ITodoState {
  todos: ITodo[];
  isLoading: boolean;
  error: string;
}

const initialState: ITodoState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<ITodo[]>("/");
  } catch (e) {
    console.log(e);
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
      usersFetching: (state) => {

      }
  },
});

export default todoSlice.reducer;
