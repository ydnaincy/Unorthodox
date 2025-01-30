import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import {useFonts} from 'expo-font';


const imgC = require('../assets/images/compostbg.png');
const imgR = require('../assets/images/rebg.png');
const imgNR = require('../assets/images/nonrebg.png');

// Define the type for Waste Categories
export type WasteCat = {
  cat_id: number;
  name: string;
  imageUrl: any;
  def: string;
  items: string[];
  properDisposal: string[];
  commonMisconceptions1: string[];
  benefits1: string[];
  color: string;
};

const defaultCategoryImage = 'https://example.com/default-image.png';

const categories: WasteCat[] = [
  {
    cat_id: 1,
    name: 'Recyclable Waste',
    imageUrl: imgR,
    def: 'Waste materials that can be processed and transformed into new products instead of being discarded as trash.',
    items: ["Paper", "Plastic Bottles", "Glass", "Metal Cans", "Cardboard"],
    properDisposal: [
      "Rinse and clean containers before recycling.",
      "Flatten cardboard boxes to save space.",
      "Remove caps from plastic bottles before recycling.",
      "Check local recycling guidelines for accepted materials.",
      "Avoid placing non-recyclable items in recycling bins."
    ],
    commonMisconceptions1: [
      "Greasy pizza boxes are not recyclable.",
      "Plastic bags should not be mixed with curbside recycling.",
      "Broken glass should not be placed in recycling bins."
    ],
    benefits1: [
      "Reduces landfill waste and pollution.",
      "Conserves natural resources like trees, water, and minerals.",
      "Saves energy compared to producing new materials.",
      "Reduces greenhouse gas emissions."
    ],
    color: '#0099FF'
  },
  {
    cat_id: 2,
    name: 'Compostable Waste',
    imageUrl: imgC,
    def: "Organic waste that decomposes naturally, turning into nutrient-rich compost that enriches soil and reduces landfill waste.",
    items: ["Fruit Peels", "Vegetable Scraps", "Eggshells", "Coffee Grounds", "Leaves"],
    properDisposal: [
      "Place compostable waste in a compost bin or pile.",
      "Avoid adding meat, dairy, and oily foods to compost.",
      "Turn the compost pile regularly for faster decomposition.",
      "Ensure the right balance of greens (wet waste) and browns (dry waste).",
      "Use finished compost as fertilizer for plants."
    ],
    commonMisconceptions1: [
      "All food waste is compostable (meat and dairy can attract pests and slow decomposition).",
      "Compost smells bad (properly managed compost smells earthy, not rotten).",
      "Paper products can’t be composted (uncoated paper and napkins can be)."
    ],
    benefits1: [
      "Reduces landfill waste and methane emissions.",
      "Enriches soil and improves plant growth.",
      "Conserves water by improving soil moisture retention.",
      "Encourages sustainable waste management practices."
    ],
    color: "#4CAF50"
  },
  {
    cat_id: 3,
    name: 'Non-Recyclable Waste',
    imageUrl: imgNR,
    def: "Items that cannot be processed for reuse and should be disposed of properly to avoid contamination of recyclables.",
    items: ["Plastic Bags", "Styrofoam", "Diapers", "Used Tissues", "Food Wrappers"],
    properDisposal: [
      "Dispose of in general waste bins.",
      "Do not mix with recyclable materials.",
      "Check if local facilities accept specific non-recyclable waste.",
      "Use reusable alternatives where possible."
    ],
    commonMisconceptions1: [
      "Plastic bags can go in the recycling bin (they should be taken to special collection points).",
      "Used tissues are recyclable (they belong in compost or general waste).",
      "Styrofoam is recyclable (most curbside programs do not accept it)."
    ],
    benefits1: [
      "Reduces contamination of recyclables.",
      "Encourages responsible disposal of harmful waste.",
      "Prevents landfill overflow and environmental damage.",
      "Promotes sustainable waste management practices."
    ],
    color: "#808080"
  }
];

const CategoryDetails = () => {
  const { cat_id } = useLocalSearchParams();  // Get the dynamic 'cat_id' from the URL

  // Find the category details based on the 'cat_id'
  const category = categories.find((cat) => cat.cat_id === Number(cat_id));

  if (!category) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Category not found</Text>
      </View>
    );
  }

  const [fontsLoaded] = useFonts({
    'Roboto': 'Roboto', 
    'Montserrat':'Montserrat',
    'Poppins': 'Poppins',
    'Nunito': 'Nunito',
  'Merriweather': 'Merriweather'
  });

  

  return (
    <>
    <Image
        source={category.imageUrl}
        style={styles.backgroundImage}
      />
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Image */}
      <Image
        source={category.imageUrl}
        style={styles.backgroundImage}
      />

      {/* Content Section */}
      <View style={styles.content}>
      <Text style={[styles.title, { color: category.color }]}>{category.name}</Text>

        <Image
          source={{ uri: category.imageUrl || defaultCategoryImage }}
          style={[styles.image, { borderColor: category.color }]}
        />
        <Text style={styles.definition}>{category.def}</Text>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Items:</Text>
          <View style={styles.itemsList}>
            {category.items.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Icon name="done-outline" size={20} color={category.color} style={styles.icon} />
                <Text style={{ fontFamily: 'nunito' , fontSize:15 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Proper Disposal:</Text>
          {category.properDisposal.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Icon name="delete-outline" size={20} color={category.color} style={styles.icon} />
              <Text style={{ fontFamily: 'nunito' , fontSize:15 }}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Common Misconceptions:</Text>
          {category.commonMisconceptions1.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Icon name="error-outline" size={20} color={category.color} style={styles.icon} />
              <Text style={{ fontFamily: 'nunito', fontSize:15 }}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeader}>Benefits:</Text>
          {category.benefits1.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Icon name="favorite-outline" size={20} color={category.color} style={styles.icon} />
              <Text style={{ fontFamily: 'nunito' , fontSize:15 }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView></>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa', 
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    resizeMode: 'repeat',
    margin: 0,
  },
  content: {
    zIndex: 1, 
    padding: 16,
  },
  errorText: { 
    textAlign: 'center', 
    fontSize: 18, 
    color: 'red', 
    fontWeight: 'bold', 
  },
  image: { 
    width: '100%', 
    height: 200, 
    borderRadius: 10, 
    marginBottom: 16, 
    borderWidth: 4,
    borderColor: '#ddd',
  },
  title: { 
    fontSize: 28, 
    fontWeight: '700', 
    marginBottom: 8, 
    textAlign: 'center', 
    color: '#333',
    fontFamily: 'Montserrat',
  },
  definition: { 
    fontSize: 22, 
    marginBottom: 24, 
    textAlign: 'center', 
    color: '#555',
    lineHeight: 28,
    fontFamily: 'Merriweather',
  },
  sectionHeader: { 
    fontSize: 20, 
    fontWeight: '600', 
    marginBottom: 12, 
    color: '#333', 
    fontFamily: 'Poppins',
  },
  itemsList: { 
    fontSize: 16, 
    marginBottom: 16, 
    color: '#333', 
    textAlign: 'center',
  },
  listItem: { 
    fontSize: 16, 
    marginBottom: 12, 
    color: '#555', 
    paddingLeft: 10,
    lineHeight: 22,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
  icon: {
    marginRight: 10,
  },
  sectionCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    opacity: 0.7,
  },
});

export default CategoryDetails;
