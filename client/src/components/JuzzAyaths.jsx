import React from "react";

const JuzzAyaths = ({ ayat }) => {
  const ayatText =
    ayat.numberInSurah === 1 ? text.split(" ").slice(4).join(" ") : ayat.text;
  return (
    <div className="w-full px-6 py-5 border-b-2 border-gray-200 relative ">
      <div className="mb-4">
        <span>Ayat :{ayat.numberInSurah}</span>
        <h1
          className={`text-4xl font-bold text-right ${
            ayat.numberInSurah === 1 ? "text-teal-700 text-5xl" : " "
          }`}
        >
          {ayatText}{" "}
        </h1>
      </div>
      <span className="font-light text-2xl px-2 py-1 rounded-2xl bg-teal-700 text-white mt-2">
        {ayat.surah.name}
      </span>
    </div>
  );
};

export default JuzzAyaths;
