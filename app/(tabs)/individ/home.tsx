import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../../../screens/HomeScreen'
import { Link } from "expo-router";

// import HomeScreen from '../../screens/HomeScreen'


const home = () => {
    console.log('home here')
  return (
    <View>
      <HomeScreen/>
      <Text>home</Text>
      <Link href="/individ/quizzes">Go to Quizzes</Link>
      <Link href="/individ/profile">Go to Profile</Link>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})