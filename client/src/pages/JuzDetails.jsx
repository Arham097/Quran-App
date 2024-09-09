import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JuzzAyaths from "../components/JuzzAyaths";
import { LuLoader2 } from "react-icons/lu";

const JuzDetails = () => {
  const { no } = useParams();
  const [ayahs, setAyahs] = useState([]);
  const juzzValue = useRef();
  const navigate = useNavigate();
  const [audio, setAudio] = useState(0);
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.alquran.cloud/v1/juz/${no}/quran-uthmaniy`
      );
      const data = await res.json();
      setAyahs(data.data.ayahs);
      setAudio(no);
    };
    fetchData();
  }, [no]);
  const handleJuzz = () => {
    navigate(`/juz/${juzzValue.current.value}`);
  };
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [audio]);

  const handleAudioCanPlay = () => {
    setLoading(false);
  };
  return (
    <div className="w-full min-h-[89.5vh] bg-slate-200 relative flex justify-center overflow-hidden">
      <img src="/bg-islamic.png" alt="" className="w-full absolute" />
      <div className="bg-white w-10/12 h-[500px] absolute overflow-y-auto">
        <div className="w-full h-20 border-b-2 border-gray-400 flex flex-col gap-y-4 max-sm:h-24 mt-7 ">
          <span className="text-6xl text-center text-teal-900 max-sm:text-5xl ">
            {" "}
            ﷽{" "}
          </span>
        </div>
        {ayahs.map(
          (ayah, index) =>
            ayah.number !== 1 && <JuzzAyaths key={index} ayat={ayah} />
        )}
        {/* <Ayaths  /> */}
      </div>
      <div className="w-full h-16 bg-teal-600 absolute bottom-0 flex items-center justify-around border-none">
        <select
          name=""
          id=""
          onChange={handleJuzz}
          ref={juzzValue}
          className=" w-48 px-4 h-10 bg-white border-2 border-gray-400"
          defaultValue={no}
        >
          <option value="1">Juz 1</option>
          <option value="2">Juz 2</option>
          <option value="3">Juz 3</option>
          <option value="4">Juz 4</option>
          <option value="5">Juz 5</option>
          <option value="6">Juz 6</option>
          <option value="7">Juz 7</option>
          <option value="8">Juz 8</option>
          <option value="9">Juz 9</option>
          <option value="10">Juz 10</option>
          <option value="11">Juz 11</option>
          <option value="12">Juz 12</option>
          <option value="13">Juz 13</option>
          <option value="14">Juz 14</option>
          <option value="15">Juz 15</option>
          <option value="16">Juz 16</option>
          <option value="17">Juz 17</option>
          <option value="18">Juz 18</option>
          <option value="19">Juz 19</option>
          <option value="20">Juz 20</option>
          <option value="21">Juz 21</option>
          <option value="22">Juz 22</option>
          <option value="23">Juz 23</option>
          <option value="24">Juz 24</option>
          <option value="25">Juz 25</option>
          <option value="26">Juz 26</option>
          <option value="27">Juz 27</option>
          <option value="28">Juz 28</option>
          <option value="29">Juz 29</option>
          <option value="30">Juz 30</option>
        </select>
        <div className="w-72 h-10 max-md:w-68 max-sm:w-64">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
              <LuLoader2 className="animate-spin text-teal-700 text-4xl" />
            </div>
          )}
          <audio
            controls
            className={`w-full h-10`}
            ref={audioRef}
            onCanPlay={handleAudioCanPlay}
          >
            <source
              src={`https://ia803003.us.archive.org/14/items/ParaViseQuranMp3ReciteBySaudAl-Shuraim/${String(
                audio
              ).padStart(2, "0")}.mp3`}
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default JuzDetails;
