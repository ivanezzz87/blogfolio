import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

// Базовый URL API
const API_BASE_URL = "https://studapi.teachmeskills.by";

export interface PostEntity {
  id: number;
  image?: string;
  description?: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
}

export interface FetchPostsParams {
  group?: number;
  page?: number;
  limit?: number;
  lesson_num__gt?: number;
}

interface PostsState {
  posts: PostEntity[];
  favorites: PostEntity[];
  selectedPost: PostEntity | null;
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  postDetail: PostEntity | null;
  postDetailLoading: boolean;
  postDetailError: string | null;
}

const initialState: PostsState = {
  posts: [],
  favorites: [],
  selectedPost: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  postDetail: null,
  postDetailLoading: false,
  postDetailError: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (params: FetchPostsParams = {}) => {
    try {
      const { group = 18, page = 1, limit = 10, lesson_num__gt } = params;

      const queryParams = {
        author__course_group: group,
        limit,
        offset: (page - 1) * limit,
        ...(lesson_num__gt !== undefined ? { lesson_num__gt } : {}),
      };

      const response = await axios.get(`${API_BASE_URL}/blog/posts/`, {
        params: queryParams,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch posts"
        );
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }
);
export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (postId: number) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/blog/posts/${postId}/`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch post"
        );
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<PostEntity>) => {
      state.selectedPost = action.payload;
    },
    clearSelectedPost: (state) => {
      state.selectedPost = null;
    },
    addToFavorites: (state, action: PayloadAction<PostEntity>) => {
      const existingPost = state.favorites.find(
        (post) => post.id === action.payload.id
      );
      if (!existingPost) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (post) => post.id !== action.payload
      );
    },
    toggleFavorite: (state, action: PayloadAction<PostEntity>) => {
      const existingIndex = state.favorites.findIndex(
        (post) => post.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.results.map((post: PostEntity) => ({
          id: post.id,
          title: post.title,
          description: post.description,
          date: new Date(post.date).toISOString().split("T")[0],
          lesson_num: post.lesson_num,
          author: post.author,
          image: post.image,
        }));
        state.totalPages = Math.ceil(action.payload.count / 10);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      })
      .addCase(fetchPostById.pending, (state) => {
        state.postDetailLoading = true;
        state.postDetailError = null;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.postDetailLoading = false;
        state.postDetail = {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          date: new Date(action.payload.date).toISOString().split("T")[0],
          lesson_num: action.payload.lesson_num,
          author: action.payload.author,
          image: action.payload.image,
        };
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.postDetailLoading = false;
        state.postDetailError = action.error.message || "Failed to fetch post";
      });
  },
});
export const {
  setSelectedPost,
  clearSelectedPost,
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  setCurrentPage,
  clearError,
} = postsSlice.actions;

export default postsSlice.reducer;
