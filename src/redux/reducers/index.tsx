import {combineReducers} from 'redux';
import authReducer from '../../screens/auth/redux/auth.reducer';
import loadingReducers from './loading.reducers';
import todoReducer from '../../screens/todo/redux/todo.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducers,
  todo: todoReducer,
});

export default rootReducer;
