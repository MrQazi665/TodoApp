import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  HStack,
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
} from 'native-base';
import Search from '../../../assets/icons/svg/search.svg';
import Add from '../../../assets/icons/svg/Add.svg';

const products = [
  {
    id: '1',
    name: 'Apple iMac 27"',
    category: 'PC',
    brand: 'Apple',
    price: '$2999',
  },
  {
    id: '2',
    name: 'Apple iMac 20"',
    category: 'PC',
    brand: 'Apple',
    price: '$1499',
  },
  {
    id: '3',
    name: 'Apple iPhone 14',
    category: 'Phone',
    brand: 'Apple',
    price: '$999',
  },
  {
    id: '4',
    name: 'Apple iPad Air',
    category: 'Tablet',
    brand: 'Apple',
    price: '$1199',
  },
  {
    id: '5',
    name: 'Xbox Series S',
    category: 'Gaming/Console',
    brand: 'Microsoft',
    price: '$299',
  },
  {
    id: '6',
    name: 'PlayStation 5',
    category: 'Gaming/Console',
    brand: 'Sony',
    price: '$799',
  },
  {
    id: '7',
    name: 'Xbox Series X',
    category: 'Gaming/Console',
    brand: 'Microsoft',
    price: '$699',
  },
  {
    id: '8',
    name: 'Apple Watch SE',
    category: 'Watch',
    brand: 'Apple',
    price: '$399',
  },
  {
    id: '9',
    name: 'NIKON D850',
    category: 'Photo',
    brand: 'Nikon',
    price: '$599',
  },
  {
    id: '10',
    name: 'Monitor BenQ EX2710Q',
    category: 'TV/Monitor',
    brand: 'BenQ',
    price: '$499',
  },
];

const TodoScreen = () => {
  const renderItem = ({item}: any) => (
    <HStack style={styles.itemContainer} justifyContent="space-between">
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.category}</Text>
      <Text style={styles.itemText}>{item.brand}</Text>
      <Text style={styles.itemText}>{item.price}</Text>
    </HStack>
  );

  return (
    <NativeBaseProvider>
      <Box safeArea p="2" w="100%" maxW="100%">
        <VStack space={4} mt="4">
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Search width={20} height={20} />}
              />
            }
          />
          <Button
            width="100%"
            leftIcon={
              <Icon
                as={<Add width={20} height={20} color={'#fff'} />}
                name="add"
                size="sm"
              />
            }>
            Add Product
          </Button>
          <HStack justifyContent="space-between">
            <Button width="48%" variant="outline">
              {/*    leftIcon={<Icon as={MaterialIcons} name="more-vert" size="sm" />}> */}
              Actions
            </Button>
            <Button width="48%" variant="outline">
              {/*   leftIcon={
                <Icon as={MaterialIcons} name="filter-list" size="sm" />
               }> */}
              Filter
            </Button>
          </HStack>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default TodoScreen;
