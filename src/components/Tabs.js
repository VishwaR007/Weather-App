import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'


// Initilizing a Tab object
const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  // console.log(`Logs weather : ${weather}`);
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    marginBottom: 10,
                    marginTop: 5,
                    backgroundColor: 'black',
                },
                headerStyle: {
                    backgroundColor: 'black',
                    
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato',
                }
            }}
        >
          <Tab.Screen name={`Current`} options={{
            tabBarIcon: ({focused}) => <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'} />
          }}>
            {() => <CurrentWeather weatherData = {weather.list[0]} />}
          </Tab.Screen> 
          <Tab.Screen name={'Upcoming'} options={{
            tabBarIcon: ({focused}) => (
              <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'} />
            )
          }}>
            {() => <UpcomingWeather weatherData = {weather.list} />}
          </Tab.Screen> 
          <Tab.Screen name={'City'} options={{
            tabBarIcon: ({focused}) => (
              <Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'}/>
            )
          }}>
            {() => <City weatherData={weather.city} />}
          </Tab.Screen> 
      </Tab.Navigator>
    )
}

export default Tabs