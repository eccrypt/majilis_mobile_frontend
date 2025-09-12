import React from 'react';
import { View, Text } from 'react-native';
import { homeStyles } from '../styles/Home/Home.styles';

const Home: React.FC = () => {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Home Screen</Text>
      <Text style={homeStyles.subtitle}>Welcome to the Majilis app!</Text>
    </View>
  );
};

export default Home;