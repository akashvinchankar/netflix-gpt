import React from "react";
import { IMG_CDN_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useSelector } from "react-redux";
import { searchLanguageConstants } from "../utils/languageConstants";

const MovieCard = ({ movie }) => {
  const selectedLanguage = useSelector((store) => store.config.language);

  return (
    <div className="w-56 pr-4 relative overflow-hidden group">
      <img
        className="rounded-lg transition-transform transform-gpu duration-300 group-hover:scale-105"
        src={IMG_CDN_URL + movie.poster_path}
        alt={movie.title}
      />
      <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 bg-black bg-opacity-70 transition-opacity duration-300 group-hover:opacity-100">
        <h1 className="text-white text-lg font-semibold mb-2">{movie.title}</h1>
        <div className="flex flex-col text-white">
          <p>
            {searchLanguageConstants[selectedLanguage].language}:
            {
              SUPPORTED_LANGUAGES.find(
                (language) => language.identifier === movie?.original_language
              )?.name
            }
          </p>
          <p>
            {searchLanguageConstants[selectedLanguage].rating}:{" "}
            {Math.round(movie.vote_average * 100) / 100}
          </p>
          <p>
            {searchLanguageConstants[selectedLanguage].releaseDate}:{" "}
            {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
