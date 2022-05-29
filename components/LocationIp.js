import React from "react";
import { useState, useEffect } from "react";
import Weather from "../components/Weather";

export default function LocationIp({
  browser,
  cityLanguageFrench,
  countryLanguageFrench,
  countryName,
  capitalCityName,
  flag,
}) {
  const [iconWeather, setIconWeather] = useState([]);
  const [dbWeather, setDbWeather] = useState([]);
  const [apiWeather, setApiWeather] = useState(
    `https://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&q=${countryName}&lang=en`
  );
  // lien connexion si language fr
  const urlApiWeatherFr = `https://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&q=${countryName}&lang=fr`;

  //affichage de l'attribut image en fonction du drapeau de localisation
  const flagAlt = `Drapeau de ${countryName}`;

  // récupération des icons pour l'affichage météo location Ip et Météo recherche
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the iconWeather.json
      const data = await import("../data/icon-weather.json");
      // recupère les données
      const icons = data.iconsWeather;
      setIconWeather(icons);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  // recupération des données méteo depuis l'Api visualcrossing
  useEffect(() => {
    const fetchData2 = async () => {
      const language = browser.slice(0, 2);
      if (language == "fr") setApiWeather(urlApiWeatherFr);
      // get the data from the API weather
      const data2 = await fetch(apiWeather);
      // recupère les données
      const weatherGlobal = data2.json();
      setDbWeather(weatherGlobal);
    };
    // call the function
    fetchData2()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  // console.log(iconWeather);
  console.log(dbWeather);

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
      <Weather />
    </div>
  );
}
