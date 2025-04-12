import './gesture-handler';

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
