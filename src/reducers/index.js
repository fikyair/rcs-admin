import { combineReducers} from 'redux';
import  GlobalReducer  from './GlobalReducer';
import  LimitReducer  from './LimitReducer';
import  LoginEditReducer  from './login/LoginEditReducer';

const mainReducer = combineReducers({
  GlobalReducer,
  LoginEditReducer,
  LimitReducer,
});

export default  mainReducer;

