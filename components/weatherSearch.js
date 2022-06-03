import React, { useState, useEffect } from "react";
import Weather from "../components/moduleWeather";
import axios from "axios";

export default function weatherIp({ browser, translator }) {
  const [dbWeather, setDbWeather] = useState(null);

  // recupération des données méteo depuis l'Api
  const getWeather = async () => {
    let apiUrl = "";
    const navigator = window.navigator.language.slice(0, 2);
    if (navigator == "fr") {
      apiUrl = `http://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=fr&q=toulouse`;
    } else {
      apiUrl = `http://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=en&q=toulouse`;
    }
    const { data } = await axios(apiUrl);
    setDbWeather(data.current);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {/* Debut du modult input search ville ou pays */}
      <div className=" font-sans mt-1 mb-2 px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <form>
          <div className="flex">
            <input
              className="block border-0 outline-0 mx-auto w-1/2 px-2 bg-transparent border-b border-sky-300 italic"
              type="text"
              placeholder="Ville ou Pays"
            />
            <button className="border-2 bg-sky-300 rounded w-2/5">
              Rechercher
            </button>
          </div>
        </form>
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
          <span className="font-semibold">Toulouse</span>
        </div>

        {dbWeather && translator ? (
          <Weather
            weather={dbWeather}
            translator={translator}
            browser={browser}
          />
        ) : (
          <p>En cours de chargement...</p>
        )}
      </div>
      {/* fin module results weather search ville ou pays*/}
    </>
  );
}
