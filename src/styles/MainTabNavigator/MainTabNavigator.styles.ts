import { COLORS } from '../../utils';
import { ThemeColors } from '../../types';

export const createMainTabNavigatorStyles = (colors: ThemeColors) => ({
  tabBarActiveTintColor: COLORS.primary,
  tabBarInactiveTintColor: colors.textSecondary,
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerTintColor: colors.text,
  headerTitleStyle: {
    fontWeight: 'bold' as const,
  },
});