import React, {useState} from 'react';
import {Button, Text, HStack, View} from 'native-base';
import {Formik} from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import FormikFieldWrapper from '../../../components/molecules/formik-field-wrapper';
import EyeSvg from '../../../assets/icons/svg/eye.svg';
import EyeOffSvg from '../../../assets/icons/svg/eyeOff.svg';

import TodoFormTheme from '../../../components/theme/todo-form-theme';
import {loginValidationSchema} from '../../../utilities/yup';

const Login = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TodoFormTheme formTitle="Sign in to your account">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={values => console.log('xx- va', values)}>
        {({handleSubmit}) => (
          <View>
            <FormikFieldWrapper name="username" label="Username" mt={0.1} />
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
          Don't have an account?{' '}
        </Text>
        <Text
          fontSize="sm"
          color="blue.500"
          onPress={() => navigation.navigate('Register')}>
          Sign up
        </Text>
      </HStack>
    </TodoFormTheme>
  );
};

export default Login;
