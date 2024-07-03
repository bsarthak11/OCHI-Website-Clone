import React from "react";
const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#325853]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute px-3 py-1 border-2 rounded-full left-5 bottom-5">
            RATING
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full flex justify-center items-center bg-zinc-800">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute   px-2 py-1 border-2 rounded-full left-5   bottom-5">
            BootCamp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
