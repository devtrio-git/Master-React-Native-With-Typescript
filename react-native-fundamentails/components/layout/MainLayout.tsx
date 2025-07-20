import React, { PropsWithChildren } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar"

type Iprop = PropsWithChildren<{

}>

const MainLayout: React.FC<Iprop> = ({children}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor:"#c4c4c4" }} edges={["top", "left", "right"]}>

                <StatusBar hidden={false} style='light'/>

                {children}

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default MainLayout
