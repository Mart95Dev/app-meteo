import React from "react";
import { useEffect, useState } from "react";
import Head from "next/head";
import Pictures from "../data/pictures";
import WeatherIp from "../components/ip";
import WeatherSearch from "../components/search";
import axios from "axios";

export default function Home(props) {
  // creer des variables pour les props pour le module location
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cityLocation, setCityLocation] = useState("");
  const [browser, setBrowser] = useState("");
  const [countryName, setCountryName] = useState("");
  const [capitalCityName, setCapitalCityName] = useState();
  const [dbWeather, setDbWeather] = useState("");

  // choix aléatoire de sphotos au rechargement de la page
  const randomImg =
    Pictures.images[Math.floor(Math.random() * Pictures.images.length)];

  // afficher le pays du drapeau dans attribut alt
  const [flag, setFlag] = useState(""); //props.location.country_flag

  // useEffect pour utiliser le paramètre window qui s'éxécute une seule fois au load de la page
  useEffect(() => {
    const browser = window.navigator.language.slice(0, 2);
    setBrowser(browser);

    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
      getCountryCoordonates();
      getWeather();
    };

    const getCountryCoordonates = async () => {
      const API_KEY = "104f47a547c971ceb1807a4930f72552";
      let city = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
      const { data } = await axios(city);
      setCityLocation(data[0].name);
    };

    const getWeather = async () => {
      let API_URL = `https://api.weatherapi.com/v1/current.json?key=dca9bf60966d4dd9a2f120022222705&lang=${browser}&q=${cityLocation}`;
      const { data } = await axios(API_URL);
      setCountryName(data.location.country);
      setCapitalCityName(data.location.region);
      setDbWeather(data);
    };

    getLocation();
  }, [latitude, longitude, cityLocation]);

  //verification pays de location est identique a pays de country en anglais et on retourne le pays en français
  const countryFrench = () => {
    for (let i = 0; i < props.country.length; i++) {
      if (props.country[i].en === countryName) {
        return props.country[i].fr;
      }
    }
  };

  //On assigne la fonction du pays français à une variable pour faciliter l'utilisation
  const countryLanguageFrench = countryFrench();

  //verification on verifie que pays de city est identique au pays de la variable countryFrench pour retourner la capitale en français
  const cityFrench = () => {
    for (let i = 0; i < props.city.length; i++) {
      if (countryLanguageFrench === props.city[i].pays_FR) {
        return props.city[i].capitale;
      }
    }
  };

  //On assigne la fonction de ville français à une variable pour faciliter l'utilisation
  const cityLanguageFrench = cityFrench();

  return (
    <div>
      <Head>
        <title>
          {browser === "fr"
            ? props.translator[6].title_navigator_fr
            : props.translator[6].title_navigator_en}
        </title>
        <meta
          name="description"
          content={
            browser === "fr"
              ? props.translator[7].title_content_fr
              : props.translator[7].title_content_en
          }
        />
        <link rel="icon" href="/flavicon/temperatures.png" />
      </Head>

      <main className="min-w[505px] min-h[845px] h-screen flex">
        <div
          className={
            "flex-1 flex flex-col bg-gradient-to-b from-sky-300 to-sky-100 "
          }
        >
          <div className="mx-auto w-full h-full">
            {/*Titre de présentation du projet*/}
            <h1 className="mt-1 text-2xl text-center font-bold text-slate-50 md:text-2xl">
              {browser === "fr"
                ? props.translator[14].title_app_fr
                : props.translator[14].title_app_en}
            </h1>
            {/*fin titre de présentation du projet*/}

            {/*container de présentation du module weather Ip*/}
            <h2 className="mx-2 mt-2 mb-1 text-left text-slate-100 text-md">
              {browser === "fr"
                ? props.translator[2].geolocalisation_fr
                : props.translator[2].geolocalisation_en}
            </h2>
            <WeatherIp
              browser={browser}
              dbWeather={dbWeather}
              cityLanguageFrench={cityLanguageFrench}
              countryLanguageFrench={countryLanguageFrench}
              countryName={countryName}
              capitalCityName={capitalCityName}
              translator={props.translator}
              // ipBrowser={props.ipLocation.ip}
            />
            {/* fin du container weather IP */}
            {/* début container weather search élément fixe de présentation*/}
            <h2 className="mx-2 mt-2 mb-1 text-left text-slate-100">
              {browser === "fr"
                ? props.translator[3].weather_search_fr
                : props.translator[3].weather_search_en}
            </h2>
            <WeatherSearch browser={browser} translator={props.translator} />
            {/* fin du container weather search */}
          </div>

          {/* debut photo de présentation sur app meteo */}
        </div>
        <div className="hidden sm:block relative flex-1">{randomImg}</div>
        {/* debut photo de présentation sur app meteo */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data2 = await import("../data/countries.json");
  const country = data2.countries;

  const data3 = await import("../data/cities.json");
  const city = data3.cities;

  const data4 = await import("../data/translator.json");
  const translator = data4.translator;

  // const data5 = await fetch(
  //   "https://www.weatherapi.com/docs/weather_conditions.json"
  // );
  // const codeWeather = await data5.json();

  return {
    props: {
      country,
      city,
      translator,
      // codeWeather,
    },
  };
}
