import { combineReducers} from 'redux';
import  GlobalReducer  from './GlobalReducer';
import  LoginEditReducer  from './login/LoginEditReducer';

const mainReducer = combineReducers({
  GlobalReducer,
  LoginEditReducer,
});

export default  mainReducer;

