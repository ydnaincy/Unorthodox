import React, { useState } from 'react';
import { Modal, Button, Text } from 'react-native-paper'; // Expo package for UI components
import { FontAwesome } from '@expo/vector-icons';   // Expo's vector icons package
import { useFonts } from 'expo-font';                // For loading custom fonts
import { View } from 'react-native';           // Standard React Native components
import MemberListModal from './Modal';  // Ensure the correct path to Modal

const CommunityRewards = () => {
  const [showModal, setShowModal] = useState(false);
 
   const [fontsLoaded] = useFonts({
     'Roboto': 'Roboto', 
     'Montserrat':'Montserrat',
     'Poppins': 'Poppins',
     'Nunito': 'Nunito',
     'Merriweather': 'Merriweather'
   });

  const memberCount = 150;

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
    
  }

  const achievements = [
    {
      title: 'Solar Lights',
      description: 'Solar lights for the community.',
      date: '2024-01-15',
      milestone: '100 lights',
      icon: 'sun-o', // FontAwesome icon name
    },
    {
      title: 'Vertical Garden',
      description: 'Vertical garden for the park.',
      date: '2024-02-05',
      milestone: '20 gardens',
      icon: 'leaf',  // FontAwesome icon name
    },
    {
      title: 'Public Composters',
      description: 'Composters installed in public spaces.',
      date: '2024-03-10',
      milestone: '5 composters',
      icon: 'recycle', // FontAwesome icon name
    },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        {/* Member Count Section */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ borderRadius: 50, backgroundColor: '#17a2b8', padding: 10 }}>
            <FontAwesome name="user" size={24} color="white" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{memberCount}+ Members</Text>
            <Button mode="text" onPress={handleShow}>See Member List</Button>
          </View>
        </View>
      </View>

      

      {/* Member List Modal */}
      <MemberListModal visible={showModal} onDismiss={handleClose} />

      {/* Achievements Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Community Rewards Unlocked</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20 }}>
        {achievements.map((achievement, index) => (
          <View key={index} style={{ width: '30%', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#f8f9fa', padding: 20, borderRadius: 10, textAlign: 'center' }}>
              <FontAwesome name={achievement.icon} size={40} />
              <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>{achievement.title}</Text>
              <Text>{achievement.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CommunityRewards;
