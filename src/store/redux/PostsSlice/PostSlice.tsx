import axios from "axios";
import { createAppSlice } from "../../createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { PostsSliceState } from "./types";
import { Post } from "../../../pages/AllPosts/types";

const postsSliceInitialState: PostsSliceState = {
  isPending: false,
  posts: [],
  error: undefined,
};

export const postsSlice = createAppSlice({
  name: "SIGN_IN",
  initialState: postsSliceInitialState,

  reducers: (create) => ({
    getAll: create.asyncThunk(
      async () => {
        let response = await axios.get(`/api/posts`, {
          headers: {
            "Content-Type": "application/JSON",
          },
        });
        return response;
      },
      {
        pending: (state: PostsSliceState) => {
          state.isPending = true;
          state.error = "";
        },

        fulfilled: (state: PostsSliceState, action) => {
          if (action.payload.data !== undefined) {
            state.posts = action.payload.data.responses;
          }
          state.isPending = false;
        },

        rejected: (state: PostsSliceState, action) => {
          state.error = action.error.message;
          state.isPending = false;
        },
      }
    ),

    getPostsBySubject: create.asyncThunk(
      async (subject: string) => {
        let response = await axios.get(`/api/posts/${subject}`, {
          headers: {
            "Content-Type": "application/JSON",
          },
        });
        return response.data;
      },
      {
        pending: (state: PostsSliceState) => {
          state.isPending = true;
        },

        fulfilled: (state: PostsSliceState, action: any) => {
          if (action.payload.data !== undefined) {
            state.posts = action.payload.data.responses;
          }
          state.isPending = false;
        },

        rejected: (state, action) => {
          state.error = action.error.message;
          state.isPending = false;
        },
      }
    ),

    deletePost: create.asyncThunk(
      async (state: PostsSliceState, action:PayloadAction<number>) => {
        let id = postId;
        let response = await axios.delete(`/api/posts/${id}`, {
          headers: {
            "Content-Type": "application/JSON",
          },
        });
        return response.data;
      },
      {
        pending: (state: PostsSliceState) => {
          state.isPending = true;
        },

        fulfilled: (state: PostsSliceState) => {
          state.posts.map((post) => post.postId !== id);
          state.isPending = false;
        },

        rejected: (state, action) => {
          state.error = action.error.message;
          state.isPending = false;
        },
      }
    ),

    logOut: create.reducer((state: SignInState) => {
      state.error = signInInitialState.error;
      state.isLoggedOn = false;
      state.isPending = false;
      state.user = {
        id: signInInitialState.user.id,
        email: signInInitialState.user.email,
        firstName: signInInitialState.user.firstName,
        lastName: signInInitialState.user.lastName,
        phoneNumber: signInInitialState.user.phoneNumber,
        roles: signInInitialState.user.roles,
      };
      localStorage.removeItem("token");
    }),
  }),

  selectors: {
    user: (state: SignInState) => {
      return state.user;
    },
    isPending: (state: SignInState) => {
      return state.isPending;
    },
    isLoggedOn: (state: SignInState) => {
      return state.isLoggedOn;
    },
    error: (state: SignInState) => {
      return state.error;
    },
  },
});
