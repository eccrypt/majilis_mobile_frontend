import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';
import { ThemeColors } from '../../types';

export const createButtonStyles = (colors: ThemeColors) => StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  text: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledText: {
    color: '#999',
  },
});