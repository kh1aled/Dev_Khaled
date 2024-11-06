import { configureStore } from '@reduxjs/toolkit';
import translationReducer from './TranslationSlice';
import themeSlice from "./themeSlice"
export const store = configureStore({
  reducer: {
    translation: translationReducer,
    theme : themeSlice,
  }
});
