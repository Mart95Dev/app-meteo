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
  translator,
}) {
  const [dbWeather, setDbWeather] = useState(null);

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

  useEffect(() => {
    getWeather();
  }, []);

  //affichage de l'attribut image en fonction du drapeau de localisation
  const flagAlt = `Drapeau de ${countryName}`;

  return (
    <>
      {/* partie jsx pour la location par IP */}
      <div className="px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <ul className="flex space-x-20 space-y-0 items-center">
          <li>
            <img
              className="mt-1 border-2 border-gray-500 rounded min-w-80"
              src={flag}
              alt={flagAlt}
            />
          </li>
          <li>
            <span className="mr-2">
              {browser === "fr"
                ? translator[0].country_fr + ":"
                : translator[0].country_en + ":"}
            </span>
            <span className="font-semibold">
              {browser === "fr" ? countryLanguageFrench : countryName}
            </span>
          </li>
          <li>
            <span className="mr-2">
              {browser === "fr"
                ? translator[1].capital_fr + ":"
                : translator[1].capital_en + ":"}
            </span>
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
      {/*Partie JSX input search météo ville ou pays /> */}
      <h2 className="mx-2 mt-1 mb-1 text-left text-slate-100 drop-shadow-lg">
        INDIQUEZ LA VILLE OU LE PAYS POUR RECHERCHER LA METEO
      </h2>
      <div className=" font-sans mt-1 px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <form>
          <div className="flex">
            <input
              className="block border-0 outline-0 mx-auto w-1/2 px-2 bg-transparent border-b border-sky-300 italic"
              type="text"
              value=""
              placeholder="Ville ou Pays"
            />
            <button className="border-2 bg-sky-300 rounded w-2/5">
              Rechercher
            </button>
          </div>
        </form>
      </div>
      <div>ici resultats recherche méteo ville ou pays</div>
    </>
  );
}
