import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Card from '../assests/common/Card'


export default function MyCollection() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Card image={require('../assests/images/shadow.jpg')} details={"They are walking in the shadow always keep the scares of horro !!"} />
      <Card image={require('../assests/images/gredient.jpg')} details={"First background design by me , i am much better than before i could "} />
      <Card image={require('../assests/images/jett.jpg')} details={"The jett is a great fighter in the age of war they show what they are and truely incridible power it possess"} />
      <Card image={require('../assests/images/sunfury.jpg')} details={"The Second one is so beautiful and i like to make by my own path and my own destination"} />
      <Card image={require('../assests/images/logo.png')} details={"A little bit i do work for my collage making logos and icons"} />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    flex: 1,
  },
})