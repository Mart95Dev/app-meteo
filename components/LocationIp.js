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
  // definition de url de api weather et url connexion
  const keyVisualCrossing = "6EEVCW7BTCDAXQBWHNXLGF3ZR";
  const urlVisualCrossing = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${countryName}/2022-05-27/2022-05-30?iconSet=icons2&key=${keyVisualCrossing}&lang=${browser}`;

  //affichage de l'attribut image en fonction du drapeau de localisation
  const flagAlt = `Drapeau de ${countryName}`;

  // component weather location Ip
  const [iconWeather, setIconWeather] = useState("");

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

  console.log(iconWeather);

  return (
    <div className="px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
      <ul className="flex space-x-20 space-y-0 items-center">
        <li>
          <img
            className="mt-1 border-2 border-gray-500 rounded min-80 min-64"
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
