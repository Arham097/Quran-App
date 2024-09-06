import React from "react";
import { RxSpeakerLoud } from "react-icons/rx";

const RightSection = () => {
  return (
    <div className="flex flex-col basis-2/3 bg-slate-400">
      <div className="w-full h-16 flex items-center justify-between px-6 bg-white">
        <h3 className="text-2xl font-bold text-teal-700">81. Surah Name</h3>
        <RxSpeakerLoud className="text-3xl" />
      </div>
    </div>
  );
};

export default RightSection;
