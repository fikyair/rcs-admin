import {EDIT ,API_POST_LOGIN, ASYNC_COOKIE, CLEAR_MSG } from '../../utils/ActionsType';

const initialState ={
    loginToken:'',
    requestStaus:false,
    errMsg:''
}

export default function (state = initialState,actions ) {
  //const {payload} = actions;
  switch (actions.type){
    case EDIT:
      return {
        ...state,
        data:actions.data
      };
      case API_POST_LOGIN[1]:
          const { token = '' } = actions.data;
          $.cookie('token',token,{ expires: 8, path:'/'});
          return {
              ...state,
              loginToken:token,
              requestStaus:false
          }
    default:
      return state
  }
}
