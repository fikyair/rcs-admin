import { API_POST_EDIT ,API_POST_LOGIN } from '../../utils/ActionsType';

const initialState ={
    loginToken:'',
};

export default function (state = initialState,actions ) {
  switch (actions.type){
    case API_POST_EDIT:
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
          }
    default:
      return state
  }
}
