"use client";
import { useState, useEffect } from "react";
import {
  Circle,
  Searchinput,
  Square,
  WhiteSquare,
  MidCircle,
  CircleGray,
  Icons,
} from "./components/component";



const API_KEY = "a9bd50909a544a9c84172455241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [dayweather,setDayWeather] = useState({
    number:0 ,
    condition:'',
  })
  const [nightweather,setNightWeather] = useState({
    nothing:0 ,
    condition:'',
  })
  const onChangeText = (e) => {
    setSearch(e.target.value);
  };

  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          number:(data.forecast.forecastday[0].day.maxtemp_c),
          condition:(data.forecast.forecastday[0].day.condition.text)
        })
        setNightWeather({
          nothing:(data.forecast.forecastday[0].day.mintemp_c),
          condition:(data.forecast.forecastday[0].day.condition.text)
        })   
      });
  }, [city]);
  return (
    <div className="h-screen w-full flex justify-center overflow-hidden">
      <div className="bg-stone-50 w-full h-[1200px] flex items-center flex-col-reverse justify-between pb-[200px] pt-[50px] rounded-l-[42px]">
        <Card value="day" city={city} number={dayweather.number} condition={dayweather.condition}/>
        <Searchinput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        />
      </div>
      <div className="relative w-full h-[1200px] bg-[#0F141E] flex items-center flex-col-reverse justify-between pb-[200px]">
        {/* circle */}
        <MidCircle size={160} top={420} left={-80} />
        <Circle size={340} top={330} left={-170} />
        <CircleGray size={340} top={330} left={-170} />
        <Circle size={540} top={230} left={-270} />
        <CircleGray size={540} top={230} left={-270} />
        <Circle size={940} top={50} left={-460} />
        <CircleGray size={940} top={50} left={-460} />
        <Circle size={1340} top={-120} left={-650} />
        <CircleGray size={1340} top={-120} left={-650} />
        <Circle size={1740} top={-300} left={-880} />
        <CircleGray size={1740} top={-300} left={-880} />
        <Card value="night" city={city} nothing={nightweather.nothing} condition={dayweather.condition} />
        <Square size={100} top={326} left={-0} />
        <Square size={100} top={574} left={-0} />
        <WhiteSquare size={40} top={390} left={-12} />
        <WhiteSquare size={40} top={566} left={-12} />
        <img src="leftlogo.png" className="absolute top-[450px] left-[-50px]"/>
        <img src="rightlogo (2).png" className="absolute top-[450px] left-[10px]"/>
        <img/>
      </div>
    </div>
  );
}

const Card = ({ value, city, number,nothing,condition}) => {
  const cardBackgroundDay = "bg-[#FFFFFF]";
  const sun = "sun.png";

  const temperature = value === "day" ? number: nothing;
  const zurag = value === "day" ? sun : "moon.png";
  const cardBg = value === "day" ? cardBackgroundDay : "bg-[#111827BF]";
  const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";

  const textStyle = value === "day" ? "text-[#FF8E27] font-bold text-[24px]" : "text-[#777CCE] font-bold text-[24px]"

  const colors = value === "day" ? "bg-[#FFFFFFBF]" : nightCardColors;
  const temperatureStyle =
    value === "day"
      ? "text-[96px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6b7280] font-extrabold"
      : "text-[96px] text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] font-extrabold";

  return (
    <div
      className={`w-[414px] h-[832px] rounded-[48px] justify-center ${cardBg} z-10  overflow-hidden`}
    >
      <div className={`w-[398px] h-[504px] rounded-[42px] mt-[10px] ml-[8px] ${colors}`}>
        <div className="flex justify-center">
          <div className="w-[290px] mt-[64px] ml-[48px]">
            <p className="text-md">September 10, 2024</p>
            <h2 className="text-4xl font-extrabold">{city}</h2>
          </div>
          <div className="mt-[93px] w-[92px]">
            <img src="localization_icon.png" alt="localization" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[30px]">
          <img className="h-[200px] w-[200px]" src={zurag} alt={value} />
        </div>
        <div className="mt-[30px] ml-[35px]">
          <p className={temperatureStyle}>{temperature}°</p>
        </div>
        
      </div>
      <div className="mt-[30px] ml-[50px]"><p className={textStyle}>{condition}</p></div>
      <div className="flex justify-center items-center mt-36 gap-20">
          <Icons value={value} />
        </div>
    </div>
  );
};
