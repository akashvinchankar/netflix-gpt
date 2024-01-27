import React from "react";
import { searchLanguageConstants } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const selectedLanguage = useSelector((store) => store.config.language);

  return (
    <div className="w-screen aspect-video pt-[20%] px-8 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black text-xl p-4 px-12 rounded-lg hover:bg-opacity-90">
          ▶️ {searchLanguageConstants[selectedLanguage].playBtn}
        </button>
        <button className="mx-4 bg-gray-500 text-white text-xl p-4 px-12 rounded-lg bg-opacity-75 hover:bg-opacity-90">
          {searchLanguageConstants[selectedLanguage].addMoreBtn}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
