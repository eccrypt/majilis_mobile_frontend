import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { createButtonStyles } from '../styles/Common/Button.styles';
import { useTheme } from '../hooks/useTheme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, disabled = false }) => {
  const { colors } = useTheme();
  const buttonStyles = createButtonStyles(colors);

  return (
    <TouchableOpacity
      style={[buttonStyles.button, disabled && buttonStyles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[buttonStyles.text, disabled && buttonStyles.disabledText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;