import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../../utils';
import { ThemeColors } from '../../types';

export const createProfileStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: colors.text,
  },
});