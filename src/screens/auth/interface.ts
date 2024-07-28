import {User} from '../../types';

export interface ILoginValues {
  username: string;
  password: string;
}

export interface ISignupValues extends ILoginValues {
  email: string;
}

export interface ILoginAction {
  showToast: (type: string, message: string) => void;
  values: ILoginValues;
}

export interface ISignupAction {
  showToast: (type: string, message: string) => void;
  values: ISignupValues;
}
export interface UserWithToken {
  user: User;
  access_token: string;
}
