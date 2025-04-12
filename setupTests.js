// setupTests.js
import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';

// for zustand
import '@testing-library/jest-dom';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  ...jest.requireActual('react-native/Libraries/Utilities/Platform'),
  NativeModules: {
    ...jest.requireActual('react-native').NativeModules,
    FontManager: {loadedNativeFonts: []},
  },
}));

//mock react navigation completely so we can test navigation
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
      };
    },
  };
});

jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MockedMaterialCommunityIcons',
);

jest.mock('react-native-vector-icons/FontAwesome', () => 'MockedFontAwesome');

//this lines is for react-hook-form testing
global.window = {};
global.window = global;
