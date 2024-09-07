import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ReadQuran from "./pages/ReadQuran";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read-quran" element={<ReadQuran />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
