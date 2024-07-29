import React, {useState} from 'react';
import {Button, Text, HStack, View} from 'native-base';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import TodoFormTheme from '../../../components/theme/todo-form-theme';
import Loader from '../../../components/loader';
import useCustomToast from '../../../hooks/useCustomToast';
import {loginValidationSchema} from '../../../utilities/yup';
import {IInitialState} from '../../../redux/store/initialState/types';
import {authCreators} from '../redux/auth.action';
import {ILoginValues} from '../interface';
import {themeColors} from '../../../config/theme';
import {Route} from '../../../enums';
import AuthFormFields from '../components/auth-form-fields';

const Login = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const showToast = useCustomToast();

  const isAuthenticating = useSelector(
    (state: IInitialState) => state.loading.isAuthenticating,
  );

  const onSubmit = (values: ILoginValues) => {
    dispatch(authCreators.handleSignIn({values, showToast}));
  };
  return (
    <TodoFormTheme formTitle="Sign in to your account">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <View>
            <AuthFormFields
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              ignoreEmail={true}
            />

            <Button
              mt="4"
              size={'lg'}
              colorScheme="blue"
              disabled={isAuthenticating}
              onPress={() => handleSubmit()}>
              {isAuthenticating ? <Loader /> : 'Sign in'}
            </Button>
          </View>
        )}
      </Formik>
      <HStack mt="2" justifyContent="center">
        <Text fontSize="sm" color="coolGray.600">
          Don't have an account?{' '}
        </Text>
        <Text
          fontSize="sm"
          color={themeColors.themeBlue}
          onPress={() => navigation.navigate(Route.Register)}>
          Sign up
        </Text>
      </HStack>
    </TodoFormTheme>
  );
};

export default Login;
