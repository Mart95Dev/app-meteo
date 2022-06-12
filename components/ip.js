import React, { useState, useEffect } from "react";
import Weather from "./moduleweather";
import Image from "next/image";

export default function Ip({
  dbWeather,
  browser,
  cityLanguageFrench,
  countryLanguageFrench,
  countryName,
  capitalCityName,
  translator,
}) {
  // fonction optimisation image pour next et éviter les erreurs
  // const myLoader = ({ src, width, quality }) => {
  //   return `https://countryflagsapi.com/png/${src}?w=${width}&q=${
  //     quality || 75
  //   }`;
  // };

  // //affichage de l'attribut image en fonction du drapeau de localisation
  const flagAlt = `Drapeau de ${countryName}`;

  return (
    <>
      {/* partie jsx pour la location par IP */}
      <div className="px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <ul className="flex space-x-20 space-y-0 items-center">
          <li>
            <img
              className="mt-1 border-2  border-gray-500 rounded min-w-80"
              width="64"
              height="43"
              src={`https://countryflagsapi.com/png/${countryName}`}
              alt={flagAlt}
            />
            {/* <Image
              loader={countryName && myLoader}
              layout="fixed"
              width={64}
              height={43}
              className="mt-3 rounded min-w-80"
              src={countryName ? countryName : ""}
              alt={flagAlt}
            /> */}
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
