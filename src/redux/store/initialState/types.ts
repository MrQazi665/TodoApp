import {UserWithToken} from '../../../screens/auth/interface';
import {User} from '../../../types';

export interface IInitialState {
  auth: IAuthStates;
  loading: ILoadingStates;
  todo: ITodoStates;
}

export interface UserWithToken {
  user: User;
  access_token: string;
}

export interface IAuthStates {
  user: UserWithToken | null;
}

export interface ILoadingStates {
  isAuthenticating: boolean;
}
export interface ITodoStates {
  todos: {
    data: any;
    page: number;
    totalRecords: any;
  };
}
