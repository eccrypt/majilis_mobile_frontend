export type RootStackParamList = {
  Splash: undefined;
  GetStarted: undefined;
  SelectLanguage: undefined;
  MainTabs: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: any;
  route: any;
};

export type ThemeColors = {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
};