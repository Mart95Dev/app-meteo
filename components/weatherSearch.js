import React from "react";

export default function weatherSearch() {
  return (
    <div className=" font-sans mt-1 px-1 py-0 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
      <form>
        <div className="flex">
          <input
            className="block border-0 outline-0 mx-auto w-1/2 px-2 bg-transparent border-b border-sky-300 italic"
            type="text"
            placeholder="Ville ou Pays"
          />
          <button className="border-2 bg-sky-300 rounded w-2/5">
            Rechercher
          </button>
        </div>
      </form>
    </div>
  );
}
