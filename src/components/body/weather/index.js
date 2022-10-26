import React from 'react'
import Weather from '../../Cards/weatherCard'
import axios from 'axios';
import './index.scss'
const Weathers = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: "Riyadh", days: "1" },
      headers: {
        "X-RapidAPI-Key": "75968c2122mshc78b53ce5e5c7a8p122f51jsnba08182291e0",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
      }
    };
    const value = []
    axios
      .request(options)
      .then((response) => {
        response.data.forecast.forecastday.map(item => {
          value.push(item.day)
          setData(value)
        })
       
      })
      .catch(function (error) {
        setData(error);
      });
  }, []);

  return (
    <>
      <h1 className='weatherTitle'>Weather</h1>
      <Weather data={data}/>
    </>
  )
}

export default Weathers