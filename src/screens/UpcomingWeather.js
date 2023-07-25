import React from 'react'
import { Text, StyleSheet, SafeAreaView, FlatList, View, StatusBar, ImageBackground } from "react-native"
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: "2022-08-3 1:00:00",
        main: {
            temp_min: 29.34,
            temp_max: 29.24,
        },
        weather: [
            {
                main: "Clear",
            }
        ]
    },
    {
        dt_txt: "2021-08-3 1:00:00",
        main: {
            temp_min: 29.34,
            temp_max: 29.24,
        },
        weather: [
            {
                main: "Cloud",
            }
        ]
    },
    {
        dt_txt: "2020-08-3 1:00:00",
        main: {
            temp_min: 29.34,
            temp_max: 29.24,
        },
        weather: [
            {
                main: "Rain",
            }
        ]
    }
];


const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )

    //  ************ OR ************* Don't use flower bracket
    // const renderItem = ({item}) => <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />

    // If it has only somthing to return in it don't use flower bracket (Eg : renderItem function above). If it has some other content except the returning content then use flower bracket (Eg : Item function above).
    
    const { container, image } = styles

    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/Upcoming-background.jpg')} style={image}>
                <Text>Upcoming Weather</Text>
                <FlatList 
                    data={DATA} 
                    renderItem={renderItem} 
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
       flex: 1
    }
})

export default UpcomingWeather