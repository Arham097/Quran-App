const Ayaths = ({ ayat }) => {
  console.log(ayat);
  return (
    <div className="w-full px-6 py-5 border-b-2 border-gray-200 relative ">
      <div>
        <span>{ayat.nomorAyat || ayat.numberInSurah}</span>
        <h1 className="text-4xl font-bold text-right">
          {ayat.teksArab || ayat.text}{" "}
        </h1>
      </div>
      <span className="font-light text-sm">{ayat.teksLatin}</span>
    </div>
  );
};

export default Ayaths;
