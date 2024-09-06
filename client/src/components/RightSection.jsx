import React from "react";
import { RxSpeakerLoud } from "react-icons/rx";
import DetailSurahList from "./DetailSurahList";
import { useSelector } from "react-redux";

const RightSection = () => {
  const surahAyats = useSelector((store) => store.surahs.surah);
  return (
    <div className="flex flex-col basis-2/3 bg-slate-400 ">
      <div className="w-full h-24 flex items-center justify-between px-6 bg-white border-b-2 border-gray-200">
        <h3 className="text-2xl font-bold text-teal-700">
          {surahAyats?.ayat?.length
            ? surahAyats.nomor + " .  " + surahAyats.namaLatin
            : null}
        </h3>
        <RxSpeakerLoud className="text-3xl" />
      </div>
      <DetailSurahList />
    </div>
  );
};

export default RightSection;
