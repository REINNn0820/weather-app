"use client";

import twitterIcon from "../../public/globe.svg";

export default function Home() {
  function Card() {
    return (
      <div className="w-[414px] h-[828px] bg-[#ffffffbf] rounded-[48px]">
        <div className="w-[398px] h-[504px] bg-[#111827BF]">
          <div className="flex">
            <div className="w-3/4">
              <p>September 10,2024</p>
              <h2>Krakow</h2>
            </div>
            <div>
              <img src="localization_icon.png" />
            </div>
            <div>
              <img src="Sun.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[1863px] h-[1454px] bg-[#404040] flex justify-center items-center">
      <div className="w-[800px] h-[1200px] bg-[#F3F4F6] flex justify-center items-center">
        <Card />
      </div>
      <div className="w-[800px] h-[1200px] bg-[#0F141E] flex justify-center items-center">
        <Card />
      </div>
    </div>
  );
}
