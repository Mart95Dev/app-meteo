import { useState } from "react";
import axios from "axios";

function UseFetch(url) {
  const [dbWeather, setDbWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     setLoading(true);
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         setDbWeather(response.data);
  //       })
  //       .catch((err) => {
  //         setError(err);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, [url]);

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

export default UseFetch;
