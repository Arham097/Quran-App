import { createSlice } from "@reduxjs/toolkit";

const surahSlice = createSlice({
  name: "surahs",
  initialState: {
    surahsList: [],
    filteredSurahs: [],
    surah: {},
    surahAudio: {}
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
    },
    setSurahAudio: (state, actions) => {
      state.surahAudio = actions.payload;
      console.log("audio", state.surahAudio);
    },
    setJuzz: (state, actions) => {
      state.juzz = actions.payload;
    }
  }
});
export const { setSurahs, filterSurahs, getSurahById, setSurahAudio, setJuzz } = surahSlice.actions;
export default surahSlice;