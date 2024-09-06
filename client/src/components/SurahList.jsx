import React from "react";
import SurahDetails from "./SurahDetails";
import { useSelector } from "react-redux";

const SurahList = () => {
  // Use the filteredSurahsList from the Redux store
  const filteredSurahs = useSelector((state) => state.surahs.filteredSurahs);

  return (
    <div className="w-full h-full p-2 overflow-y-auto">
      {filteredSurahs.map((surah, index) => (
        <SurahDetails
          key={index}
          surahNum={surah.id}
          surahName={surah.nameSimple}
          surahPlace={surah.revelationPlace}
          ayathCount={surah.versesCount}
        />
      ))}
    </div>
  );
};

export default SurahList;
