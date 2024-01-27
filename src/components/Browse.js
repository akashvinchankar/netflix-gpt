import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gpt.toggleSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {gptSearch && <GPTSearch />}
      <MainContainer />
      <SecondaryContainer />
      {/* 
      - Main Container
        - Background Video
        - Video Title
      -Secondary Container
        - Video List * n
          - Movie Cards * n 
      */}
    </div>
  );
};

export default Browse;
