export interface User {
  createdAt: string;
  updatedAt: string;
  id: number;
  username: string;
  email: string;
}

interface Todo {
  createdAt: string;
  id: number;
  title: string;
  description: string;
  completed: number;
  user: User;
}
