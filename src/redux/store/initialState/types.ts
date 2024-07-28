import {UserWithToken} from '../../../screens/auth/interface';
import {User} from '../../../types';

export interface IInitialState {
  auth: IAuthStates;
  loading: ILoadingStates;
}

export interface IAuthStates {
  user: UserWithToken | null;
}

export interface ILoadingStates {
  isAuthenticating: boolean;
}
