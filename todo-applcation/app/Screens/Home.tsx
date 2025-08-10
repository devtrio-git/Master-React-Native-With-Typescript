import TodoCard from '@/components/Cards/TodoCard';
import PageLayout from '@/components/Layouts/MainLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import React, { useCallback, useState } from 'react';
import { Alert, Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IStackScreen } from '../Navigations/Stack/AllScreen';


type propsType = NativeStackScreenProps<IStackScreen, "Home">

export interface ITodoItem {
    id: number;
    title: string;
    category: string;
    date: string;
    time: string;
    notes: string;
    completed: boolean;
}

const data = [
    {
        id: 1,
        title: "Study Lession",
        category: "goal",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Study the new lesson for the upcoming exam.",
        completed: false
    },
    {
        id: 2,
        title: "Grocery Shopping",
        category: "notes",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Buy groceries for the week.",
        completed: false
    },
    {
        id: 3,
        title: "Workout",
        category: "goal",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Complete a 30-minute workout session.",
        completed: true
    },
    {
        id: 4,
        title: "Read a Book",
        category: "event",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Finish reading the current book.",
        completed: false
    },
    {
        id: 5,
        title: "Plan a Trip",
        category: "event",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Plan the itinerary for the upcoming trip.",
        completed: false
    },
    {
        id: 6,
        title: "Attend Meeting",
        category: "notes",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Attend the team meeting scheduled for tomorrow.",
        completed: true
    },
    {
        id: 7,
        title: "Complete Project",
        category: "goal",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Finish the project by the end of the week.",
        completed: false
    },
    {
        id: 8,
        title: "Call Mom",
        category: "notes",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Call mom to check in.",
        completed: false
    },
    {
        id: 9,
        title: "Write Blog Post",
        category: "event",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Write a new blog post for the website.",
        completed: true
    },
    {
        id: 10,
        title: "Clean the House",
        category: "goal",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Clean the house before the weekend.",
        completed: false
    },
    {
        id: 11,
        title: "Prepare Presentation",
        category: "notes",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Prepare the presentation for the upcoming meeting.",
        completed: false
    },
    {
        id: 12,
        title: "Buy Birthday Gift",
        category: "event",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Buy a birthday gift for a friend.",
        completed: true
    },
    {
        id: 13,
        title: "Organize Files",
        category: "goal",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Organize files and documents on the computer.",
        completed: false
    },
    {
        id: 14,
        title: "Attend Workshop",
        category: "notes",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Attend the workshop on personal development.",
        completed: true
    },
    {
        id: 15,
        title: "Plan Weekend",
        category: "event",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Plan activities for the weekend.",
        completed: true
    },
    {
        id: 16,
        title: "Update Resume",
        category: "goal",
        date: new Date().toISOString(),
        time: new Date().toISOString(),
        notes: "Update the resume with recent experiences.",
        completed: true
    },
]

const Home = (props: propsType) => {
    const { navigation } = props;
    const { width, height } = Dimensions.get('window');
    const [todos, setTodos] = React.useState<ITodoItem[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([])

    // useEffect(() => {
    //     getTodoData()
    //     console.log("Running")
    // }, []) // only run at first time

    useFocusEffect(
        useCallback(()=>{
            getTodoData()
            console.log("Running") 

        },[])
    )

    const getTodoData = async () => {
        console.log("runnning")
        let data: any = await AsyncStorage.getItem("todoItems")
        data = data ? JSON.parse(data) : [];
        setTodos(data)
    }

    const handleSelect = (id: number) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(x => x !== id))
        } else {
            setSelectedIds([...selectedIds, id])
        }
    }

    const handleCompleteTasks = async ()=>{
        if(selectedIds?.length){
            let todosCopy = [...todos];
            
            let updated = todosCopy.map((item) => selectedIds.includes(item.id) ? {...item, completed:true} : item )

            await AsyncStorage.setItem("todoItems", JSON.stringify(updated))

            Alert.alert("Success", `${selectedIds.length} task marks as completed`)

            setTodos(updated)
            setSelectedIds([])
        }
    }

    return (
        <PageLayout>
            <ScrollView contentContainerStyle={{ paddingBottom: 50, backgroundColor: "#F2F5F9", minHeight: height }}>
                {/* header */}
                <View
                    style={{
                        height: 230,
                        backgroundColor: '#4A3780',
                        padding: 20,
                        zIndex: 1
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 16, textAlign: "center", fontWeight: "bold" }}>{moment(new Date()).format("MMMM DD, YYYY")}</Text>

                    <Text style={{ color: '#fff', fontSize: 36, textAlign: "center", fontWeight: "900", alignSelf: "center", verticalAlign: "middle", marginTop: 32 }}>My Todo List</Text>
                </View>

                <View style={styles.container}>

                    <View style={styles.main}>

                        <View style={styles.todoContainer}>
                            <FlatList
                                data={todos?.filter(x => x?.completed === false)}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) =>
                                    <TodoCard item={item} selectedIds={selectedIds} handleSelect={handleSelect} />

                                }

                            />

                        </View>

                        <View style={{ flexDirection: "row", paddingVertical: 15, justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 16, letterSpacing: .6, }}>
                                Completed
                            </Text>
                            <TouchableOpacity >
                                <Text style={{ fontSize: 16, color: "red" }}>
                                    Clear All
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.todoContainer}>
                            <FlatList
                                data={todos?.filter(x => x?.completed)}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) =>
                                    <TodoCard item={item} />
                                }

                            />
                        </View>

                    </View>
                </View>
            </ScrollView>
            {
                selectedIds?.length > 0
                    ?
                    <TouchableOpacity style={styles.btn} onPress={handleCompleteTasks}>
                        <Text style={styles.btnText}>Mark As Completed</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("AddTask")}>
                        <Text style={styles.btnText}>Add New Task</Text>
                    </TouchableOpacity>
            }

        </PageLayout>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F5F9",
        paddingHorizontal: 20,
    },
    main: {
        top: -70,

    },
    todoContainer: {
        backgroundColor: "#fff",
        zIndex: 20,
        borderRadius: 15,
        // height:300
    },

    btn: {
        backgroundColor: "#4A3780",
        position: "absolute",
        bottom: 45,
        left: 15,
        right: 15,
        paddingVertical: 15,
        borderRadius: 26
    },
    btnText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },

})
