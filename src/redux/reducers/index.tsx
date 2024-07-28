import {combineReducers} from 'redux';
import authReducer from '../../screens/auth/redux/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // onBoarding: '',
});

export default rootReducer;
