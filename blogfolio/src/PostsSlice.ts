import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Post {
  image?: string;
  date: string;
  title: string;
  description?: string;
}

interface PostsState {
  selectedPost: Post | null;
}

const initialState: PostsState = {
  selectedPost: null,
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
  },
});

export const { setSelectedPost, clearSelectedPost } = postsSlice.actions;
export default postsSlice.reducer;