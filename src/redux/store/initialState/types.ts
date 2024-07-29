import {Todo, User} from '../../../types';

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
  isAddingTodo: boolean;
  isFetchingTodos: boolean;
  isUpdatingTodo: boolean;
  isDeletingTodo: boolean;
}
export interface ITodoStates {
  todoData: {
    data: Todo[];
    page: number;
    totalRecords: any;
  };
  itemId: number | null;
}
