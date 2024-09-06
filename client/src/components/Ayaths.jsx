import React from "react";

const Ayaths = ({ ayatNo, arabic, latin }) => {
  return (
    <div className="w-full px-6 py-4 border-b-2  border-gray-200">
      <div>
        <span>{ayatNo}</span>
        <h1 className="text-3xl font-bold text-right">{arabic} </h1>
      </div>
      <span className="font-light text-sm">{latin}</span>
    </div>
  );
};

export default Ayaths;
