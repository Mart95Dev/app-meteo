import Head from "next/head";
import Data from "../data/pictures";

export default function Home(props) {
  console.log(props.location);

  //verification si le sigle fr est présent dans languages de location
  const languagesLocation = props.location.languages.includes("fr");

  //verification pays de location ets identique a pays de country en anglais et on retourne en français
  const countryFrench = () => {
    for (let i = 0; i < props.country.length; i++) {
      if (props.country[i].en === props.location.country_name) {
        return props.country[i].fr;
      }
    }
  };

  //On assigne la fonction du pays français à une variable pour faciliter l'utilisation
  const countryLanguageFrench = countryFrench();
  console.log(countryLanguageFrench);

  //verification on verifie que pays de city est identique au pays de la variable countryFrench pour retourner la capitale en français
  const cityFrench = () => {
    for (let i = 0; i < props.city.length; i++) {
      if (countryLanguageFrench === props.city[i].pays_FR) {
        return props.city[i].capitale;
      }
    }
  };
  //On assigne la fonction du ville français à une variable pour faciliter l'utilisation
  const cityLanguageFrench = cityFrench();
  console.log(cityLanguageFrench);

  // affichage de l'attribut image en fonction du drapeau de localisation
  const flagAlt = `Drapeau de ${props.location.country_name}`;

  return (
    <div>
      <Head>
        <title>Application météo avec next JS</title>
        <meta
          name="description"
          content="Réaliser une application météo avec Next JS + base avec Firebase"
        />
        <link rel="icon" href="/flavicon/temperatures.png" />
      </Head>
      <main className="min-h[845px] h-screen flex">
        <div
          className={
            " flex-1 flex flex-col bg-gradient-to-b from-sky-300 to-sky-100 "
          }
        >
          <div className="mx-auto w-full h-full">
            <h1 className="mt-2 text-2xl text-center font-bold text-slate-50 md:text-3xl">
              M&Eacute;T&Eacute;O
            </h1>
            <h2 className="mx-2 mt-6 mb-2 text-left text-slate-100">
              M&Eacute;T&Eacute;O DE VOTRE G&Eacute;OLOCALISATION:
            </h2>
            <div className="px-1 py- 8 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
              <ul className="flex space-x-12 space-y-1 mr-4 items-center">
                <li>
                  <img
                    className="border-2 border-gray-500 rounded min-80 min-64"
                    src={props.location.country_flag}
                    alt={flagAlt}
                  />
                </li>
                <li>
                  <span className="mr-1">Pays:</span>
                  <span className="font-semibold">
                    {languagesLocation
                      ? countryLanguageFrench
                      : props.location.country_name}
                  </span>
                </li>
                <li>
                  <span className="mr-1">Capitale:</span>
                  <span className="font-semibold">
                    {languagesLocation
                      ? cityLanguageFrench
                      : props.location.city}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden sm:block relative flex-1">
          {Data.images[0]}
          {/* <img
            src="assets/bg-weather.jpg" // la photo se change de façon aléatoire en fonction du temps de la ville
            alt="photo weather"
            className="h-full w-full object-cover"
          /> */}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const key = "7bee4c110b8a43849ebeb6b837154eae";
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${key}`;

  const data1 = await fetch(url);
  const location = await data1.json();

  const data2 = await import("../data/countries.json");
  const country = data2.countries;

  const data3 = await import("../data/cities.json");
  const city = data3.cities;

  return {
    props: {
      location,
      country,
      city,
    },
  };
}
