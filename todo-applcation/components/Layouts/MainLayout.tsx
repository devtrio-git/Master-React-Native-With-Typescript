import { StatusBar } from 'expo-status-bar'
import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

type Iprop = PropsWithChildren<{

}>

const MainLayout: React.FC<Iprop> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1,backgroundColor:"#4A3780"  }} edges={['top', 'left', 'right',]}>
        <View >
        <StatusBar style="light"  />
        </View>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default MainLayout
