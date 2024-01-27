import React from "react";
import { searchLanguageConstants } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.language);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg shadow-2xl">
        <input
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={
            searchLanguageConstants[selectedLanguage].gptSearchPlaceholder
          }
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg"
          type="submit"
        >
          {searchLanguageConstants[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
