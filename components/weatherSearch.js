import React, { useState, useEffect } from "react";
import Weather from "../components/moduleWeather";
import useFetch from "./UseFetch";

export default function weatherIp({ browser, translator }) {
  const [location, setLocation] = useState("");

  const API_URL = `http://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=${browser}&q=${location}`;

  const { dbWeather, loading, error, searchWeather } = useFetch(API_URL);

  if (loading) return <span>En cours de chargement....</span>;
  if (error) return console.log(error);

  console.log(API_URL);
  console.log(dbWeather);

  // // recupération des données méteo depuis l'Api
  // const getWeather = async () => {
  //   let apiUrl = "";
  //   const navigator = window.navigator.language.slice(0, 2);
  //   if (navigator == "fr") {
  //     apiUrl = `http://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=fr&q=strasbourg`;
  //   } else {
  //     apiUrl = `http://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=en&q=strasbourg`;
  //   }
  //   const { data } = await axios(apiUrl);
  //   setDbWeather(data.current);
  // };

  // useEffect(() => {
  //   getWeather();
  // }, []);

  return (
    <>
      {/* Debut du modult input search ville ou pays */}
      <div className=" font-sans mt-1 mb-2 px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <div className="flex items-center">
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
            onClick={searchWeather}
            className="border-2 bg-sky-300 rounded w-2/5"
          >
            {browser === "fr"
              ? translator[5].button_search_fr
              : translator[5].button_search_fr}
          </button>
        </div>
      </div>
      {/* fin du modult input search ville ou pays */}

      {/* début module results weather search ville ou pays*/}
      <div className="px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <div className="text-center">
          <span className="mr-2 text-center">
            {browser === "fr"
              ? translator[15].title_result_search_fr
              : translator[15].title_result_search_en}
          </span>
          <span className="font-semibold">{location}</span>
        </div>

        {dbWeather && translator ? (
          <Weather
            weather={dbWeather}
            translator={translator}
            browser={browser}
          />
        ) : (
          <p></p>
        )}
      </div>
      {/* fin module results weather search ville ou pays*/}
    </>
  );
}
