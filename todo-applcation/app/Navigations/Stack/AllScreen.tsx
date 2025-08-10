import AddTask from '@/app/Screens/AddTask';
import Effect from '@/app/Screens/Effect';
import Home from '@/app/Screens/Home';
import RandomQuote from '@/app/Screens/RandomQuote';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
export type IStackScreen = {
  Home: undefined,
  AddTask:undefined,
  Effect:undefined,
  RandomQuote: undefined
}
const Stack = createNativeStackNavigator<IStackScreen>();
const AllScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}
        />
        <Stack.Screen name="AddTask" component={AddTask}  options={{headerShown:false}}
        />
        <Stack.Screen name="Effect" component={Effect} />
        <Stack.Screen name="RandomQuote" component={RandomQuote} />
    
       
    </Stack.Navigator>    
  )
}

export default AllScreen



// In React Native (and React in general), useEffect is a hook that lets you run side effects in a functional component.

// A side effect means any action that happens outside the normal rendering process, such as:

// Fetching data from an API
// Updating the screen title
// Setting up event listeners
// Starting a time
// Subscribing to services (e.g., WebSocket, SignalR)



// Parameters
// Callback function
// Runs after the component renders. You can return a cleanup function to run when the component unmounts or before re-running the effect.

// Dependency array
// Controls when the effect runs:

// No array → runs after every render
// Empty array [] → runs only once after the first render
// Array with variables [a, b] → runs when any dependency changes



// useFocusEffect in React Native is a React Navigation hook (not part of core React) that lets you run side effects when a screen comes into focus.
// It’s similar to useEffect, but instead of running on mount/unmount, it runs every time the screen is focused and cleans up when the screen is unfocused.
// When to Use
// Refreshing data when user navigates back to a screen
// Starting/stopping listeners based on screen visibility
// Resetting state when the screen is revisited







