"use client";

import twitterIcon from "../../public/globe.svg";

export default function Home() {
  function Card() {
    return (
      <div className="w-[414px] h-[828px] bg-[#ffffffbf] rounded-[48px] flex justify-center">
        <div className="w-[398px] h-[504px]  rounded-[42px] mt-[5px]">
          <div className="flex justify-center">
            <div className="w-[290px] mt-[64px] ml-[48px]">
              <p className="text-lg">September 10,2024</p>
              <h2 className="text-5xl">Krakow</h2>
            </div>
            <div className="mt-[93px] w-[92px]">
              <img src="localization_icon.png" />
            </div>
            </div>
            <div className="flex justify-center items-center mt-[30px]">
              <img  className="h-[277px] w-[277px]" src="Sun.png" />
            </div>
          
        </div>
      </div>
    );
  }
  return (
    <div className="w-[1863px] h-[1454px] bg-[#404040] flex justify-center items-center">
      <div className="w-[800px] h-[1200px] bg-[#F3F4F6] justify-center items-center rounded-l-[42px] ">
        <div className="w-[520px] h-[80px] bg-[#ffffff] rounded-[48px] flex ml-[24px] items-center gap-[24px]  "><img className="opacity-20" src="Vector.png"/>
        <input placeholder="Search city" className="focus:outline-none border-none"></input>
        </div>
        <Card />
      </div>
      <div className="w-[800px] h-[1200px] bg-[#0F141E] flex justify-center items-center rounded-r-[42px]">
        <Card  />
      </div>
    </div>
  );
}
