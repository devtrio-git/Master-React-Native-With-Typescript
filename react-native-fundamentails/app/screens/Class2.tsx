import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'

import MainLayout from '@/components/layout/MainLayout'
import Fontisto from '@expo/vector-icons/Fontisto';


const Class2 = () => {
    const [checked, setChecked] = useState<boolean>(false)
    return (
        <MainLayout>
            <View style={styles.container}>
                <View>
                    <Image source={require("../../assets/images/react-logo.png")} style={{ width: 200, height: 100 }} resizeMode="contain" />
                </View>
                <View style={styles.card}>
                    <View style={styles.imgContainer}>
                        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG" }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                    </View>
                    <View style={styles.cardContent}>
                        <Text>Cards</Text>
                        {
                            checked ?
                                <TouchableOpacity onPress={() => setChecked(false)}>
                                    <Fontisto name="checkbox-active" size={24} color="black" />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setChecked(true)}>
                                    <Fontisto name="checkbox-passive" size={24} color="black" />
                                </TouchableOpacity>
                        }
                    </View>

                </View>

                <ImageBackground style={styles.BGContainer} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG" }}>
                    <Text>
                        This is  the Text
                    </Text>
                </ImageBackground>
                <View style={{alignItems:"center"}}>
                    <Switch 
                        value={checked}
                        onValueChange={()=> setChecked(prev=> !prev)}
                        trackColor={{true: "lightgreen" , false: "pink"}}
                        thumbColor={checked ? "green" : "red"}
                        style={{transform: [{scale:2}]}}
                    />
                </View>
            </View>
        </MainLayout>

    )
}

export default Class2


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c4c4c4"
    },
    card: {
        borderWidth: 1,
        margin: 10
    },
    imgContainer: {
        height: 200
    },
    cardContent: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    BGContainer: {
        height: 300,
        justifyContent:"center",
        alignItems:"center"
    }
})
