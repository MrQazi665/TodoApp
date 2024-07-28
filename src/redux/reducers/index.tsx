import {combineReducers} from 'redux';
import authReducer from '../../screens/auth/redux/auth.reducer';
import loadingReducers from './loading.reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducers,
});

export default rootReducer;
