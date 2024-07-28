import {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';

export interface FormInputWithLabelProps {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  keyboardType?: KeyboardTypeOptions;
  value: string | null | undefined;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  dateFormat?: string;
  onFocus?: () => void;
  disabled?: boolean;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  inputRightIcon?: React.ReactNode;
  inputRightIconOperations?: () => void;
}
