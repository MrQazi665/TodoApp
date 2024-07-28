import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import ProtectedStack from './stacks/protected-stacks';
import AuthStack from './stacks/auth-stack';
import {IInitialState} from '../redux/store/initialState/types';

export default function Navigation() {
  const {user} = useSelector((state: IInitialState) => state.auth);
  return (
    <NavigationContainer>
      {user?.access_token ? <ProtectedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
