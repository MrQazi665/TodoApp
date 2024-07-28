import {createReducer} from 'reduxsauce';

import {authTypes} from './auth.action';
import initialState from '../../../redux/store/initialState';
import {IAuthStates} from '../../../redux/store/initialState/types';
import {UserWithToken} from '../interface';

export const INITIAL_STATE = initialState.auth;

const handleSignInSuccess = (
  state: IAuthStates,
  {info}: {info: UserWithToken},
) => ({
  ...state,
  user: info,
});

const handleSignUpSuccess = (
  state: IAuthStates,
  {info}: {info: UserWithToken},
) => ({
  ...state,
  user: info,
});

const handleSignOut = (state: IAuthStates) => ({
  ...state,
  user: null,
});

export const HANDLERS = {
  [authTypes.HANDLE_SIGN_IN_SUCCESS]: handleSignInSuccess,
  [authTypes.HANDLE_SIGN_UP_SUCCESS]: handleSignUpSuccess,
  [authTypes.HANDLE_SIGN_OUT]: handleSignOut,
};
export default createReducer(INITIAL_STATE, HANDLERS);
