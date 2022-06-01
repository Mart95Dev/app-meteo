import React, { useState, useEffect } from "react";
import Weather from "../components/Weather";
import axios from "axios";

export default function LocationIp({
  browser,
  cityLanguageFrench,
  countryLanguageFrench,
  countryName,
  capitalCityName,
  flag,
}) {
  const [dbWeather, setDbWeather] = useState(null);
  const [translator, setTranslator] = useState(null);

  // recupération des données méteo depuis l'Api
  const getWeather = async () => {
    let apiUrl = "";
    const navigator = window.navigator.language.slice(0, 2);
    if (navigator == "fr") {
      apiUrl = `http://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=fr&q=${countryName}`;
    } else {
      apiUrl = `http://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=en&q=${countryName}`;
    }
    const { data } = await axios(apiUrl);
    setDbWeather(data.current);
  };

  //récupération translation titre module météo sur interface
  const getTranslator = async () => {
    const data2 = await import("../data/translator.json");
    setTranslator(data2.translator);
  };

  useEffect(() => {
    getWeather();
    getTranslator();
  }, []);

  //affichage de l'attribut image en fonction du drapeau de localisation
  const flagAlt = `Drapeau de ${countryName}`;

  return (
    <div className=" font-sans px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
      <ul className="flex space-x-20 space-y-0 items-center">
        <li>
          <img
            className="mt-1 border-2 border-gray-500 rounded min-w-80"
            src={flag}
            alt={flagAlt}
          />
        </li>
        <li>
          <span className="mr-2">Pays:</span>
          <span className="font-semibold">
            {browser === "fr" ? countryLanguageFrench : countryName}
          </span>
        </li>
        <li>
          <span className="mr-2">Capitale:</span>
          <span className="font-semibold">
            {browser === "fr" ? cityLanguageFrench : capitalCityName}
          </span>
        </li>
      </ul>
      {dbWeather && translator ? (
        <Weather
          weather={dbWeather}
          translator={translator}
          browser={browser}
        />
      ) : (
        <p>En cours de chargement</p>
      )}
    </div>
  );
}
