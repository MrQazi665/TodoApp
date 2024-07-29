import React, {memo} from 'react';
import {FormControl, Input, Text, View} from 'native-base';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Pressable} from 'react-native';

import {FormInputWithLabelProps} from './interface';
import ErrorMessage from '../error-message';
import {styles} from './styles';

const FormInput: React.FC<FormInputWithLabelProps> = memo(
  ({
    containerStyle,
    label,
    required,
    placeholder,
    type,
    value,
    onChangeText,
    onBlur,
    error,
    touched,
    keyboardType = 'default',
    onFocus,
    disabled = false,
    secureTextEntry = false,
    inputRightIcon,
    inputRightIconOperations,
  }) => {
    return (
      <View style={containerStyle}>
        <FormControl isInvalid={!!error && !!touched}>
          {label ? (
            <View style={styles.labelContainer}>
              <FormControl.Label _text={styles.label}>
                {label} {required ? <Text style={styles.required}>*</Text> : ''}
              </FormControl.Label>
            </View>
          ) : null}
          <View>
            <View
              style={[styles.inputContainer, {opacity: disabled ? 0.6 : 1}]}>
              <Input
                style={[
                  type === 'textArea' && styles.textArea,
                  {fontSize: wp(3.5)},
                ]}
                w={{
                  base: '100%',
                  md: '15%',
                }}
                h={type === 'textArea' ? 'auto' : '42px'}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value || ''}
                keyboardType={keyboardType}
                onFocus={onFocus}
                secureTextEntry={secureTextEntry}
                multiline={type === 'textArea'}
                numberOfLines={type === 'textArea' ? 4 : 1}
                scrollEnabled={false}
                InputRightElement={
                  inputRightIcon ? (
                    <Pressable
                      onPress={inputRightIconOperations}
                      style={styles.inputIcon}>
                      {inputRightIcon}
                    </Pressable>
                  ) : (
                    <View />
                  )
                }
              />
            </View>
            {touched && error ? <ErrorMessage message={error} /> : null}
          </View>
        </FormControl>
      </View>
    );
  },
);

export default FormInput;
