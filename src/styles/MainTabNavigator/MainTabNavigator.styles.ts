import { COLORS } from '../../utils';

export const mainTabNavigatorStyles = {
  tabBarActiveTintColor: COLORS.primary,
  tabBarInactiveTintColor: '#666',
  headerStyle: {
    backgroundColor: COLORS.white,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold' as const,
  },
};