import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import logo1 from '../../assests/images/logo1.png';


export default function AboutUs() {
    return (
        <View style={styles.container}>
            <ImageBackground source={logo1} resizeMode="cover" style={styles.image}  >
                <Text style={styles.text}>Green Leaf</Text>
                <Text style={styles.text2}>Hello ! the purpose of this application is to make an myself more confident and more comfort in react native and also the basic thing in react native.</Text>
                <Text style={styles.text2}>mrroshan738949@gmail.com</Text>
            </ImageBackground>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        maxWidth: 450,
        backgroundColor: 'green',
        justifyContent: "center"
    },
    text: {
        flex: 1,
        opacity: 1,
        color: "darkgreen",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    text2: {
        opacity: 1,
        color: "darkgreen",
        fontSize: 15,
        padding: 10,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});