import React from 'react';
import { View, Text } from 'react-native';
import { createHomeStyles } from '../styles/Home/Home.styles';
import { useTheme } from '../hooks';

const Home: React.FC = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Home Screen</Text>
      <Text style={homeStyles.subtitle}>Welcome to the Majilis app!</Text>
    </View>
  );
};

export default Home;