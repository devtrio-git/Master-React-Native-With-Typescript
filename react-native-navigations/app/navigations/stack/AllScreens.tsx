import About from '@/app/screens/About';
import Details from '@/app/screens/Details';
import Home from '@/app/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

export type RootStackParamList = {
    Home: undefined,
    About: undefined,
    Details: {id:string, name: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const AllScreens = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"} screenOptions={{
        // headerShown:false
        // headerStyle:{backgroundColor:"#999921"},
        // headerTintColor: "#fff",
        // headerTitleStyle:{fontWeight:"bold"},
        // headerTitleAlign:"center"
    }}>
        <Stack.Screen name="Home" component={Home} options={{
            title: "Home Page",headerStyle:{backgroundColor:"#999921"},
            headerRight: ()=>(
                <Button title='Log Out'/>
            ),
            headerTitleAlign: "center"
            
        }}/>
        <Stack.Screen name="About" component={About} options={{
            header: ()=>(
                <View style={{backgroundColor:"red", height:100,justifyContent:"center",alignItems:"center" }}>
                    <Text>About</Text>
                </View>
            )
        }}/>
        <Stack.Screen name="Details" component={Details} options={({route})=>({
            title: route.params.name,
        })}/>
    </Stack.Navigator>
  )
}

export default AllScreens

// 1. const Stack = createNativeStackNavigator();
// 2. maintain type for screen parameters

// 3. Define props types-->  type propsType = NativeStackScreenProps<RootStackParamList, "Home">

// 4. Navigations methods --> navigation. --> navigate(), push(), pop(n), goBack(), popToTop() 