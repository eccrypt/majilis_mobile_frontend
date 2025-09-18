import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { createGetStartedStyles } from '../styles/GetStarted/GetStarted.styles';
import { COLORS } from '../utils';
import { createSplashStyles } from '../styles/Splash/Splash.styles';
import { useTheme } from '../hooks';

type GetStartedNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;

const GetStarted: React.FC = () => {
    const { colors } = useTheme();
    const navigation = useNavigation<GetStartedNavigationProp>();
    const getStartedStyles = createGetStartedStyles(colors);
    const splashStyles = createSplashStyles(colors);

    const handleGetStarted = () => {
        navigation.replace('SelectLanguage');
    };

    return (
        <View style={getStartedStyles.container}>
            <View style={getStartedStyles.content}>
                <Image style={splashStyles.logo} source={require('../assets/images/PrimaryLogo.png')} />
            </View>
            <TouchableOpacity style={getStartedStyles.button} onPress={handleGetStarted}>
                <Text style={getStartedStyles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <ImageBackground
                source={require('../assets/images/PrimaryBackground.png')}
                style={getStartedStyles.backgroundImage}
                resizeMode="contain"
            />
        </View>
    );
};

export default GetStarted;