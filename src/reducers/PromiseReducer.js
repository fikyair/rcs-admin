import { API_POST_LOGIN, ASYNC_COOKIE, CLEAR_MSG } from '../utils/ActionsType';
const initialState ={
    loginToken:'',
    requestStaus:false,
    errMsg:''

};

export default function (state = initialState,actions ) {

    switch (actions.type){
        case 'REQUEST':
            return {
                ...state,
                requestStaus:true,
            }
        case API_POST_LOGIN[1]:
            const { token = '' } = actions.data;
            $.cookie('token',token,{ expires: 8, path:'/'});
            return {
                ...state,
                loginToken:token,
                requestStaus:false
            }
        case 'FAILURE':
            return {
                ...state,
                errMsg:actions.result.message,
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
