import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../../utils';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light,
  },
  title: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.dark,
  },
});