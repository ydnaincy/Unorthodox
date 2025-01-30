// JoinCommunityButton.jsx
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import JoinCommunityModal from './JoinCommunityModal';  // Make sure this path is correct!

const JoinCommunityButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <>
      <Button mode="contained" onPress={handleShowModal} style={{ borderRadius: 30 }}>
        Join a New Community
      </Button>

      <JoinCommunityModal visible={modalVisible} onDismiss={handleCloseModal} />
    </>
  );
};

export default JoinCommunityButton;
