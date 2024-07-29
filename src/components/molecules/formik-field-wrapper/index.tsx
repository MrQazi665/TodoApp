import React, {memo} from 'react';
import {Field, FieldProps} from 'formik';
import FormInput from '../../atoms/form-input';
import {FormikFieldWrapperProps} from './interface';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FormikFieldWrapper: React.FC<FormikFieldWrapperProps> = memo(
  ({name, required = false, type, defaultValue, onChange, mt, ...props}) => {
    return (
      <Field name={name}>
        {({field, form}: FieldProps<any>) => {
          const handleChange = (value: string) => {
            if (typeof onChange === 'function') {
              onChange(form, name, value);
            } else {
              form.setFieldValue(name, value);
            }
          };

          const error = form.errors[name] as string | undefined;
          const touched = form.touched[name] as boolean | undefined;

          return (
            <FormInput
              required={required}
              containerStyle={{marginTop: hp(mt || 2)}}
              type={type!}
              value={field.value}
              onChangeText={handleChange}
              onBlur={form.handleBlur(name) as any}
              error={error}
              touched={touched}
              {...props}
            />
          );
        }}
      </Field>
    );
  },
);

export default FormikFieldWrapper;
