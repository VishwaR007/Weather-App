import React from 'react'
import { Text, StyleSheet, SafeAreaView, FlatList, View, StatusBar, ImageBackground } from "react-native"
import {Feather} from "@expo/vector-icons"

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

const Item = (props) => {
    const { dt_txt, min, max, condition } = props
    return(
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )

    //  ************ OR ************* Don't use flower bracket
    // const renderItem = ({item}) => <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />

    // If it has only somthing to return in it don't use flower bracket (Eg : renderItem function above). If it has some other content except the returning content then use flower bracket (Eg : Item function above).
    
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/Upcoming-background.jpg')} style={styles.image}>
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
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: "white",
        fontSize: 15
    },
    image: {
       flex: 1
    }
})

export default UpcomingWeather