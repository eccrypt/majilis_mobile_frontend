import React from 'react';
import { View, ViewStyle } from 'react-native';
import { cardStyles } from '../styles/Common/Card.styles';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <View style={[cardStyles.card, style]}>
      {children}
    </View>
  );
};

export default Card;