import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT_SIZES } from '../../utils';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const getStartedStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.dark,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: FONT_SIZES.md,
    color: COLORS.dark,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: screenWidth,
    height: screenHeight / 3,
  },
});