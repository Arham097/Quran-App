import React from "react";
import { Link } from "react-router-dom";

const JuzBox = ({ juzNo }) => {
  return (
    <Link to={`/juz/${juzNo}`}>
      <div className="w-full h-20 bg-slate-200 flex justify-center items-center text-white hover:bg-teal-500 group transition-all duration-200 ease-linear">
        <p className="font-semibold text-2xl text-teal-600 group-hover:text-white">
          Juz {juzNo}
        </p>
      </div>
    </Link>
  );
};

export default JuzBox;
