import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather/?APPID=43232265c6926144878cb31c3920746a&units=imperial';

export default function getTemp(location) {
  let encodedLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then(function(res){
    //console.log(res); this is the 'data' property on the whole object returned from the api in browser

    if (res.data.cod && res.data.message) {
      throw new Error('not available at this time 1')
    } else {
      return res.data.main.temp;
    }
  }, function(res){
    throw new Error('not available at this time 2')
  })
}
