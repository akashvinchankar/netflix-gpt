import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearchPage = () => {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10 opacity-95"
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
