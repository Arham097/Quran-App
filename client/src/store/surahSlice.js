import { createSlice } from "@reduxjs/toolkit";

const surahSlice = createSlice({
  name: "surahs",
  initialState: {
    surahsList: [],
    filteredSurahs: []
  },
  reducers: {
    setSurahs: (state, actions) => {
      state.surahsList = actions.payload;
      state.filteredSurahs = actions.payload;
    },
    filterSurahs: (state, actions) => {
      state.filteredSurahs = actions.payload;
      console.log(state.filteredSurahs)
    }
  }
});
export const { setSurahs, filterSurahs } = surahSlice.actions;
export default surahSlice;