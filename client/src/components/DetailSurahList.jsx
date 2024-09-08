import React from "react";
import Ayaths from "./Ayaths";
import { useSelector } from "react-redux";

const DetailSurahList = () => {
  const surahAyaths = useSelector((store) => store.surahs.surah);
  return (
    <div className="w-full h-full bg-white overflow-y-auto ">
      {surahAyaths?.ayat?.length
        ? surahAyaths.ayat.map((ayat, index) => (
            <Ayaths key={index} ayat={ayat} />
          ))
        : null}
    </div>
  );
};

export default DetailSurahList;
