import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Effect = () => {
 const [count, setCount] = useState<number>(0)  
 const [countTwo, setCountTwo] = useState<number>(0)  
 
//  useEffect(()=>{
//      console.log("works normal on every render")
//  })

 useEffect(()=>{
    console.log("works on initial render")

    // clean up function only runs when component unmount
     return ()=>{
        console.log("works on unmount")
    }
 },[]) // only work on first render (when component mount)

 useEffect(()=>{
    console.log("work on initial render and also work when dependency change")

   
 },[countTwo, count])

 console.log("component renders")
  return (
    <View>
        <Text>Use Effect Hook</Text>
        <TouchableOpacity style={styles.button} onPress={()=>setCount(prev => prev+1)}>
           <Text> Counter {count} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>setCountTwo(prev => prev+1)}>
           <Text> CounterTwo {countTwo} </Text>
        </TouchableOpacity>
        </View>
  )
}
const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        padding:10
    }
})

export default Effect
