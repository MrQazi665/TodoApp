import React from 'react';
import {VStack, HStack, Text, IconButton, CloseIcon, Alert} from 'native-base';
import {useToast} from 'native-base';

import {ToastProps} from './interface';

const Toast: React.FC<ToastProps> = ({
  id,
  status = 'info',
  variant = 'subtle',
  description,
  isClosable,
  ...rest
}) => {
  const toast = useToast();

  return (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      py={1}
      status={status}
      variant={variant}
      {...rest}>
      <VStack space={1} flexShrink={1} w="90%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="sm"
              fontWeight="medium"
              flexShrink={2}
              color={
                variant === 'solid'
                  ? 'lightText'
                  : variant !== 'outline'
                  ? 'darkText'
                  : undefined
              }>
              {description}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
      </VStack>
    </Alert>
  );
};

export default Toast;
