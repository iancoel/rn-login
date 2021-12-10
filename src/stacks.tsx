import React from 'react';

import {Provider} from 'react-redux';
import store from './store';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Dash from './screens/dashboard';

const {Navigator, Screen} = createStackNavigator();

const Stack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Provider store={store}>
          <Screen name="Cadastre-se" component={SignUp} />
          <Screen name="Logar" component={SignIn} />
          <Screen name="Dash" component={Dash} />
        </Provider>
      </Navigator>
    </NavigationContainer>
  );
};

export default Stack;
