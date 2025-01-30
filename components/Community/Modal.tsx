import React from 'react';
import { Modal, Button, Text } from 'react-native-paper'; // Expo's Material UI components
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MemberListModal = ({ visible, onDismiss }) => {

    const members = [
        { id: 1, name: 'Alice', joined: '2023-01-01', icon: 'user' },
        { id: 2, name: 'Bob', joined: '2023-02-15', icon: 'user' },
        { id: 3, name: 'Charlie', joined: '2023-03-10', icon: 'user' },
        { id: 4, name: 'David', joined: '2023-05-20', icon: 'user' },
        { id: 5, name: 'Eva', joined: '2023-06-30', icon: 'user' },
        { id: 6, name: 'Frank', joined: '2023-07-14', icon: 'user' },
      ];
  return (
    <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 20 }}>
      {/* Modal Header */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: 'white' }}>Community Member List</Text>
      
      {/* Member Grid */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {members.map((member) => (
          <View key={member.id} style={{ width: '30%', marginBottom: 20, alignItems: 'center' }}>
            <FontAwesome name={member.icon} size={40} color="#17a2b8" />
            <Text style={{ color: 'white', marginVertical: 5 }}>{member.name}</Text>
            <Text style={{ color: 'white', fontSize: 12 }}>{member.joined}</Text>
          </View>
        ))}
      </View>

      {/* Close Button */}
      <Button mode="contained" onPress={onDismiss} style={{ marginTop: 20 }}>
        Close
      </Button>
    </Modal>
  );
};

export default MemberListModal; // Default export
