import React from 'react';
import {Box, Center, Image, Text, View, VStack} from 'native-base';

const TodoFormTheme = ({
  formTitle,
  children,
}: {
  formTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="95%" maxW="100%">
        <Center>
          <Image
            source={require('../../../assets/icons/checkmark.png')}
            alt="Logo"
            style={{width: 60, height: 50}}
          />
          <Text fontSize="2xl" fontWeight="bold">
            TODO APP
          </Text>
        </Center>
        <VStack space={3} mt="5">
          {formTitle ? (
            <Text mt="1" fontSize="lg" color="coolGray.600" fontWeight="medium">
              {formTitle}
            </Text>
          ) : (
            <View />
          )}
          {children}
        </VStack>
      </Box>
    </Center>
  );
};

export default TodoFormTheme;
