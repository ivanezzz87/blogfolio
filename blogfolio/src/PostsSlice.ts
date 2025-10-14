import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  image?: string;
  date: string;
  title: string;
  description?: string;
  lesson_num?: number;
  author?: number;
}

interface PostsState {
  selectedPost: Post | null;
  favorites: Post[];
}

const initialState: PostsState = {
  selectedPost: null,
  favorites: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<Post>) => {
      state.selectedPost = action.payload;
    },
    clearSelectedPost: (state) => {
      state.selectedPost = null;
    },
    addToFavorites: (state, action: PayloadAction<Post>) => {
      const existingPost = state.favorites.find(post => post.id === action.payload.id);
      if (!existingPost) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(post => post.id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<Post>) => {
      const existingIndex = state.favorites.findIndex(post => post.id === action.payload.id);
      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { 
  setSelectedPost, 
  clearSelectedPost, 
  addToFavorites, 
  removeFromFavorites,
  toggleFavorite 
} = postsSlice.actions;

export default postsSlice.reducer;