import React , {useState} from 'react';
import { Modal, Button, Text, TextInput, View, ScrollView  } from 'react-native-paper'; // Expo's Material UI components
import { FontAwesome } from '@expo/vector-icons';

const JoinCommunityModal = ({ visible, onDismiss }) => {

    const [searchText, setSearchText] = useState('');
    const [communities] = useState([
    { id: 1, name: 'Eco Warriors', description: 'Join us to promote eco-friendly habits.' },
    { id: 2, name: 'Tech Innovators', description: 'For those passionate about technology.' },
    { id: 3, name: 'Sports Enthusiasts', description: 'Join us for sports events and meetups.' },
    { id: 4, name: 'Art Lovers', description: 'A community for artists to collaborate and showcase their work.' },
  ]);

  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 20 }}>
      {/* Modal Header */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: 'white' }}>Community Member List</Text>
      

      <TextInput
        label="Search Communities"
        value={searchText}
        onChangeText={setSearchText}
        style={{ marginBottom: 20 }}
        mode="outlined"
      />

 
      

      {/* Close Button */}
      <Button mode="contained" onPress={onDismiss} style={{ marginTop: 20 }}>
        Close
      </Button>
    </Modal>
  );
};

export default JoinCommunityModal; // Default export
