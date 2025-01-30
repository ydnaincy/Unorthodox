import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import LottieView from 'lottie-react';

const DailyWasteTracker = () => {
  const [loggedDates, setLoggedDates] = useState({
    '2025-01-01': { marked: true, dotColor: 'green' },
    '2025-01-05': { marked: true, dotColor: 'green' },
  });

  const [showConfetti, setShowConfetti] = useState(false);

  const logTodaysWaste = () => {
    const today = new Date().toISOString().split('T')[0];
    const updatedLoggedDates = { ...loggedDates, [today]: { marked: true, dotColor: 'green' } };
    setLoggedDates(updatedLoggedDates);

    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false); // Stop confetti after 3 seconds
    }, 3000);

    Alert.alert('Woohoo!', "You've earned 10 points!");
  };

  return (
    <View style={styles.container}>
      {/* Left Side: Calendar View */}
      <View style={styles.calendarContainer}>
        <Calendar
          current={new Date().toISOString().split('T')[0]} // Default to today's date
          markedDates={loggedDates}
          markingType={'dot'}
          theme={{
            selectedDayBackgroundColor: 'blue',
            todayTextColor: 'red',
            dotColor: 'green',
            arrowColor: 'blue',
          }}
        />
        <Button title="Log Today's Waste" onPress={logTodaysWaste} style={styles.button} />
      </View>

      {/* Right Side: Image/Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/474x/c1/92/6c/c1926ccb90bbf94ceff2d408fae15e3e.jpg', // Replace with your image URL or local image
          }}
          style={styles.image}
        />
      </View>

      {/* Confetti Display with Lottie */}
      {showConfetti && (
        <LottieView
          source={require('../../assets/images/confetti.json')} // Put your Lottie file here
          autoPlay
          loop={false}
          style={styles.confetti}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
  },
  confetti: {
    position: 'absolute',
    top: 50, // Adjust for your layout
    left: 50,
    width: 300, // Adjust size
    height: 300,
  },
});

export default DailyWasteTracker;
