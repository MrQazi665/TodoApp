import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemInStorage = (key: string, value: string) => {
  AsyncStorage.setItem(key, value);
};

export const removeItemFromStorage = (key: string) => {
  AsyncStorage.removeItem(key);
};
