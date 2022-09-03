import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from './questions.slice';

export const store = configureStore({
  reducer: {
    questions: questionsSlice
  }
});