import React from 'react';
import { View, Text } from 'react-native';
import { createProfileStyles } from '../styles/Profile/Profile.styles';
import { useTheme } from '../hooks';

const Profile: React.FC = () => {
  const { colors } = useTheme();
  const profileStyles = createProfileStyles(colors);

  return (
    <View style={profileStyles.container}>
      <Text style={profileStyles.title}>Profile Screen</Text>
      <Text style={profileStyles.subtitle}>Manage your profile here.</Text>
    </View>
  );
};

export default Profile;