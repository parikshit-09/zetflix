import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute bg-gradient-to-r from-black w-screen aspect-video text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-red-700 p-4 rounded-full text-white hover:bg-opacity-60">
          + Watch List
        </button>
        <button className="bg-white text-black opacity-75 border border-slate-400 p-4 mx-2 rounded-full hover:bg-opacity-60">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
