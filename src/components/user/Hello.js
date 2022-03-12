import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import logo1 from '../../assests/images/logo1.png';

export default function Hello() {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        minWidth: 450,
        backgroundColor: 'green',
        justifyContent: "center"
    },
});