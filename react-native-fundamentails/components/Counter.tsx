import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Iprops {
    defaultValue: number,
    title: string
}
// const Counter = (props: Iprops) => {
const Counter: React.FC<Iprops> = (props) => {
    let {title, defaultValue} = props;
    const [counter, setCounter] = useState<number>(defaultValue);

    const decrement = (): void => {
        setCounter(counter - 1)
    }
    const increment = (): void => {
        //    setCounter(counter + 1)
        setCounter(prev => prev + 1)
        // setCounter(prev => prev + 1)
        // setCounter(prev => prev + 1)
    }
    console.log("Component Redered", counter)
    return (
        <View style={styles.container}>
            <Text>{title}: {counter}</Text>
            {
                counter === 0 ? "" :
                    <Text>Value is {counter < 0 ? "Negative" : "Positive"} </Text>
            }
            <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
                <Button title="Decrement" color="red" onPress={decrement} />
                <Button title="Increment" onPress={increment} />
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
})