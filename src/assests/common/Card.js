import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native'
import React from 'react'

export default function Card({
    details, image
}) {
    return (
        <View style={styles.card} >
            {/* Component of common cards  */}
            <View style={styles.cardsContainer}>
                <View style={styles.imagesContain}>
                    <Image
                        style={styles.imageContainer}
                        source={image}
                        ImageComponent={ImageBackground}
                    />
                </View>
                <View style={styles.discription}>
                    <Text style={styles.textContainer}>
                        {details}
                    </Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 5,
    },
    imagesContain: {
        width: '50%',
        height: 200
    },
    imageContainer: {
        borderRadius: 10,
        height: '95%',
        width: '100%',
    },
    cardsContainer: {
        height: 200,
        width: '100%',
        maxWidth: 700,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: 'darkgray',
        borderWidth: 5,
        backgroundColor: 'darkgray',
    },
    discription: {
        borderRadius: 15,
        backgroundColor: 'slategray',
        padding: 5,
        height: '100%',
        width: '50%',
    },
    textContainer: {
        fontWeight: '700',
        padding: 5,
        height: '100%',
        width: '100%',
        color: 'white',
    }
})