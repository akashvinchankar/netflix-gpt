import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { searchLanguageConstants } from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  const selectedLanguage = useSelector((store) => store.config.language);

  return (
    <div className="bg-black">
      <div className="-mt-32 relative z-20">
        <MovieList
          title={searchLanguageConstants[selectedLanguage].nowPlaying}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          title={searchLanguageConstants[selectedLanguage].popular}
          movies={movies?.popularMovies}
        />
        <MovieList
          title={searchLanguageConstants[selectedLanguage].upcoming}
          movies={movies?.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
