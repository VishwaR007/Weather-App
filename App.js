import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import OurChild from "./src/dummy/OurChild";

const App = () => {
  return(
    <UpcomingWeather />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App