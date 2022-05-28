import React from "react";

export default function Weather() {
  return (
    <div className="py-1 px-1 mt-1 text-sm ">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center bg-slate-50 drop-shadow-lg rounded">
          <span>Time</span>
        </div>
        <div className="flex flex-row justify-items-center">
          <span>icon weather</span>
          <div className="flex flex-col">
            <span>température</span>
            <span>19°</span>
            <span>pluie</span>
            <span>0mm</span>
          </div>
          <div className="flex flex-col">
            <span>température ressenti</span>
            <span>20</span>
            <span>vent</span>
            <span>17 kmh ouest</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <span>icon sunrise</span>
            <span>06:14:19</span>
          </div>
          <div className="flex flex-col">
            <span>icon sunset</span>
            <span>17:14:19</span>
          </div>
          <div className="flex flex-col">
            <span>icon lunaire</span>
            <span>pleine lune</span>
          </div>
        </div>
      </div>
    </div>
  );
}
