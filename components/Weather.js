import React from "react";

export default function Weather() {
  return (
    <div className="mt-1 text-sm ">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center bg-slate-50 drop-shadow-lg rounded">
          <span>Time</span>
        </div>
        <div className="flex space-x-28">
          <div className="flex flex-row place-items-center">
            <span>icon weather</span>
          </div>
          <div className="flex flex-col">
            <span>Temp</span>
            <span>19°</span>
            <span>Pluie</span>
            <span>0mm</span>
          </div>
          <div className="flex flex-col">
            <span>température ressenti</span>
            <span>20</span>
            <span>vent</span>
            <span>17 kmh ouest</span>
          </div>
        </div>
        <div className="flex flex-row space-x-32 ml-20">
          <div className="flex flex-col">
            <span>icon sunrise</span>
            <span>06:14:19</span>
          </div>
          <div className="flex flex-col">
            <span>icon sunset</span>
            <span>17:14:19</span>
          </div>
        </div>
      </div>
    </div>
  );
}
