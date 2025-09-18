import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { createSelectLanguageStyles } from '../styles/SelectLanguage/SelectLanguage.styles';
import { createSplashStyles } from '../styles/Splash/Splash.styles';
import { useTheme } from '../hooks';

type SelectLanguageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectLanguage'>;

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'si', name: 'සිංහල' },
  { code: 'ar', name: 'العربية' },
];

const SelectLanguage: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<SelectLanguageNavigationProp>();
  const styles = createSelectLanguageStyles(colors);
  const splashStyles = createSplashStyles(colors);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleContinue = () => {
    navigation.replace('MainTabs');
  };

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={splashStyles.logo} source={require('../assets/images/PrimaryLogo.png')} />
        <Text style={styles.subtitle}>Choose your preferred language</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setDropdownVisible(true)}
        >
          <Text style={styles.dropdownText}>{selectedLanguage.name}</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <ImageBackground
        source={require('../assets/images/PrimaryBackground.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <Modal
        visible={dropdownVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {languages.map((language) => (
              <TouchableOpacity
                key={language.code}
                style={styles.dropdownItem}
                onPress={() => handleLanguageSelect(language)}
              >
                <Text style={styles.dropdownItemText}>{language.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectLanguage;