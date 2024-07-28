import {call, put, takeEvery} from 'redux-saga/effects';
import {authCreators, authTypes} from './auth.action';
import {postSignInRequest, postRegisterRequest} from './auth.api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert} from 'react-native';
import {setItemInStorage} from '../../../utilities/storage-service';
import {StorageKeys} from '../../../enums';

export function* watchAuth() {
  yield takeEvery(authTypes.HANDLE_SIGN_IN, handleSignIn);
  yield takeEvery(authTypes.HANDLE_SIGN_UP, handleSignUp);
}

function* handleSignIn({params}: any): any {
  try {
    const response = yield call(postSignInRequest, params);

    setItemInStorage(StorageKeys.User, response.data.access_token);
    yield put(authCreators.handleSignInSuccess(response));
  } catch (error) {
    yield put(authCreators.handleSignInFailure(error));
  }
}

function* handleSignUp(action: any): any {
  try {
    const response = yield call(postRegisterRequest, action?.params?.data);
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
