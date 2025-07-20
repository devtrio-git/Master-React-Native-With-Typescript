import MainLayout from '@/components/layout/MainLayout'
import React, { useState } from 'react'
import { FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'

const Lists = () => {
    const [loader, setLoader] = useState(false)

    const [items, setItems] = useState([
        {id:1, name:"List"},
        {id:2, name:"List"},
        {id:3, name:"List"},
        {id:4, name:"List"},
        {id:5, name:"List"},
        {id:6, name:"List"},
        {id:7, name:"List"},
        {id:8, name:"List"},
        {id:9, name:"List"},
        {id:10, name:"List"},
        {id:11, name:"List"},
        {id:12, name:"List"},
    ])
    const onRefresh = ()=>{
        setLoader(true);

        setTimeout(() => {
            setItems((prev)=> ( [...prev, {id: items?.length +1, name:"List"}] ))
            setLoader(false)

        }, 2000);
    }

    const sections = [
        {category: "Fruits", data: ["Apple", "Mango", "Banana", "Grapes", "Oranges"]},
        {category: "Vegatables", data: ["Apple", "Mango", "Banana", "Tomato"]},
        {category: "Dry Fruits", data: ["Apple", "Mango", "Banana"]},
        {category: "Drinks", data: ["Apple", "Mango", "Banana"]},
        {category: "Fast Food", data: ["Apple", "Mango", "Banana"]},
    ]

  return (
    <MainLayout>
        {/* <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={loader} onRefresh={onRefresh}/>}
        >
            {
                items?.map((item,key)=>(
                    <View style={styles.box} key={key}>
                        <Text style={styles.text}>
                            {`${item.name}-${key}`}
                        </Text>
                    </View>
                ))
            }
        </ScrollView> */}

        {/* <View style={{padding:10}}>
            <FlatList
                data={items}

                keyExtractor={(item)=> `${item.id}${item.name}`}

                renderItem={({item})=>(
                     <View style={styles.box} >
                        <Text style={styles.text}>
                            {`${item.name}-${item.id}`}
                        </Text>
                    </View>
                )}
                ListHeaderComponent={<Text>Flat List</Text>}
                ListFooterComponent={<Text>Completed</Text>}
                // ItemSeparatorComponent={()=><View style={{width:"100%",height:1,backgroundColor:"red"}}></View>}
                // onEndReached={onRefresh}

                refreshing={false}
                onRefresh={()=>console.log("refresh")}

                horizontal={false}

            />
        </View> */}
        <View>
            <SectionList 
                sections={sections}
                keyExtractor={(item, index)=> item+index}
                renderItem={({item})=>(
                    <View style={styles.item}>
                        <Text>{item}</Text>
                    </View>
                )}  
                renderSectionHeader={({ section:{category} }) =>(
                        <View style={styles.header}>
                            <Text style={styles.headerText}> {category} </Text>
                        </View>
                )}
                stickySectionHeadersEnabled={true}
            />
        </View>
    </MainLayout>
  )
}

export default Lists

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    contentContainer:{
        padding:10,
    },
    box:{
        height:100,
        // width:100,
        backgroundColor:"yellow",
        marginBottom:10,
        marginRight:10,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"red",
        fontSize:20
    },
    item:{
        padding:16,
        backgroundColor:"#c4c4c4",
        borderBottomWidth:1,
        borderColor:"#ddd"
    },
    header:{
        backgroundColor:"grey",
        padding:10
    },
    headerText:{
        fontSize:18,
        fontWeight:"bold"
    }
})