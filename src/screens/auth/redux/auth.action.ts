import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  handleSignIn: ['params'],
  handleSignInSuccess: ['info'],
  handleSignInFailure: ['error'],

  handleSignUp: ['params'],
  handleSignUpSuccess: ['info'],
  handleSignUpFailure: ['error'],

  handleSignOut: ['info'],
});

export const authTypes = Types;
export const authCreators = Creators;
