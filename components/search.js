import React, { useState, useEffect } from "react";
import Weather from "./moduleweather";
import useFetch from "./usefetch";

export default function Search({ browser, translator }) {
  const [location, setLocation] = useState("");
  const [word, setWord] = useState("");

  const API_URL = `https://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=${browser}&q=${location}`;

  const { dbWeather, loading, error, searchWeather } = useFetch(API_URL);

  if (loading)
    return <span className="text-slate-100">En cours de chargement....</span>;
  if (error) return console.log(error);

  const validButton = () => {
    searchWeather();
    setWord(location);
    setLocation("");
  };

  return (
    <>
      {/* Debut du modult input search ville ou pays */}
      <div className=" font-sans mt-1 mb-2 px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <div className="mx-1 flex items-center">
          <input
            className="block border-0 outline-0 mx-auto w-1/2 px-2 bg-transparent border-b border-sky-300 italic"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={
              browser === "fr"
                ? translator[4].search_city_country_fr
                : translator[4].search_city_country_en
            }
          />
          <button
            onClick={validButton}
            className="border-2 bg-sky-300 rounded w-4/5"
          >
            {browser === "fr"
              ? translator[5].button_search_fr
              : translator[5].button_search_en}
          </button>
        </div>
      </div>
      {/* fin du modult input search ville ou pays */}

      {/* début module results weather search ville ou pays*/}
      {word === "" ? (
        <div></div>
      ) : (
        <div className="px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
          <div className="text-center ">
            <div className="mx-24 border-b border-sky-300">
              <span className="font-semibold capitalize text-md italic">
                {word}
              </span>
            </div>
          </div>
          {dbWeather ? (
            <Weather
              weather={dbWeather}
              translator={translator}
              browser={browser}
            />
          ) : (
            <p></p>
          )}
        </div>
      )}

      {/* fin module results weather search ville ou pays*/}
    </>
  );
}
