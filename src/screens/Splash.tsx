import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { splashStyles } from '../styles/Splash/Splash.styles';
import { COLORS } from '../utils';

type SplashNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const Splash: React.FC = () => {
  const navigation = useNavigation<SplashNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={splashStyles.container}>
      <Text style={splashStyles.title}>Majilis</Text>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={splashStyles.subtitle}>Loading...</Text>
    </View>
  );
};

export default Splash;