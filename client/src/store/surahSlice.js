import { createSlice } from "@reduxjs/toolkit";

const surahSlice = createSlice({
  name: "surahs",
  initialState: {
    surahsList: [],
    filteredSurahs: [],
    surah: {}
  },
  reducers: {
    setSurahs: (state, actions) => {
      state.surahsList = actions.payload;
      state.filteredSurahs = actions.payload;
    },
    filterSurahs: (state, actions) => {
      state.filteredSurahs = actions.payload;
    },
    getSurahById: (state, actions) => {
      state.surah = actions.payload;
    }

  }
});
export const { setSurahs, filterSurahs, getSurahById } = surahSlice.actions;
export default surahSlice;