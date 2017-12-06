import {  ASYNC_COOKIE, CLEAR_MSG } from '../utils/ActionsType';
const initialState ={
    loginToken:'',
    requestStaus:false,
    errMsg:''

};
//全局状态信息，数据信息存储
export default function (state = initialState,actions ) {
    switch (actions.type){
        case 'REQUEST':
            return {
                ...state,
                requestStaus:true,
            };
        case 'FINISH':
          return {
              ...state,
              requestStaus:false,
          }
        case 'FAILURE':
            return {
                ...state,
                errMsg:actions.error.err.message,
                requestStaus:false,
            };
        case ASYNC_COOKIE:

            return {
                ...state,
                ...actions.data,
            };
        case CLEAR_MSG:
            return {
                ...state,
                errMsg:actions.data,
            }
        default:
            return state
    }
}
