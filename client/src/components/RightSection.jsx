import React, { useRef } from "react";
import { RxSpeakerLoud } from "react-icons/rx";
import DetailSurahList from "./DetailSurahList";
import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const RightSection = () => {
  const rightDiv = useRef();
  useGSAP(() => {
    gsap.from(rightDiv.current, {
      x: 500,
      duration: 0.5,
      opacity: 0,
    });
  }, []);
  const surahAyats = useSelector((store) => store.surahs.surah);
  return (
    <div className="flex flex-col basis-2/3 mb-2" ref={rightDiv}>
      <div className="w-full h-24 flex items-center justify-between px-6 bg-white border-b-2 border-gray-200">
        <h3 className="text-2xl font-bold text-teal-700">
          {surahAyats?.ayat?.length ? (
            surahAyats.nomor + " .  " + surahAyats.namaLatin
          ) : (
            <h3 className="opacity-20">Surah</h3>
          )}
        </h3>
        <RxSpeakerLoud className="text-3xl" />
      </div>
      {surahAyats?.ayat?.length ? (
        <DetailSurahList />
      ) : (
        <h3 className="absolute top-1/2 left-1/3 text-5xl opacity-10 font-bold italic">
          Select Surah
        </h3>
      )}
    </div>
  );
};

export default RightSection;
