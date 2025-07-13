import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

interface IUser {
    name: string,
    age: string
}

const InputFields = () => {
    // const [name, setName] = useState<string>("")
    // const [age, setAge] = useState<string>("")
    const [user, setUser] = useState<IUser>({
        name:"",
        age:""
    })

    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = ()=>{
        setIsSubmit(true)
    }
    const onInputChange = (key:string, text:string)=>{
        setIsSubmit(false)
        setUser((prev) => ( {...prev, [key]: text} ))
    }

    let fruits = [
        {name: "Apple", color:"red"},
        {name: "Mango", color:"yellow"},
        {name: "Banana", color:"yellow"},

    ]


    return (
        <View style={{gap:5}}>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                placeholderTextColor={"#888"}
                value={user.name}
                onChangeText={(text)=> onInputChange("name", text)}

            />
            <TextInput
                style={styles.input}
                placeholder="Enter Age"
                placeholderTextColor={"#888"}
                value={user.age}
                onChangeText={(text)=> onInputChange("age",text)}


            />
            <Button title='Submit' onPress={handleSubmit}/>
            {
                isSubmit &&
            <View>
                <Text>Name: {user.name}</Text>
                <Text>Age: {user.age}</Text>
            </View>
            }
            {
                fruits.map((item,key)=>{return(
                    <Text key={key} style={{color: item.color}}>{item.name}</Text>
                )})
            }
        </View>
    )
}

export default InputFields

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#888",
        padding: 10,
        fontSize: 16
    }
})