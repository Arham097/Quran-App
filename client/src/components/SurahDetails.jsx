import React, { useEffect, useState } from "react";
import { getSurahById } from "../store/surahSlice";
import { useDispatch } from "react-redux";

const SurahDetails = ({
  surahNum,
  surahName,
  surahMeaning,
  surahPlace,
  ayathCount,
}) => {
  const dispatch = useDispatch();
  const fetchSurah = async (surahNum) => {
    try {
      const result = await fetch(`https://equran.id/api/v2/surat/${surahNum}`);
      const data = await result.json();
      dispatch(getSurahById(data.data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="w-full h-24 border-b-2 border-teal-600 flex p-4 gap-x-4 hover:scale-[1.02] hover:border-teal-900 transition-all duration-100 ease-linear"
      onClick={() => fetchSurah(surahNum)}
    >
      <div className="text-teal-700 text-xl font-semibold w-1/12 h-full text-center hover:text-teal-900 transition-all duration-100 ease-linear">
        {surahNum}.
      </div>
      <div className="w-11/12 h-full">
        <h1 className="text-teal-700 text-xl font-bold hover:text-teal-900 transition-all duration-100 ease-linear">
          {surahName}
        </h1>
        <h5 className="text-gray-800 font-medium">{surahMeaning}</h5>
        <h5 className="text-gray-600 font-medium">
          {surahPlace}, {ayathCount} Ayaths
        </h5>
      </div>
    </div>
  );
};

export default SurahDetails;
