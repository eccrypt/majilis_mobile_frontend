import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../../utils';
import { ThemeColors } from '../../types';

export const createSplashStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: colors.text,
    marginTop: 10,
  },
  logo: {
    width: 280,
    height: 150,
  },
});