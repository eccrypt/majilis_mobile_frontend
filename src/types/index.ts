export type RootStackParamList = {
  Splash: undefined;
  GetStarted: undefined;
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