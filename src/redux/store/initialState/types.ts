import {User} from '../../../types';

export interface IInitialState {
  auth: IAuthStates;
}

export interface UserWithToken {
  user: User;
  access_token: string;
}

export interface IAuthStates {
  user: UserWithToken | null;
}
