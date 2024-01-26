import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
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
