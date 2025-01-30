import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommunityOverview from '@/components/Community/Header';
import CommunityRewards from '@/components/Community/Rewards';
import JoinCommunityButton from '@/components/Community/JoinCommunity';


const CommunityScreen = () => {
  return (
    <View>
      <Text>CommunityScreen</Text>
       <CommunityOverview/>
       <CommunityRewards/>
       <JoinCommunityButton/>
    </View>
  )
}

export default CommunityScreen

const styles = StyleSheet.create({})