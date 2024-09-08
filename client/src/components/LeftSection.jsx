import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import SurahList from "./SurahList";
import { useDispatch, useSelector } from "react-redux";
import { filterSurahs } from "../store/surahSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LeftSection = ({ toggle }) => {
  const dispatch = useDispatch();
  const leftDiv = useRef();
  useGSAP(() => {
    if (toggle) {
      gsap.from(leftDiv.current, {
        x: -500,
        duration: 0.5,
        opacity: 0,
      });
    }
  }, [toggle]);

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
  useEffect(() => {
    toggle = true;
  }, []);

  return (
    <div
      className={`bg-white basis-1/3 flex flex-col ${
        !toggle ? "max-md:hidden" : "max-md:block w-52"
      }`}
      ref={leftDiv}
    >
      {/* // Search Bar */}
      <div className="bg-teal-600 w-full h-24 flex items-center justify-center">
        <div className="flex items-center bg-white w-10/12 h-3/5 border-2 border-slate-400">
          <FaSearch className="text-xl text-center w-[35px] " />
          <input
            type="text"
            className="w-full h-full border-l-2 outline-none px-1 text-[1.1rem]"
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
