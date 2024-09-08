import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ReadQuran from "./pages/ReadQuran";
import Juz from "./pages/Juz";
import JuzDetails from "./pages/JuzDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read-quran" element={<ReadQuran />} />
        <Route path="/juz" element={<Juz />} />
        <Route path="/juz/:no" element={<JuzDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
