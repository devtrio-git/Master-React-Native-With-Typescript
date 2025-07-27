import MainLayout from '@/components/Layouts/MainLayout'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../navigations/stack/AllScreens'

type propsType = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({navigation}:propsType) => {
  return (
    <MainLayout>
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>Home</Text>
            <View style={{flexDirection:"row", gap:10, marginTop:20}}>
                <Button title='Go to About' onPress={() => navigation.navigate("About")}/>
                <Button title='Go to Details' onPress={() => navigation.navigate("Details",{id:"1", name:"Details From Home"})}/>
            </View>
        </View>
    </MainLayout>
  )
}

export default Home
