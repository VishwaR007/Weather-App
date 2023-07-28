import React, {useState, useEffect} from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { View } from "react-native";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true)
  // const [location, setLoaction] = useState(null)
  const [error, setError] = useState(null)
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(`http:api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
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
  }, []);
  // passing empty array to the useEffect at the last means that there are no dependencies and the useEffect will run once when the component is first rendered.

  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
  
  // if(location) {
  //   console.log(`Location : ${location}`);
  // }
  if(lat) {
    console.log(`Latitude : ${lat}`);
  }
  if(lon) {
    console.log(`Longitude : ${lon}`);
  }
  if(weather) {
    console.log(`Weather : ${weather}`);
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})


export default App