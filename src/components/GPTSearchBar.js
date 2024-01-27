import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg shadow-2xl">
        <input
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder="What do you like to watch today?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
