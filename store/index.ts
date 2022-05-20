import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import postReducer from "./modules/post";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export function getAllPostIds() {
  const state = store.getState();
  return state.post.posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));
}
