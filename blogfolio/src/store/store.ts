import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../PostsSlice'; // Ваш существующий редюсер
import authReducer from '../AuthSlice'; // Новый

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer, // Добавили
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
