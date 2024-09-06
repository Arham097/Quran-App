import React from "react";
import { FaSearch } from "react-icons/fa";
import SurahList from "./SurahList";
import { useDispatch, useSelector } from "react-redux";
import { filterSurahs } from "../store/surahSlice";

const LeftSection = () => {
  const dispatch = useDispatch();
  const surahs = useSelector((state) => state.surahs.surahsList);
  const filteredSurahs = useSelector(
    (state) => state.surahs.filteredSurahsList
  );

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (searchValue === "") {
      // If the search input is empty, reset to the original list
      dispatch(filterSurahs(surahs));
    } else {
      // Filter the surahs based on the search input
      const filtered = surahs.filter((surah) => {
        return surah.nameSimple.toLowerCase().includes(searchValue);
      });
      dispatch(filterSurahs(filtered));
    }
  };

  return (
    <div className="bg-white basis-1/3 flex flex-col">
      {/* // Search Bar */}
      <div className="bg-slate-500 w-full h-24 flex items-center justify-center">
        <div className="flex items-center bg-white basis-9/12 border-2 border-slate-400">
          <FaSearch className="text-xl text-center w-2/12 " />
          <input
            type="text"
            className="basis-full h-9 border-l-2 outline-none px-1 text-sm"
            placeholder="Search Surah"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* // Surah List */}
      <SurahList />
    </div>
  );
};

export default LeftSection;
