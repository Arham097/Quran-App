import React, { useEffect } from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import { useDispatch } from "react-redux";
import { setSurahs } from "../store/surahSlice";
import { quran } from "@quranjs/api";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSurahs = async () => {
      const result = await quran.v4.chapters.findAll();
      dispatch(setSurahs(result));
    };
    fetchSurahs();
  }, []);

  return (
    <div className="bg-slate-500 flex w-screen h-screen">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Home;
