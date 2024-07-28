import {call, put, takeEvery} from 'redux-saga/effects';
import {authCreators, authTypes} from './auth.action';
import {callSignIn, callSignUp} from './auth.api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert} from 'react-native';

export function* watchAuth() {
  yield takeEvery(authTypes.HANDLE_SIGN_IN, handleSignIn);
  yield takeEvery(authTypes.HANDLE_SIGN_UP, handleSignUp);
}

function* handleSignIn(action: any): any {
  console.log('xx- action?.params?.data', action?.params);
  try {
    const response = yield call(callSignIn, action?.params?.data);
    console.log('xx-  login api response', response);
    AsyncStorage.setItem('@USER', response?.header?.authentication_token);
    yield put(
      authCreators.handleSignInSuccess({
        data: response,
      }),
    );
  } catch (error) {
    yield put(authCreators.handleSignInFailure(error));
  }
}

function* handleSignUp(action: any): any {
  console.log('xx- action?.params?.data', action?.params);
  try {
    const response = yield call(callSignUp, action?.params?.data);
    if (!response?.success) {
      Alert.alert('Error', response?.message);
      yield put(authCreators.handleSignUpFailure(response));
    } else {
      yield put(
        authCreators.handleSignUpSuccess({
          data: response?.data,
          access_token: action?.params?.access_token,
          role: action?.params?.role,
          password: action?.params?.password,
        }),
      );
    }
  } catch (error) {
    yield put(authCreators.handleSignUpFailure(error));
  }
}
