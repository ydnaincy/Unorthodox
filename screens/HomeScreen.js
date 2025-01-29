import React from 'react';
import { View, Text } from 'react-native';
import HomePage from '../components/Home/HomePage'
import WasteCategory from '@/components/Home/WasteCategory';

const HomeScreen = () => {
  return (
    <View>

      <Text>Welcome to the Home Screen!</Text>
      <HomePage/>
      <WasteCategory/>
    </View>
  );
};

export default HomeScreen;
