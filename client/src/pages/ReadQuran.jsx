import React, { useEffect, useState } from "react";
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
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" flex w-screen h-screen">
      <LeftSection toggle={toggle} />
      <RightSection handleToggle={handleToggle} toggle={toggle} />
    </div>
  );
};

export default ReadQuran;
