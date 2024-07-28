import React from 'react';
import {FormControl, WarningOutlineIcon, Text} from 'native-base';

import {themeColors} from '../../../config/theme';

const ErrorMessage = ({message, mt = 2}: {message: string; mt?: number}) => {
  return (
    <FormControl.ErrorMessage
      color="red.500"
      mt={mt}
      leftIcon={<WarningOutlineIcon size="xs" color={themeColors.redBase} />}>
      <Text color={themeColors.redBase}>{message}</Text>
    </FormControl.ErrorMessage>
  );
};

export default ErrorMessage;
