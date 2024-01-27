import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10 opacity-90"
          src={BACKGROUND_IMAGE}
          alt="background"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
