import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeys} from '../enums';

export const setItemInStorage = (key: string, value: string) => {
  AsyncStorage.setItem(key, value);
};
