import React from "react";

export default function Location({
  browser,
  cityLanguageFrench,
  countryLanguageFrench,
  countryName,
  capitalCityName,
  flag,
}) {
  //affichage de l'attribut image en fonction du drapeau de localisation
  const flagAlt = `Drapeau de ${countryName}`;

  return (
    <div className="mx-auto w-full h-full">
      <h1 className="mt-2 text-2xl text-center font-bold text-slate-50 md:text-3xl">
        M&Eacute;T&Eacute;O
      </h1>
      <h2 className="mx-2 mt-6 mb-2 text-left text-slate-100">
        M&Eacute;T&Eacute;O DE VOTRE G&Eacute;OLOCALISATION:
      </h2>
      <div className="px-1 py- 8 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
        <ul className="flex space-x-12 space-y-1 items-center">
          <li>
            <img
              className="border-2 border-gray-500 rounded min-80 min-64"
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
      </div>
    </div>
  );
}
