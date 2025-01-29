import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const CategoryDetails = () => {
  const { cat_id } = useLocalSearchParams();  // Get the dynamic 'cat_id' from the URL

  return (
    <View>
      <Text>Category Details for category: {cat_id}</Text>
    </View>
  );
};

export default CategoryDetails;
