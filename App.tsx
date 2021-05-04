import React, { ReactElement } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Mounted from './src/screens/Mounted';
import StateChange from './src/screens/StateChange';
import UnMounted from './src/screens/UnMounted';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
const Stack = createStackNavigator();

const App=()=>{
  return(
    <Provider store={store}>
      <Navigators/>
    </Provider>
  );
};
export default App;

export  function Navigators():ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mounted"
      screenOptions={{
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode='float'
      >
        <Stack.Screen name="Mounted" component={Mounted} />
        <Stack.Screen name="StateChange" component={StateChange}/>
        <Stack.Screen name="Unmounted" component={UnMounted}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
