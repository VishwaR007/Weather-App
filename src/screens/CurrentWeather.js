import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
// If we are importing a component no need of using courly bracess, but if we are importing an object we need use courly bracess.
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({weatherData}) => {
  const {wrapper, container, tempStyles, feels, highLow, highLowWrapper, bodyWrapper, discription, message} = styles
  // console.log(`CurrentWeather Data : ${weatherData}`);

  const { main: {temp, feels_like, temp_max, temp_min}, weather } = weatherData

  const weatherCondition = weather[0]?.main

  return(
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>{`Feels Like : ${feels_like}`}</Text>
        <RowText messageOne={`High: ${temp_max}° `} messageTwo={` Low: ${temp_min}°`} containerStyle={highLowWrapper} messageOneStyle={highLow} messageTwoStyle={highLow} />
      </View>
      <RowText messageOne={weather[0]?.description.toUpperCase()} messageTwo={weatherType[weatherCondition]?.message} containerStyle={bodyWrapper} messageOneStyle={discription} messageTwoStyle={message} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 48
  },
  discription: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather