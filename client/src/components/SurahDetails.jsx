import React from "react";

const SurahDetails = ({
  surahNum,
  surahName,
  surahMeaning,
  surahPlace,
  ayathCount,
}) => {
  return (
    <div className="w-full h-24 border-b-2 border-teal-600 flex p-4 gap-x-4">
      <div className="text-teal-700 text-xl font-semibold w-1/12 h-full text-center">
        {surahNum}.
      </div>
      <div className="w-11/12 h-full">
        <h1 className="text-teal-700 text-xl font-bold">{surahName}</h1>
        <h5 className="text-gray-800 font-medium">{surahMeaning}</h5>
        <h5 className="text-gray-600 font-medium">
          {surahPlace}, {ayathCount} Ayaths
        </h5>
      </div>
    </div>
  );
};

export default SurahDetails;
