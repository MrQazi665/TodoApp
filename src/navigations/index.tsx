import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedStack from './stacks/protected-stacks';
import AuthStack from './stacks/auth-stack';
import {useSelector} from 'react-redux';

export default function Navigation() {
  const {user} = useSelector((state: IInitialState) => state.auth);
  return (
    <NavigationContainer>
      {user.token ? <ProtectedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
