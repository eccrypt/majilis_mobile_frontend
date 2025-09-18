import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { createSplashStyles } from '../styles/Splash/Splash.styles';
import { COLORS } from '../utils';
import { useTheme } from '../hooks';

type SplashNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const Splash: React.FC = () => {
  const navigation = useNavigation<SplashNavigationProp>();
  const { colors } = useTheme();
  const splashStyles = createSplashStyles(colors);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('GetStarted');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={splashStyles.container}>
      <Image style={splashStyles.logo} source={require('../assets/images/PrimaryLogo.png')} />
    </View>
  );
};

export default Splash;