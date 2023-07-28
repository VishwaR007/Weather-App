import React from 'react'
import { StyleSheet, SafeAreaView, FlatList, View, StatusBar, ImageBackground } from "react-native"
import ListItem from '../components/ListItem';


const UpcomingWeather = ({weatherData}) => {
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
                <FlatList 
                    data={weatherData} 
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