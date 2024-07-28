import {KeyboardTypeOptions} from 'react-native';
import {FormikProps} from 'formik';

export interface FormikFieldWrapperProps {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  keyboardType?: KeyboardTypeOptions;
  dateFormat?: string;
  onFocus?: () => void;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (form: FormikProps<any>, fieldName: string, value: any) => void;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  inputRightIcon?: React.ReactNode;
  inputRightIconOperations?: () => void;
  mt?: number;
}
