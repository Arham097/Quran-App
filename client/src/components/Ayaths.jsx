const Ayaths = ({ ayat }) => {
  return (
    <div className="w-full px-6 py-5 border-b-2 border-gray-200 relative ">
      <div>
        <span>{ayat.nomorAyat}</span>
        <h1 className="text-3xl font-bold text-right">{ayat.teksArab} </h1>
      </div>
      <span className="font-light text-sm">{ayat.teksLatin}</span>
    </div>
  );
};

export default Ayaths;
