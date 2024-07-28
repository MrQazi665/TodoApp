import {createReducer} from 'reduxsauce';
import {authTypes} from '../../screens/auth/redux/auth.action';
import initialState from '../store/initialState';
import {ILoadingStates} from '../store/initialState/types';

export const INITIAL_STATE = initialState.loading;

const handleAuthenticatingStart = (state: ILoadingStates) => ({
  ...state,
  isAuthenticating: true,
});

const handleAuthenticatingEnd = (state: ILoadingStates) => ({
  ...state,
  isAuthenticating: false,
});

export const HANDLERS = {
  [authTypes.HANDLE_SIGN_IN]: handleAuthenticatingStart,
  [authTypes.HANDLE_SIGN_IN_SUCCESS]: handleAuthenticatingEnd,
  [authTypes.HANDLE_SIGN_IN_FAILURE]: handleAuthenticatingEnd,
  [authTypes.HANDLE_SIGN_UP]: handleAuthenticatingStart,
  [authTypes.HANDLE_SIGN_UP_SUCCESS]: handleAuthenticatingEnd,
  [authTypes.HANDLE_SIGN_UP_FAILURE]: handleAuthenticatingEnd,
};
export default createReducer(INITIAL_STATE, HANDLERS);
