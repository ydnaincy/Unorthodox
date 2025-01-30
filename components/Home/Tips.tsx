import React from 'react';
import { View, Text, Image, Dimensions, FlatList, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

// Sample data for the carousel (10 tips)
const tipsData = [
  { id: '1', tip: "Tip 1: Segregate waste into recyclables and non-recyclables.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '2', tip: "Tip 2: Use compostable bags for organic waste.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '3', tip: "Tip 3: Separate paper, plastic, and metal for recycling.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '4', tip: "Tip 4: Avoid using plastic straws to reduce waste.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '5', tip: "Tip 5: Always carry a reusable water bottle.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '6', tip: "Tip 6: Compost food scraps to reduce landfill waste.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '7', tip: "Tip 7: Avoid fast fashion and buy fewer, quality clothes.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '8', tip: "Tip 8: Recycle old electronics responsibly.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '9', tip: "Tip 9: Use energy-efficient LED light bulbs.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
  { id: '10', tip: "Tip 10: Support local farmers and reduce food miles.", image: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg' },
];

const CarouselFlatList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.tipText}>{item.tip}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <>
    <Text style={styles.header}>Practical Tips</Text> 
    <View style={styles.carouselContainer}>
      <FlatList
        data={tipsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        snapToInterval={screenWidth * 0.8} // Ensure items snap to each other
        decelerationRate="fast"
        snapToAlignment="start"
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1, // Ensure it takes available space
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'left' ,
    fontFamily: 'nunito',
    paddingLeft: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginHorizontal: 10, // Add horizontal margin for spacing between cards
    height: 120, // Adjust height to fit both the image and text
    width: screenWidth * 0.45, // Make each card 45% of the screen width
    justifyContent: 'center', // Align text and image neatly
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10, // Add some padding between text and image
  },
  tipText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,  // Improve readability by adjusting line height
    marginBottom: 5,  // Add space between the text and image
  },
  image: {
    width: 60,  // Smaller image size to fit neatly alongside text
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default CarouselFlatList;
