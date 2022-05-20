import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IPost, IPostState } from "../types";

const initialState = {
  posts: [
    {
      id: "1",
      title: "오늘의 일기",
      content: "종강... 언제하지?",
      date: "05-17 18:00",
    },
    {
      id: "2",
      title: "세오스 최고",
      content: "헬시어 짱\n👍",
      date: "05-18 20:00",
    },
  ],
} as IPostState;

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [...state.posts, action.payload];
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      state.posts = [
        ...state.posts.filter((post) => post.id !== action.payload.id),
        action.payload,
      ];
    },
    deletePost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...action.payload,
        ...state,
      };
    },
  },
});

export const { addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
