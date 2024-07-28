import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/auth-stack';
import {NativeBaseProvider} from 'native-base';
import ProtectedStack from './stacks/protected-stacks';

export default function Navigation() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <ProtectedStack />
        {/* <AuthStack /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
