import React from "react";
import JuzBox from "../components/JuzBox";

const Juz = () => {
  const juzzNo = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <div className="w-screen h-[680px] bg-slate-200 relative flex justify-center max-md:h-[800px] max-sm:h-[1120px]">
      <img
        src="/bg-islamic.png"
        alt=""
        className="w-full absolute h-[680px] max-md:h-[800px] max-sm:h-[1120px]"
      />
      <div className="main bg-white w-10/12 min-h-[600px] absolute z-10 pt-10 my-5">
        <div className="w-full h-28 border-b-2 border-gray-400 flex flex-col gap-y-4 max-sm:h-24">
          <span className="text-6xl text-center text-teal-900 max-sm:text-5xl">
            {" "}
            ﷽{" "}
          </span>
          <span className="text-2xl text-teal-900 mx-5 max-sm:text-xl">
            Read the Quran by Juz
          </span>
        </div>
        <div className="w-full min-h-80 py-5 px-4 grid grid-cols-6 gap-x-2 gap-y-2 max-md:grid-cols-5 max-sm:grid-cols-3">
          {juzzNo.map((no, index) => (
            <JuzBox key={index} juzNo={no} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Juz;
