import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FormikFieldWrapper from '../../../components/molecules/formik-field-wrapper';
import EyeSvg from '../../../assets/icons/svg/eye.svg';
import EyeOffSvg from '../../../assets/icons/svg/eyeOff.svg';
import {AuthForFieldsProps} from './interface';

const AuthFormFields: React.FC<AuthForFieldsProps> = ({
  showPassword,
  setShowPassword,
  ignoreEmail = false,
}) => {
  return (
    <View>
      <FormikFieldWrapper
        name="username"
        label="Username"
        mt={0.1}
        placeholder="John_Doe"
      />
      {!ignoreEmail ? (
        <FormikFieldWrapper
          name="email"
          label="Email"
          placeholder="example@gmail.com"
        />
      ) : (
        <View />
      )}

      <FormikFieldWrapper
        name="password"
        label="Password"
        placeholder="******"
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
    </View>
  );
};

export default AuthFormFields;
