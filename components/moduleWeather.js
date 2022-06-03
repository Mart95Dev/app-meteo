import React from "react";

export default function Weather({ weather, translator, browser }) {
  return (
    <div className="mt-1 text-sm ">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center bg-slate-50 drop-shadow-lg rounded">
          <span className="leading-loose">{weather.condition.text}</span>
        </div>
        <div className="flex space-x-16">
          <div className="flex flex-row place-items-center">
            <span>
              <img
                src={weather.condition.icon}
                alt={"icon qui siginifie " + weather.condition.text}
              />
            </span>
          </div>
          <div className="flex flex-col">
            <span className=" text-center leading-loose text-slate-500">
              {browser === "fr" ? translator[9].temp_fr : translator[9].temp_en}
            </span>
            <span className="text-center leading-loose text-lg text-sky-400">
              {weather.temp_c + "°"}
            </span>
            <span className="text-center leading-loose text-slate-500">
              {browser === "fr"
                ? translator[10].precip_mm_fr
                : translator[10].precip_mm_en}
            </span>
            <span className=" text-centerleading-loose text-lg text-sky-400">
              {weather.precip_mm + "mm"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className=" text-center leading-loose text-slate-500">
              {browser === "fr"
                ? translator[8].feelslike_fr
                : translator[8].feelslike_en}
            </span>
            <span className="text-center leading-loose text-lg text-sky-400">
              {weather.feelslike_c + "°"}
            </span>
            <span className="text-center leading-loose text-slate-500">
              {browser === "fr"
                ? translator[11].wind_speed_fr
                : translator[11].wind_speed_en}
            </span>
            <span className="text-center leading-loose text-lg text-sky-400">
              {weather.wind_kph + " kph "}
              {weather.wind_dir}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-center leading-loose text-slate-500">
              {browser === "fr"
                ? translator[12].humidity_fr
                : translator[12].humidity_en}
            </span>
            <span className="text-center leading-loose text-lg text-sky-400">
              {weather.humidity + " %"}
            </span>
            <span className="text-center leading-loose text-slate-500">
              {browser === "fr" ? translator[13].uv_fr : translator[13].uv_en}
            </span>
            <span className="text-center leading-loose text-lg text-sky-400">
              {weather.uv}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}