import {createStackNavigator} from '@react-navigation/stack';

import {Details, Home} from '../screens';
import {RootStackMainParams} from '../interfaces';

const Stack = createStackNavigator<RootStackMainParams>();

export const NavigationMain = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
