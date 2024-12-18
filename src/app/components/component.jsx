"use client";
import React from "react";
import { CiHome, CiLocationOn, CiHeart, CiUser } from "react-icons/ci";

import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

export function SearchInput({
  search,
  onChangeText,
  onPressEnter,
  onPressClick,
}) {
  const [cities, setCities] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

  const debouncedOnChange = debounce((value) => {
    setDebouncedSearch(value);
  }, 300);

  const handleChange = (e) => {
    onChangeText(e);
    debouncedOnChange(e.target.value);
    setIsSuggestionsVisible(true);
  };

  const handleCityClick = (cityName) => {
    onPressClick(cityName);
    setIsSuggestionsVisible(false);
    onChangeText({ target: { value: cityName } });
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      setIsSuggestionsVisible(false);
      onPressEnter && onPressEnter();
    }
  };

  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((res) => res.json())
      .then((countryData) => {
        let arr = [];
        countryData.data.forEach((country) => {
          country.cities.forEach((city) =>
            arr.push({
              city: city,
              country: country.country,
            })
          );
        });
        setCities(arr);
      });
  }, []);

  const filteredCitiesName = cities
    .filter((obj) =>
      obj.city.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => a.city.localeCompare(b.city))
    .slice(0, 5);

  const highlightMatch = (text, query) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;

    const beforeMatch = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const afterMatch = text.slice(index + query.length);

    return (
      <>
        {beforeMatch}
        <span className="font-bold">{match}</span>
        {afterMatch}
      </>
    );
  };

  return (
    <div className="relative w-[580px] z-50 mr-28 ">
      <div className="w-full h-[80px] bg-white rounded-[48px] flex items-center gap-4 px-6 shadow-lg">
        <img className="opacity-50" src="search.png" alt="Search" />
        <input
          type="search"
          placeholder="Search city..."
          className="focus:outline-none border-none h-[60px] w-full text-lg"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {debouncedSearch && isSuggestionsVisible && (
        <div className="absolute w-full bg-white mt-2 rounded-3xl shadow-2xl overflow-y-auto max-h-[225px] z-50">
          {filteredCitiesName.map((cityObj, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-3 cursor-pointer hover:bg-gray-100"
              onClick={() => handleCityClick(cityObj.city)}
            >
              <img
                src="ping.png"
                alt="Location"
                className="opacity-30 w-6 h-8"
              />
              <span className="text-lg text-black font-medium">
                {highlightMatch(cityObj.city, debouncedSearch)},{" "}
                {cityObj.country}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export function Circle({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="border rounded-full border-[#ffffff] border-opacity-[8%] absolute z-20"
    ></div>
  );
}
export function CircleGray({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="border rounded-full border-[#111827] border-opacity-[8%] absolute z-20"
    ></div>
  );
}
export function Square({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-[#0F141E] z-10 rounded-[36px] absolute"
    ></div>
  );
}
export function WhiteSquare({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-stone-50 absolute"
    ></div>
  );
}

export function MidCircle({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-stone-50 rounded-full absolute"
    ></div>
  );
}

export const Icons = ({ value }) => {
  const dayIcons = [
    { Icon: CiHome, label: "Home" },
    { Icon: CiLocationOn, label: "Location" },
    { Icon: CiHeart, label: "Heart" },
    { Icon: CiUser, label: "User" },
  ];

  const nightIcons = [
    { Icon: CiHome, label: "Home" },
    { Icon: CiLocationOn, label: "Location" },
    { Icon: CiHeart, label: "Heart" },
    { Icon: CiUser, label: "User" },
  ];

  const iconsToDisplay = value === "day" ? dayIcons : nightIcons;
  const hoverColor = value === "day" ? "hover:text-black" : "hover:text-white";

  return (
    <div className="flex space-x-16 text-3xl text-[#D1D5DB]">
      {iconsToDisplay.map((item, index) => (
        <item.Icon
          key={index}
          className={`${hoverColor} transition-all duration-300 ease-in-out`}
        />
      ))}
    </div>
  );
};
