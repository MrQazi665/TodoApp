import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const navigationRef = createNavigationContainerRef() as any;

export const Stack = createNativeStackNavigator();
