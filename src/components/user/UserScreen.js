import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import logo1 from '../../assests/images/logo1.png';

export default function UserScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.twoCombination}>
                <View style={styles.first}>
                    <Image source={logo1} style={styles.image} />
                </View>
                <View style={styles.second}>
                    <Text style={styles.headingOne} >
                        Roshan Yadav
                    </Text>
                    <Text style={styles.heading} >
                        BACHELOR OF COMPUTER APPLICATION (BCA)
                    </Text>
                    <Text style={styles.heading} >
                        FRONT-END DEVELOPER (REACT JS + REDUX)
                    </Text>
                </View>
            </View>
            <View style={styles.skills}>
                <Text style={styles.card} >
                    To start my career as a technical person In a software field by using my technical knowledge and skills in learning environment for the growth of the organization & self.
                </Text>
                <Text style={styles.simpleText}>
                    Mobile : 9753439815
                </Text>
                <Text style={styles.simpleText}>
                    Email : mrroshan738949@gmail.com
                </Text>
                <Text style={styles.header}>
                    Technology learn :
                </Text>
                <Text style={styles.simpleText}>
                    C and C++
                </Text>
                <Text style={styles.simpleText}>
                    Data structure and algorithm
                </Text>
                <Text style={styles.simpleText}>
                    Java and Javascript
                </Text>
                <Text style={styles.simpleText}>
                    HTML and CSS
                </Text>
                <Text style={styles.simpleText}>
                    React Js and redux
                </Text>
                <Text style={styles.simpleText}>
                    React Native
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    twoCombination: {
        padding: 10,
        height: 200,
        display: 'flex',
        flexDirection: 'row',
    },
    first: {
        width: '50%'
    },
    second: {
        width: '50%',
    },
    image: {
        height: 180,
        width: 180,
    },
    headingOne: {
        opacity: 1,
        color: "black",
        padding: 15,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    heading: {
        padding: 3,
        opacity: 1,
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
    skills: {
        flex: 1,
        border: 'none',
        borderTopRightRadius: 70,
        borderBottomLeftRadius: 70,
        backgroundColor: '#008000',
        padding: 10,
        marginBottom: 55,
        margin: 10,
        padding: 10,
    },
    card: {
        padding: 5,
        opacity: 1,
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
    },
    simpleText: {
        marginStart: 15,
        marginTop: 14,
        opacity: 1,
        color: "black",
        fontSize: 15,
    },
    header: {
        marginTop: 20,
        opacity: 1,
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    }
});