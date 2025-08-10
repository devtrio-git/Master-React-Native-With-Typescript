import MainLayout from '@/components/Layouts/MainLayout'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

interface IQuote {
    id: number,
    quote: string,
    author: string
}
const RandomQuote = () => {
    const [qoute, setQuote] = useState<IQuote>({
        id: 1, quote: "", author: ""
    });
    const [loader, setLoader] = useState<boolean>(true);
    const [toggle, setToggle] = useState<boolean>(true);

    useEffect(() => {
       let interval = setInterval(() => {
            console.log("10 sec done")
            getRandomQuote()
        }, 10000);

        return ()=>{
            console.log("clear")
            clearInterval(interval)
        }
    }, [toggle])

    const getRandomQuote = async () => {
        setLoader(true)
        try {
            const res = await fetch("https://dummyjson.com/quotes/random");
            const response = await res.json();
            setQuote(response)

            console.log("api hit")
            setLoader(false)
        } catch (error) {
            console.log(error, "<--error")
            setLoader(false)
        }
    }


    return (
        <MainLayout>
            {
                loader ?
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={"large"} color={"#fff"} />
            </View>:
            <View style={styles.container}>
                <View style={styles.quote}>
                    <Text style={styles.text}>
                        {qoute?.quote}
                    </Text>
                    <Text style={styles.name}>
                        ~ {qoute?.author}
                    </Text>
                </View>

                {/* <View>
                    <TouchableOpacity style={styles.button} onPress={()=>setToggle(!toggle)}>
                        <Text style={styles.btnText}>Generate New</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            }
        </MainLayout>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    quote: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 20
    },
    name: {
        textAlign: "right",
        color: "#fff"
    },
    text: {
        color: "#fff",
        fontSize: 24
    },
    button: {

        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 30
    },
    btnText: {
        textAlign: "center",
        fontSize: 24
    }
})

export default RandomQuote
