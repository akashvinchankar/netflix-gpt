import React, { useRef } from "react";
import { searchLanguageConstants } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { openai } from "../utils/openai";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const handleGPTSearch = async () => {
    // Make API call to GPT-3.5 Turbo model
    // const gptResults = await openai.chat.completions.create({
    //   messages: [
    //     {
    //       role: "user",
    //       text: searchText.current.value,
    //     },
    //   ],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 p-4 bg-black grid grid-cols-12 rounded-lg shadow-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg font-semibold"
          type="text"
          placeholder={
            searchLanguageConstants[selectedLanguage].gptSearchPlaceholder
          }
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white font-semibold hover:bg-red-800"
          onClick={handleGPTSearch}
        >
          {searchLanguageConstants[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
