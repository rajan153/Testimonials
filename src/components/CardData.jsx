import React, { useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function CardData(props) {
  const [index, setIndex] = useState(0);
  const data = props.data;
  const newData = data[index];

  function leftHandler() {
    if (index - 1 < 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightHandler() {
    if (index + 1 >= data.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surprising() {
    const data2 = Math.floor(Math.random() * data.length);
    setIndex(data2);
  }
  return (
    <div className="bg-white mt-8 w-[35%] mb-32 relative flex flex-col justify-center items-center p-2 gap-4">
      <img
        src={newData.image}
        className="w-[70px] rounded-full border-purple-400 border border-spacing-x-16 absolute -top-[2rem] left-[2rem] z-10"
      />
      <div className="bg-purple-400 w-[70px] h-[70px] rounded-full absolute -top-[2.5rem] left-[2.5rem]"></div>
      <h2 className="mt-[2rem] font-bold text-xl">{newData.name}</h2>
      <p>{newData.job}</p>
      <ImQuotesLeft className="fill-purple-400" />
      <p className="text-slate-500 text-sm">{newData.text}</p>
      <ImQuotesRight className="fill-purple-400" />
      <div className="flex space-x-4">
        <AiOutlineLeft
          className="fill-purple-400 cursor-pointer"
          onClick={leftHandler}
        />
        <AiOutlineRight
          className="fill-purple-400 cursor-pointer"
          onClick={rightHandler}
        />
      </div>
      <button
        className="p-2 bg-purple-400 font-bold text-white rounded-md mb-4"
        onClick={surprising}
      >
        Surprise Me
      </button>
    </div>
  );
}
