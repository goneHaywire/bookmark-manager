import { configureStore } from "@reduxjs/toolkit";
import bookmarksSlice from "./features/bookmarks/bookmarks.slice";
import tagsSlice from "./features/tags/tags.slice";

const store = configureStore({
  reducer: {
    tags: tagsSlice,
    bookmark: bookmarksSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
