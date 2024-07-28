import React, {useState} from 'react';
import {Button, Text, HStack, View} from 'native-base';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import TodoFormTheme from '../../../components/theme/todo-form-theme';
import FormikFieldWrapper from '../../../components/molecules/formik-field-wrapper';
import EyeSvg from '../../../assets/icons/svg/eye.svg';
import EyeOffSvg from '../../../assets/icons/svg/eyeOff.svg';
import {useDispatch} from 'react-redux';
import {authCreators} from '../redux/auth.action';
import {signupValidationSchema} from '../../../utilities/yup';

const SignUpScreen = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (user: any) => {
    console.log('xx- user', user);
    const data = {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    };
    dispatch(authCreators.handleSignUp({data}));
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
        onSubmit={values => onSubmit(values)}>
        {({handleSubmit}) => (
          <View>
            <FormikFieldWrapper name="username" label="Username" mt={0.1} />
            <FormikFieldWrapper name="email" label="Email" />
            <FormikFieldWrapper
              name="password"
              label="Password"
              inputRightIcon={
                showPassword ? (
                  <EyeOffSvg width={wp(5.5)} height={hp(3.3)} />
                ) : (
                  <EyeSvg width={wp(5.5)} height={hp(3.3)} />
                )
              }
              secureTextEntry={!showPassword}
              inputRightIconOperations={() => setShowPassword(!showPassword)}
            />

            <Button
              mt="4"
              size={'lg'}
              colorScheme="blue"
              onPress={() => handleSubmit()}>
              Sign in
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
          color="blue.500"
          onPress={() => navigation.navigate('Login')}>
          Login here
        </Text>
      </HStack>
    </TodoFormTheme>
  );
};

export default SignUpScreen;
