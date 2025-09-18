import React from 'react';
import { View, ViewStyle } from 'react-native';
import { createCardStyles } from '../styles/Common/Card.styles';
import { useTheme } from '../hooks/useTheme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  const { colors } = useTheme();
  const cardStyles = createCardStyles(colors);

  return (
    <View style={[cardStyles.card, style]}>
      {children}
    </View>
  );
};

export default Card;