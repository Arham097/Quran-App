import React from "react";
import Ayaths from "./Ayaths";
import { useSelector } from "react-redux";

const DetailSurahList = () => {
  const surahAyaths = useSelector((store) => store.surahs.surah);
  return (
    <div className="w-full h-full bg-white overflow-y-auto ">
      {surahAyaths?.ayat?.length
        ? surahAyaths.ayat.map((surah, index) => (
            <Ayaths
              key={index}
              ayatNo={surah.nomorAyat}
              arabic={surah.teksArab}
              latin={surah.teksLatin}
            />
          ))
        : null}
    </div>
  );
};

export default DetailSurahList;
