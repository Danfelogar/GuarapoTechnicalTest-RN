import './gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationMain} from './src';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NavigationMain />
    </NavigationContainer>
  );
}
export default App;
