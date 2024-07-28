import React from 'react';

import {Stack} from '../../../utilities/navigation';
import TodoScreen from '../../../screens/protected-screens/todo';

const ProtectedStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={'TodoScreen'}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="TodoScreen" component={TodoScreen} />
    </Stack.Navigator>
  );
};

export default ProtectedStack;
