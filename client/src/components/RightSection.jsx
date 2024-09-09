import React, { useRef, useState } from "react";
import DetailSurahList from "./DetailSurahList";
import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { LuLoader2 } from "react-icons/lu";

const RightSection = ({ handleToggle, toggle }) => {
  const [audioNo, setAudioNo] = useState("01");
  const [loading, setLoading] = useState(false);
  const audio = useSelector((store) => store.surahs.surahAudio);

  const audioOptions = useRef();
  const handleAudioOption = () => {
    setAudioNo(audioOptions.current.value);
    setLoading(true);
  };

  const rightDiv = useRef();
  useGSAP(() => {
    gsap.from(rightDiv.current, {
      x: 500,
      duration: 0.5,
      opacity: 0,
    });
  }, []);

  const surahAyats = useSelector((store) => store.surahs.surah);

  const handleAudioCanPlay = () => {
    setLoading(false);
  };

  return (
    <div
      className="flex flex-col basis-2/3 mb-2 mr-4 max-md:basis-full"
      ref={rightDiv}
    >
      <div className="w-full min-h-[90px] flex items-center justify-between px-6 bg-white border-b-2 border-gray-200 max-[550px]:h-[200px]">
        {!toggle ? (
          <IoMenu
            className="text-4xl md:hidden text-teal-700 mr-5"
            onClick={handleToggle}
          />
        ) : (
          <RxCross2
            className="text-4xl md:hidden text-teal-700 mr-5"
            onClick={handleToggle}
          />
        )}
        <div className="flex items-center w-full h-full max-[550px]:flex-col max-[550px]:items-end max-sm:justify-center ">
          <h3
            className={`text-2xl font-bold text-teal-700 ${
              toggle ? " text-[20px] max-sm:mt-[30%]" : ""
            }`}
          >
            {surahAyats?.ayat?.length ? (
              surahAyats.nomor + " .  " + surahAyats.namaLatin
            ) : (
              <p className="opacity-10">Surah</p>
            )}
          </h3>
          <div className="flex items-center max-[1100px]:flex-col gap-x-2 flex-1 justify-evenly max-[1100px]:gap-y-2 max-[1100px]:items-end max-sm:justify-center max-h-20">
            {surahAyats?.ayat?.length && !toggle ? (
              <div className="border-2 border-gray-300 px-1 flex items-center h-8 justify-center">
                <span className="font-semibold">Reciter: </span>
                <select
                  name=""
                  id=""
                  ref={audioOptions}
                  onChange={handleAudioOption}
                  className="outline-none w-4/6 "
                >
                  <option value="01">Abdullah-Al-Juhany</option>
                  <option value="02">Abdul-Muhsin-Al-Qasim</option>
                  <option value="03">Abdurrahman-as-Sudais</option>
                  <option value="04">Ibrahim-Al-Dossari</option>
                  <option value="05">Misyari-Rasyid-Al-Afasi</option>
                </select>
              </div>
            ) : null}
            {surahAyats?.ayat?.length && !toggle ? (
              <div className="relative">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                    <LuLoader2 className="animate-spin text-teal-700 text-4xl" />
                  </div>
                )}
                <audio
                  key={audio[audioNo]}
                  controls
                  className={`outline-none max-[1100px]:h-9 max-w-96`}
                  onCanPlay={handleAudioCanPlay}
                >
                  <source src={audio[audioNo]} type="audio/mpeg" />
                </audio>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {surahAyats?.ayat?.length ? (
        <DetailSurahList />
      ) : (
        <p className="absolute top-1/2 left-1/3 text-5xl opacity-20 font-bold italic mx-auto">
          Select Surah
        </p>
      )}
    </div>
  );
};

export default RightSection;
