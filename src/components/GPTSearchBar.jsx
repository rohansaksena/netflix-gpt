import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';


function GPTSearchBar() {

  const languageSelected = useSelector((store) => store.config.lang);


  return (
    <div className="p-[5%] flex justify-center items-center ">
      <form className="w-1/2 bg-black p-4 grid grid-cols-12 gap-2 rounded-md shadow-lg">
        <input
          type="text"
          className="col-span-8 p-2 border border-gray-500 rounded-sm text-black"
          placeholder={lang[languageSelected].GPTSearchPlaceHolder}
        />
        <button className="col-span-4 px-4 py-2 font-semibold bg-red-600 text-white text-center rounded-sm hover:bg-red-700 transition">
        {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
}


export default GPTSearchBar