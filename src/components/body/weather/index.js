import React from 'react'
import Weather from '../../Cards/weatherCard'
import axios from 'axios';

const Weathers = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: "London", days: "3" },
      headers: {
        "X-RapidAPI-Key": "75968c2122mshc78b53ce5e5c7a8p122f51jsnba08182291e0",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setData(error);
      });
  }, []);

  return (
    <>
      <Weather data={data}/>
    </>
  )
}

export default Weathers