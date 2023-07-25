import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, highLow, highLowWrapper, bodyWrapper, discription, message} = styles
  return(
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={'High:8'} messageTwo={'Low:6'} containerStyle={highLowWrapper} messageOneStyle={highLow} messageTwoStyle={highLow} />
      </View>
      <RowText messageOne={'Its sunny'} messageTwo={'Its perfect t-shirt weather'} containerStyle={bodyWrapper} messageOneStyle={discription} messageTwoStyle={message} />
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
  temp: {
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
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather