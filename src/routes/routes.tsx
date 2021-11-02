import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { Details } from '../screens/Details';

const { Navigator, Screen} = createStackNavigator();

export function Routes() {
  return (
    <Navigator 
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
  }}>
      <Screen name="SignIn" component={SignIn}/>
      <Screen name="Home" component={Home}/>
      <Screen name="Details" component={Details}/>
    </Navigator>
  )
}