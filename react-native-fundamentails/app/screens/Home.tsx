import Counter from "@/components/Counter";
import InputFields from "@/components/InputFields";
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom:250}}>
      <View style={styles.main}>
        <Text style={styles.text}>React Native Class 02</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.box1}>
          <Text style={styles.text1}>box1</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.box2}>
        <Text style={{}}>box2</Text>
      </View>

      <View style={{ padding: 10, gap: 10 }}>

        <TextInput 
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor={"#888"}
        
        />

        <View style={styles.buttonView}>
          <Button title="Submit" color="#ec2f12ff" onPress={() => console.log("Button")} />
        </View>

        <TouchableOpacity style={styles.tButton}>
          <Text style={styles.tText}>Touchable Opacity</Text>
        </TouchableOpacity>

        <Pressable style={({pressed})=>[
          styles.pButton,
          pressed && styles.pressedButton
        ]}>
          <Text style={styles.pText}>Pressable</Text>
        </Pressable>

        <View style={{padding:10}}>
          <Counter defaultValue={10} title="My Counter"/>
          <Counter  defaultValue={20} title="My Increment"/>
          <Counter  defaultValue={30} title="My Decrement"/>
        </View>

        <View>
          <InputFields />
        </View>

      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4c4c4",
    width: "100%"
  },
  main: {
    backgroundColor: "#111113",
    height: "20%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "flex-end",
    padding: 20
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  box1: {
    borderWidth: 2,
    borderColor: "red",
    width: "50%",
    height: 200,
    // padding:20,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "red",

  },
  text1: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    textTransform: "uppercase",
    fontFamily: "serif",
    textDecorationLine: "underline",
    textDecorationColor: "red",
    letterSpacing: 10,

  },
  box2: {
    borderWidth: 2,

  },
  buttonView: {

  },
  tButton: {
    backgroundColor: "#B13BFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  tText: {
    color: "#fff"
  },
  pButton: {
    backgroundColor: "#bf5effff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  pressedButton:{
    backgroundColor:"#450570ff"
  },

  pText: {
    color: "#fff"
  },
  input:{
    borderWidth: 1,
    borderColor: "#888",
    padding:10,
    fontSize:16
  }

})