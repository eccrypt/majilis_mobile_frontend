import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT_SIZES } from '../../utils';
import { ThemeColors } from '../../types';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const createSelectLanguageStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
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
    color: colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: FONT_SIZES.md,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  dropdown: {
    width: '80%',
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 8,
    backgroundColor: colors.surface,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownText: {
    fontSize: FONT_SIZES.md,
    color: colors.text,
  },
  dropdownArrow: {
    fontSize: FONT_SIZES.lg,
    color: colors.text,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dropdownItemText: {
    fontSize: FONT_SIZES.md,
    color: colors.text,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    zIndex: 10,
    marginBottom: 100,
  },
  buttonText: {
    color: colors.background,
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
    zIndex: 1,
  },
});