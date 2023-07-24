// HERE WE STUDY PROPS -> passed from the app.js

import React from 'react'
import {View, Text} from 'react-native'

const OurChild = (props) => {
    const {message} = props
    return (
        <View style={{height: 200, width: 400, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderBottomStartRadius: 80, borderTopEndRadius: 80}}>
            <Text>{message}</Text>
        </View>
    )
}

export default OurChild