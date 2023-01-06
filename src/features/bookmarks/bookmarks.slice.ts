import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Bookmark from "./Bookmark.interface";

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: [] as Bookmark[],
  reducers: {
    addBookmark: (state, action: PayloadAction<Bookmark>) => [...state, action.payload],
    removeBookmark: (state, action: PayloadAction<string>) => state.filter(bmark => bmark.url !== action.payload)
  }
})

export const { addBookmark, removeBookmark } = bookmarksSlice.actions
export default bookmarksSlice.reducer
