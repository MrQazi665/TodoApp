interface IInitialState {
  auth: IAuthStates;
}

interface IAuthStates {
  user: any | null;
}
