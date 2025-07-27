import MainLayout from '@/components/Layouts/MainLayout'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../navigations/stack/AllScreens'

type propsType = NativeStackScreenProps<RootStackParamList, "About">

const About = ({ navigation }: propsType) => {
  return (
    <MainLayout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>About</Text>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
          <Button title='Go to Home' onPress={() => navigation.goBack()} />
          <Button title='Go to Details' onPress={() => navigation.navigate("Details", { id: "1", name: "Details From About" })} />
        </View>
      </View>
    </MainLayout>
  )
}

export default About
