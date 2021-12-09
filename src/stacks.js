import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Dash from './screens/dashboard';

const {Navigator, Screen} = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Cadastre-se" component={SignUp} />
        <Screen name="Logar" component={SignIn} />
        <Screen name="Dash" component={Dash} />
      </Navigator>
    </NavigationContainer>
  );
}
