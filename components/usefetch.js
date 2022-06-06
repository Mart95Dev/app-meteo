import { useState } from "react";
import axios from "axios";

// Hook personnalisé pour appeler l'api weather en fonction de la recherche

function usefetch(url) {
  const [dbWeather, setDbWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const test = "";

  const searchWeather = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setDbWeather(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { dbWeather, loading, error, searchWeather };
}

export default usefetch;
