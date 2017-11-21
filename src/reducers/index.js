import { combineReducers} from 'redux';
import  GlobalReducer  from './GlobalReducer';
import  PromiseReducer  from './PromiseReducer';
import  LoginEdit  from './login/LoginEditReducer';

const mainReducer = combineReducers({
  GlobalReducer,
  PromiseReducer,
  LoginEdit,
});

export default  mainReducer;

