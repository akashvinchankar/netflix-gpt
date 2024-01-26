import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-8 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black text-xl p-4 px-12 rounded-lg hover:bg-opacity-90">
          ▶️ Play
        </button>
        <button className="mx-4 bg-gray-500 text-white text-xl p-4 px-12 rounded-lg bg-opacity-75 hover:bg-opacity-90">
          Add More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;