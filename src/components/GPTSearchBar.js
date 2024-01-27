import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setGptSearchedMovies } from "../utils/gptSlice";
import { searchLanguageConstants } from "../utils/languageConstants";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const tmdbMovieSearch = async (movie) => {
    const tmdbResults = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const tmdbResultsJSON = await tmdbResults.json();
    return tmdbResultsJSON.results;
  };

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

    const gptMovies = searchText.current.value
      ? searchText.current.value.split(",")
      : [
          "Phir Hera Pheri",
          "Sholay",
          "Dilwale Dulhania Le Jayenge",
          "3 Idiots",
          "Lagaan",
          "Andaz Apna Apna",
          "Gangs of Wasseypur",
          "Dil Chahta Hai",
          "Zindagi Na Milegi Dobara",
          "Hera Pheri",
        ];

    // Make API call to TMDB
    const tmdbResults = await Promise.all(
      gptMovies.map(async (movie) => {
        return await tmdbMovieSearch(movie);
      })
    );
    dispatch(
      setGptSearchedMovies({
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
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
