import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedStack from './stacks/protected-stacks';
import AuthStack from './stacks/auth-stack';

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <ProtectedStack />
    </NavigationContainer>
  );
}
