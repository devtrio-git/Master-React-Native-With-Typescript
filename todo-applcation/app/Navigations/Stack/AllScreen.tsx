import AddTask from '@/app/Screens/AddTask';
import Home from '@/app/Screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
export type IStackScreen = {
  Home: undefined,
  AddTask:undefined,
}
const Stack = createNativeStackNavigator<IStackScreen>();
const AllScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}
        />
        <Stack.Screen name="AddTask" component={AddTask}  options={{headerShown:false}}
        />
       
    </Stack.Navigator>    
  )
}

export default AllScreen
