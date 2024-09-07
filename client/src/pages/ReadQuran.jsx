import React, { useEffect } from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import { useDispatch } from "react-redux";
import { setSurahs } from "../store/surahSlice";
import { quran } from "@quranjs/api";

const ReadQuran = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSurahs = async () => {
      const result = await quran.v4.chapters.findAll();
      dispatch(setSurahs(result));
    };
    fetchSurahs();
  }, []);

  return (
    <div className=" flex w-screen h-screen">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default ReadQuran;
