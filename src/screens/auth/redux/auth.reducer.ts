import {createReducer} from 'reduxsauce';

import {authTypes} from './auth.action';
import initialState from '../../../redux/store/initialState';
import {
  IAuthStates,
  UserWithToken,
} from '../../../redux/store/initialState/types';
import {User} from '../../../types';

export const INITIAL_STATE = initialState.auth;

const handleSignInSuccess = (
  state: IAuthStates,
  {info}: {info: UserWithToken},
) => {
  return {
    ...state,
    user: info,
  };
};

const handleSignUpSuccess = (state: IAuthStates, {info}: {info: any}) => {
  return {
    ...state,
    user: info,
  };
};

const handleSignOut = (state: IAuthStates, {info}: any) => {
  return {
    ...state,
    user: null,
  };
};

export const HANDLERS = {
  [authTypes.HANDLE_SIGN_IN_SUCCESS]: handleSignInSuccess,
  [authTypes.HANDLE_SIGN_UP_SUCCESS]: handleSignUpSuccess,
  [authTypes.HANDLE_SIGN_OUT]: handleSignOut,
};
export default createReducer(INITIAL_STATE, HANDLERS);
