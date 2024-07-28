import React, {useState} from 'react';
import {
  Box,
  Center,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  HStack,
  Icon,
} from 'native-base';
import Checkmark from '../../../assets/svg/checkmark.svg'; // Ensure this path is correct
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation: any = useNavigation();

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Center>
          <Image
            source={require('../../../assets/icons/checkmark.png')}
            style={{width: 60, height: 50}}
          />
          <Text fontSize="2xl" fontWeight="bold">
            TODO APP
          </Text>
        </Center>
        <VStack space={3} mt="5">
          <Text
            mt="1"
            fontSize="lg"
            fontFamily="body"
            color="coolGray.600"
            fontWeight="medium">
            Sign in to your account
          </Text>
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              value={username}
              onChangeText={text => setUsername(text)}
              placeholder="John Doe"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
            />
          </FormControl>
          <Button
            mt="2"
            colorScheme="blue"
            onPress={() => console.log('Sign in pressed')}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
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
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
