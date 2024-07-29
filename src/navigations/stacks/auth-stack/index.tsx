import Login from '../../../screens/auth/login';
import Register from '../../../screens/auth/register';
import {Stack} from '../../../utilities/navigation';
import {Route} from '../../../enums';

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName={Route.Login}>
      <Stack.Screen name={Route.Login} component={Login} />
      <Stack.Screen name={Route.Register} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
