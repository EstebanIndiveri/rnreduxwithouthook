import React, { ReactElement } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Mounted from './src/screens/Mounted';
import StateChange from './src/screens/StateChange';
import UnMounted from './src/screens/UnMounted';
import { Provider } from 'react-redux';
import reduxStore from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
const Stack = createStackNavigator();

const App=()=>{
  const{store,persistor}=reduxStore();
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Navigators/>
      </PersistGate>
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
