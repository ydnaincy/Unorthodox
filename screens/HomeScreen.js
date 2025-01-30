import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import HomePage from '../components/Home/HomePage';
import WasteCategory from '@/components/Home/WasteCategory';
import PracticalTipsCarousel from '@/components/Home/Tips';
import DailyWasteTracker from '@/components/Home/Logs';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
        <HomePage />
        <WasteCategory />
        <PracticalTipsCarousel />
        <DailyWasteTracker/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the parent container takes full height
  },
  scrollContainer: {
    flexGrow: 1, // Ensures scrolling when content overflows
    paddingBottom: 20, // Add padding at the bottom to prevent the last component from being cut off
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15, // Add margin to space out from the next components
  },
});

export default HomeScreen;
