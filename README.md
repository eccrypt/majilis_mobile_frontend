# Majilis Mobile Frontend

A clean, modular React Native mobile application with bottom navigation, splash screen, and reusable components.

## Architecture Overview

This project follows a modular architecture designed for scalability, maintainability, and reusability. The codebase is organized into distinct packages that promote separation of concerns and easy testing.

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Custom button component
│   ├── Button.styles.ts # Button styles
│   ├── Card.tsx         # Card container component
│   ├── Card.styles.ts   # Card styles
│   └── index.ts         # Component exports
├── screens/             # Screen components
│   ├── Splash.tsx       # Splash screen with loading
│   ├── Splash.styles.ts # Splash screen styles
│   ├── Home.tsx         # Home dashboard
│   ├── Home.styles.ts   # Home screen styles
│   ├── Profile.tsx      # User profile screen
│   ├── Profile.styles.ts# Profile screen styles
│   ├── Settings.tsx     # App settings screen
│   └── Settings.styles.ts# Settings screen styles
├── navigation/          # Navigation setup
│   ├── AppNavigator.tsx        # Main stack navigator
│   └── MainTabNavigator.tsx    # Bottom tab navigator
├── hooks/               # Custom React hooks
│   ├── useAsyncStorage.ts     # AsyncStorage hook
│   ├── useAppState.ts         # App state hook
│   └── index.ts               # Hook exports
├── utils/               # Utility functions and constants
│   ├── constants.ts     # App constants (colors, spacing, etc.)
│   ├── helpers.ts       # Helper functions
│   └── index.ts         # Utility exports
├── types/               # TypeScript type definitions
│   └── index.ts         # Navigation and component types
└── assets/              # Static assets (images, icons)
```

### Key Features

- **Bottom Tab Navigation**: Smooth navigation between Home, Profile, and Settings screens
- **Splash Screen**: Branded loading screen with automatic transition
- **Reusable Components**: Modular UI components for consistent design
- **Custom Hooks**: Shared logic for AsyncStorage and app state management
- **Separated Styles**: Each component/screen has its own styles file for better organization
- **TypeScript**: Full type safety across the application
- **Modular Architecture**: Easy to extend and maintain

### Navigation Flow

```
Splash Screen (2s) → Bottom Tab Navigator
                          ├── Home
                          ├── Profile
                          └── Settings
```

### Technologies Used

- **React Native 0.81.4**: Core framework
- **React Navigation**: Navigation library
- **TypeScript**: Type safety
- **React Native Safe Area Context**: Safe area handling
- **AsyncStorage**: Local data persistence

## Getting Started

### Prerequisites

- Node.js >= 20
- React Native development environment set up
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```

3. For iOS, install CocoaPods:
   ```sh
   cd ios && bundle exec pod install
   ```

### Running the App

1. Start Metro bundler:
   ```sh
   npm start
   ```

2. Run on Android:
   ```sh
   npm run android
   ```

3. Run on iOS:
   ```sh
   npm run ios
   ```

## Development Guidelines

### Adding New Screens

1. Create screen component in `src/screens/`
2. Add route to navigation types in `src/types/index.ts`
3. Update navigator configuration
4. Add to tab navigator if needed

### Creating Reusable Components

1. Create component in `src/components/`
2. Export from `src/components/index.ts`
3. Use TypeScript interfaces for props
4. Follow existing component patterns

### Using Custom Hooks

Import hooks from `src/hooks/` and use them in components for shared logic.

### Styling

- Use constants from `src/utils/constants.ts` for consistent colors and spacing
- Follow mobile-first design principles
- Use StyleSheet for performance

## Contributing

1. Follow the established project structure
2. Use TypeScript for all new code
3. Write reusable, modular components
4. Test navigation flows thoroughly
5. Update documentation as needed

## License

This project is licensed under the MIT License.
