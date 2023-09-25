import React from "react";
import CardData from "./CardData";
import reviews from '../data'

export default function Card() {
  const data = reviews;
  return (
    <div className="h-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mt-24">Our Testimonials</h1>
      <div className="bg-purple-400 h-1 w-[100px]"></div>
      <CardData data = {data}/>
    </div>
  );
}
