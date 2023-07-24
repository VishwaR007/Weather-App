import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native'

const DATA = [
    {
        id: '1',
        title: "Vinay"
    },
    {
        id: '2',
        title: "Vishwa"
    },
    {
        id: '3',
        title: "Keerrr"
    }
];

const Item = ({title}) => (
    // const {title} = props
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

const UpcomingWeather = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={({item}) => (<Item title={item.title} />) }
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{backgroundColor: "red", height: 5}} />}
            />
            <Text>Upcoming Weather</Text>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default UpcomingWeather