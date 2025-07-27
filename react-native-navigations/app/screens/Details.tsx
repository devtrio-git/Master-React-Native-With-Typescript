import MainLayout from '@/components/Layouts/MainLayout'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../navigations/stack/AllScreens'

type propsType = NativeStackScreenProps<RootStackParamList, "Details">

const Details = ({navigation, route}:propsType) => {
  return (
    <MainLayout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details</Text>
        <Text style={{fontSize:30}}>{route.params.id} | {route.params.name}</Text>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
          <Button title='Go to Start' onPress={() => navigation.pop(2)} />
        </View>
      </View>
    </MainLayout>
  )
}

export default Details
