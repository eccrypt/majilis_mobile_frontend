import { useColorScheme } from 'react-native';
import { THEME_COLORS } from '../utils';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';

  return {
    theme,
    colors: THEME_COLORS[theme],
    isDark: theme === 'dark',
  };
};