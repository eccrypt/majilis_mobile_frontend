import React from 'react';
import { View, Text } from 'react-native';
import { createSettingsStyles } from '../styles/Settings/Settings.styles';
import { useTheme } from '../hooks';

const Settings: React.FC = () => {
  const { colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);

  return (
    <View style={settingsStyles.container}>
      <Text style={settingsStyles.title}>Settings Screen</Text>
      <Text style={settingsStyles.subtitle}>Configure your app preferences.</Text>
    </View>
  );
};

export default Settings;