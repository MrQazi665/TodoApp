import React from 'react';

import {Stack} from '../../../utilities/navigation';
import TodoScreen from '../../../screens/todo';
import {Route} from '../../../enums';

const ProtectedStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={Route.TodoScreen}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={Route.TodoScreen} component={TodoScreen} />
    </Stack.Navigator>
  );
};

export default ProtectedStack;
