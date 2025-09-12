import React from 'react';
import { View, Text } from 'react-native';
import { profileStyles } from '../styles/Profile/Profile.styles';

const Profile: React.FC = () => {
  return (
    <View style={profileStyles.container}>
      <Text style={profileStyles.title}>Profile Screen</Text>
      <Text style={profileStyles.subtitle}>Manage your profile here.</Text>
    </View>
  );
};

export default Profile;