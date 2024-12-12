"use client";

import twitterIcon from "../../public/globe.svg";
import { Searchinput } from "./components/searchinput";

export default function Home() {
  return (
    <div className="h-screen w-full flex">
      <div className="w-1/2 h-screen bg-[#F3F4F6] flex flex-col-reverse justify-between items-center  rounded-l-[42px] pb-[80px] pt-[36px]">
        <Card value="day" />
        <Searchinput />
      </div>
      <div className="w-1/2 h-screen bg-[#0F141E] flex flex-col-reverse justify-between items-center rounded-r-[42px] pb-[80px]">
        {/* circle */}
        <Card value="night" />
      </div>
    </div>
  );
}

const Card = ({ value }) => {
  const cardBackgroundDay = "bg-[#FFFFFFbf]";
  const sun = "sun.png";
  const zurag = value === "day" ? sun : "moon.png";
  const cardBg = value === "day" ? cardBackgroundDay : "bg-[#111827BF]";
  const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";

  const colors = value === "day" ? "bg-[#FFFFFFBF]" : nightCardColors;

  return (
    <div
      className={`w-[414px] h-[832px]  rounded-[48px] flex justify-center ${cardBg}`}
    >
      <div className={`w-[398px] h-[504px]  rounded-[42px] mt-[10px]${colors}`}>
        <div className="flex justify-center">
          <div className="w-[290px] mt-[64px] ml-[48px]">
            <p className="text-md">September 10,2024</p>
            <h2 className="text-4xl font-bold">Krakow</h2>
          </div>
          <div className="mt-[93px] w-[92px]">
            <img src="localization_icon.png" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[30px]">
          <img className="h-[200px] w-[200px]" src={zurag} />
        </div>
      </div>
    </div>
  );
};
