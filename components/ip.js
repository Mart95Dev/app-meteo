import React, { useState, useEffect } from "react";
import Weather from "./moduleweather";
import axios from "axios";
import Image from "next/image";

export default function Ip({
  browser,
  cityLanguageFrench,
  countryLanguageFrench,
  countryName,
  capitalCityName,
  flag,
  translator,
}) {
  const [dbWeather, setDbWeather] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const file = flag.slice(38);

  // fonction optimisation image pour next et éviter les erreurs
  const myLoader = ({ src, width, quality }) => {
    return `https://ipgeolocation.io/static/flags/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordonates);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  const getCoordonates = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };

  // chargement de la base weather à la géolocalisation
  useEffect(() => {
    getLocation();

    const getWeather = async () => {
      let apiUrl = "";
      const navigator = window.navigator.language.slice(0, 2);
      if (navigator == "fr") {
        apiUrl = `https://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=fr&q=${lat},${long}`;
        console.log(apiUrl);
      } else {
        apiUrl = `https://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=en&q=${lat},${long}`;
        console.log(apiUrl);
      }
      const { data } = await axios(apiUrl);
      setDbWeather(data);
    };

    getWeather();
  }, []);

  // //affichage de l'attribut image en fonction du drapeau de localisation
  const flagAlt = `Drapeau de ${countryName}`;

  return (
    <>
      {/* partie jsx pour la location par IP */}
      <div className="px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <ul className="flex space-x-20 space-y-0 items-center">
          <li>
            <Image
              loader={myLoader}
              layout="fixed"
              width={64}
              height={43}
              className="mt-1 border-2  border-gray-500 rounded min-w-80"
              src={file}
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
          <p>En cours de chargement...</p>
        )}
      </div>
    </>
  );
}
