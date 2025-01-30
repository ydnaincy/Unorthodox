import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import {useFonts} from 'expo-font';


// Define the type for Waste Categories
export type WasteCat = {
  cat_id: number;
  name: string;
  imageUrl: string;
};

const defaultCategoryImage = 'https://example.com/default-image.png';

const IndividCategory = ({ wasteCategory }: { wasteCategory: WasteCat }) => {
  const router = useRouter();  // Initialize the useRouter hook

  const navigateToCategory = () => {
    router.push(`/${wasteCategory.cat_id}`);  // Programmatically navigate to the category page
  };

  const [fontsLoaded] = useFonts({
      'Roboto': 'Roboto', 
      'Montserrat':'Montserrat',
      'Work Sans': 'Work Sans',
      'Nunito': 'Nunito',
    'Merriweather': 'Merriweather',
    'Lora': 'Lora',
    });

  return (
    <Pressable style={styles.categoryBox} onPress={navigateToCategory}>
      <Image
        source={{ uri: wasteCategory.imageUrl || defaultCategoryImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{wasteCategory.name}</Text>
    </Pressable>
  );
};

const WasteCategory = () => {
  const categories: WasteCat[] = [
    { cat_id: 1, 
      name: 'Recyclable', 
      imageUrl: 'https://example.com/images/compostable.png' , 
      },

    { cat_id: 2, 
      name: 'Compostable', 
      imageUrl: 'https://example.com/images/recyclable.png', 
      },

    { cat_id: 3, 
      name: 'Non-Recyclable', 
      imageUrl: 'https://example.com/images/non-recyclable.png', 
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Waste Categories</Text>
      <View style={styles.grid}>
        {categories.map((category) => (
          <IndividCategory key={category.cat_id} wasteCategory={category} />
        ))}
      </View>
    </View>
  );
};

export default WasteCategory;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa', 
    padding: 16,
    paddingBottom: 30,  // Added padding to avoid bottom overlap
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'left' ,
    fontFamily: 'nunito'
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-evenly', // Adjust spacing between items
    marginBottom: 10,  // Added bottom margin for spacing between rows
    gap: 8,
  },
  categoryBox: { 
    width: '30%', 
    backgroundColor: '#ffffff', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 16, // Ensure there's space at the bottom
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 5,
  },
  image: { 
    width: '100%', 
    height: 80, 
    borderRadius: 10, 
    marginBottom: 10 
  },
  title: { 
    fontSize: 12, 
    fontWeight: '400', 
    textAlign: 'center',
    fontFamily: "Merriweather" 
  },
});
