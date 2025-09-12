import React from 'react';
import { View, Text } from 'react-native';
import { settingsStyles } from '../styles/Settings/Settings.styles';

const Settings: React.FC = () => {
  return (
    <View style={settingsStyles.container}>
      <Text style={settingsStyles.title}>Settings Screen</Text>
      <Text style={settingsStyles.subtitle}>Configure your app preferences.</Text>
    </View>
  );
};

export default Settings;