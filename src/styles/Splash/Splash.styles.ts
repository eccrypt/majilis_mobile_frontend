import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../../utils';

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.dark,
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
});