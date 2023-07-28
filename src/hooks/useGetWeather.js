import React, {useState, useEffect} from "react";
import { View } from "react-native";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env'


export const useGetWeather = () => {

    const [loading, setLoading] = useState(true)
    // const [location, setLoaction] = useState(null)
    const [error, setError] = useState(null)
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    
    const [weather, setWeather] = useState([])

    const fetchWeatherData = async () => {
        try {
          const res = await fetch(`http:api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
          // The above link is from "openweathermap.org/forecast5" = this is the api link of weatherApi
          const data = await res.json()
          setWeather(data)
        } catch (e) {
          setError('Could Not fetch Weather')
        } finally {
          setLoading(false)
        }
      }
    
      useEffect(() => {
        (async() => {
          let {status} = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted'){
            setError('permission to access location was denied')
            return;
          }
          let location02 = await Location.getCurrentPositionAsync({})
          setLat(location02.coords.latitude)
          setLon(location02.coords.longitude)
          // setLoaction(location)
          await fetchWeatherData()
        })();
        // Since we want to immediately invoke this function we give set of paranthasis () at the end of the async function.
      }, [lat, lon]);
      // passing empty array to the useEffect at the last means that there are no dependencies and the useEffect will run once when the component is first rendered.

      return [loading, error, weather]
      // return [loading, true, []]
}