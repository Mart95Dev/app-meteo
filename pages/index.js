import Head from "next/head";
import Data from "../data/pictures";

export default function Home(props) {
  console.log(props);

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
            <div className="px-1 mr-1 ml-1 border-2 border-slate-100 rounded w-auto bg-gray-50/[0.9] drop-shadow-lg">
              <ul className="flex space-x-12 items-center">
                <li>
                  <img
                    className="border-2 border-gray-500 rounded"
                    src={props.location.country_flag}
                    alt="drapeau"
                  />
                </li>
                <li> Pays : {props.location.country_name}</li>
                <li>Ville : {props.location.city}</li>
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

  const response = await fetch(url);
  const location = await response.json();

  return {
    props: {
      location,
    },
  };
}
