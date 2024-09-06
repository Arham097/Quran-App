import { configureStore } from "@reduxjs/toolkit"
import surahSlice from "./surahSlice"

const store = configureStore({
  reducer: {
    surahs: surahSlice.reducer,
  }
})
export default store;