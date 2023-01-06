import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tag from "./Tag.interface";

const tagsSlice = createSlice({
  name: 'tag',
  initialState: [] as Tag[],
  reducers: {
    addTag: (state, action: PayloadAction<Tag>) => [...state, action.payload],
  }
})

export default tagsSlice.reducer
