// Here we Study USE-STATE
import React, {useState, useEffect} from 'react'
import {Text, View, Button, StyleSheet, Pressable} from 'react-native'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [newcount, setNewCount] = useState(0)

    // useEffect(() => {
    //     console.log(`Out Count value is ${count}`);
    // })
    // THE ABOVE CODE WILL PRINT ON THE CONSOLE FOR ALL THE BUTTONS PRESSED. BUT THE BELOW CODE WILL PRINT ONLY FOR THE count AND NOT FOR THE newCount.
    // useEffect(() => {
    //     console.log(`Out Count value is ${count}`);
    // }, [count])
    // THE BELOW CODE CONTAINS THE CLEAN UP FUNCTION = cleanup function runs before the next render of the use effect i.e. after completing of the single cycle of useEffect.
    useEffect(() => {
        console.log(`Count Changed to : ${count}`);
        return () => {
            console.log('useEfferct Cleanup')
        }
    }, [count])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count}`}</Text>
            <Button 
                color={'red'}
                title={'Increase the count'}
                onPress={() => setCount(count+1)}
            />
            <Pressable style={styles.button_pressable} onPress={() => setCount(count+1)}>
                <Text>Increment_Pressable</Text>
            </Pressable>
            <Button 
                color={'green'}
                title={'Decrease the count'}
                onPress={() => setCount(count-1)}
            />
            {/* ============================== */}
            <Text>     </Text>
            <Button 
                color={'red'}
                title={'Increase the count'}
                onPress={() => setNewCount(newcount+1)}
            />
            <Button 
                color={'green'}
                title={'Decrease the count'}
                onPress={() => setNewCount(newcount-1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25,
        marginBottom: 50
    },
    button_pressable: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
    },
})

export default Counter