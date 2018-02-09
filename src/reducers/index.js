import {combineReducers} from 'redux';
import GlobalReducer from './GlobalReducer';
import PersonalReducer from './personalReducer';
import LimitReducer from './LimitReducer';
import LoginEditReducer from './login/LoginEditReducer';
import PlatReducer from './platReducer';

const mainReducer = combineReducers({
    GlobalReducer,
    LoginEditReducer,
    LimitReducer,
    PersonalReducer,
    PlatReducer,
});

export default mainReducer;

