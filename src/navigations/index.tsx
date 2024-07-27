import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/auth-stack';

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
