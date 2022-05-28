import React from "react";
import { useEffect, useState } from "react";
import Head from "next/head";
import Data from "../data/pictures";
import Location from "../components/Location";

export default function Home(props) {
  console.log(props.location);

  const [browser, setBrowser] = useState("");
  const [countryName, setCountryName] = useState(props.location.country_name);
  const [capitalCityName, setCapitalCityName] = useState(
    props.location.country_capital
  );
  const [flag, setFlag] = useState(props.location.country_flag);

  console.log(countryName);
  console.log(capitalCityName);

  // useEffect pour utiliser le paramètre window qui s'éxécute une seule fois au load de la page
  useEffect(() => {
    const browser = window.navigator.language;
    setBrowser(browser);
  }, []);

  //verification pays de location est identique a pays de country en anglais et on retourne le pays en français
  const countryFrench = () => {
    for (let i = 0; i < props.country.length; i++) {
      if (props.country[i].en === props.location.country_name) {
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

  //On assigne la fonction du ville français à une variable pour faciliter l'utilisation
  const cityLanguageFrench = cityFrench();

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
          <Location
            browser={browser}
            cityLanguageFrench={cityLanguageFrench}
            countryLanguageFrench={countryLanguageFrench}
            countryName={countryName}
            capitalCityName={capitalCityName}
            flag={flag}
          />
        </div>
        <div className="hidden sm:block relative flex-1">{Data.images[0]}</div>
      </main>
    </div>
  );
}

// key api visualcrossing ="6EEVCW7BTCDAXQBWHNXLGF3ZR"
// url api visualcrossing_furure date and current date = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/paris/2022-05-27/2022-05-30?key=6EEVCW7BTCDAXQBWHNXLGF3ZR&FR"
// url api visualcrossing_next_days_hour = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/France?key=6EEVCW7BTCDAXQBWHNXLGF3ZR&lang=fr"

// key api openweather = `4b3031b22dbbe5a92df050da62b15307`
// url api openweather_current = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=4b3031b22dbbe5a92df050da62b15307&lang=en&units=metric"
// url api openweather_current = "api.openweathermap.org/data/2.5/forecast/daily?cnt=5&q=London&appid=4b3031b22dbbe5a92df050da62b15307&lang=en&units=metric"

// key api weather api = `dca9bf60966d4dd9a2f120022222705`
// url api weather api = "https://api.weatherapi.com/v1/search.json?key=dca9bf60966d4dd9a2f120022222705&q=paris"

export async function getStaticProps() {
  const keyIp = "7bee4c110b8a43849ebeb6b837154eae";
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${keyIp}`;

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
