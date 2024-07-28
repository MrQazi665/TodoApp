interface IInitialState {
  auth: IAuthStates;
}

interface IAuthStates {
  user: any | null;
}

// types.ts
export interface User {
  id: number;
  username: string;
}

export interface Todo {
  createdAt: string;
  id: number;
  title: string;
  description: string;
  completed: number;
  user: User;
}
