import Login from '../../../screens/auth/login';
import Register from '../../../screens/auth/register';
import {Stack} from '../../../utilities/navigation';

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="Register">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
