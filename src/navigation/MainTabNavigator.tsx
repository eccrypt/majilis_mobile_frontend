import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import { MainTabParamList } from '../types';
import { createMainTabNavigatorStyles } from '../styles/MainTabNavigator/MainTabNavigator.styles';
import { useTheme } from '../hooks';
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  const { colors } = useTheme();
  const mainTabNavigatorStyles = createMainTabNavigatorStyles(colors);

  return (
    <Tab.Navigator
      screenOptions={mainTabNavigatorStyles}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;