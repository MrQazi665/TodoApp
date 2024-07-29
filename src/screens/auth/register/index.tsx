import React, {useState} from 'react';
import {Button, Text, HStack, View} from 'native-base';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import TodoFormTheme from '../../../components/theme/todo-form-theme';
import FormikFieldWrapper from '../../../components/molecules/formik-field-wrapper';
import EyeSvg from '../../../assets/icons/svg/eye.svg';
import EyeOffSvg from '../../../assets/icons/svg/eyeOff.svg';
import {authCreators} from '../redux/auth.action';
import {signupValidationSchema} from '../../../utilities/yup';
import {ISignupValues} from '../interface';
import useCustomToast from '../../../hooks/useCustomToast';
import {IInitialState} from '../../../redux/store/initialState/types';
import Loader from '../../../components/loader';
import {themeColors} from '../../../config/theme';
import {Route} from '../../../enums';
import AuthFormFields from '../components/auth-form-fields';

const SignUpScreen = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const showToast = useCustomToast();
  const isAuthenticating = useSelector(
    (state: IInitialState) => state.loading.isAuthenticating,
  );

  const onSubmit = (values: ISignupValues) => {
    dispatch(authCreators.handleSignUp({values, showToast}));
  };

  return (
    <TodoFormTheme formTitle="Create an account">
      <Formik
        initialValues={{
          username: '',
          password: '',
          email: '',
        }}
        validationSchema={signupValidationSchema}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <View>
            <AuthFormFields
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            <Button
              mt="4"
              size={'lg'}
              colorScheme="blue"
              disabled={isAuthenticating}
              onPress={() => handleSubmit()}>
              {isAuthenticating ? <Loader /> : 'Sign up'}
            </Button>
          </View>
        )}
      </Formik>
      <HStack mt="2" justifyContent="center">
        <Text fontSize="sm" color="coolGray.600">
          Already have an account?{' '}
        </Text>
        <Text
          fontSize="sm"
          color={themeColors.themeBlue}
          onPress={() => navigation.navigate(Route.Login)}>
          Login here
        </Text>
      </HStack>
    </TodoFormTheme>
  );
};

export default SignUpScreen;
