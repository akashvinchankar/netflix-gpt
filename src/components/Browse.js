import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  

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
