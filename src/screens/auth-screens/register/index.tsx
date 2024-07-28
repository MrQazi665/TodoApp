import React from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  VStack,
  Text,
  Link,
  HStack,
  Image,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation: any = useNavigation();
  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <VStack space={3} mt="5" alignItems="center">
          <Image
            source={require('../../../assets/icons/checkmark.png')}
            alt="App Logo"
            style={{width: 60, height: 50}}
          />
          <Text mt="1" fontSize="lg" color="coolGray.600" fontWeight="medium">
            Create an account
          </Text>
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input placeholder="name@company.com" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input placeholder="name@company.com" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" placeholder="********" />
          </FormControl>
          <Button
            mt="2"
            colorScheme="blue"
            onPress={() => navigation.navigate('TodoScreen')}>
            Create an account
          </Button>
          <HStack mt="6" justifyContent="center">
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
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUpScreen;
