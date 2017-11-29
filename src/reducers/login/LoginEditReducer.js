import { API_POST_EDIT ,API_POST_LOGIN ,API_GET_CARD } from '../../utils/ActionsType';

const initialState ={
    loginToken:'',
  cardBInData:[]
};

export default function (state = initialState,actions ) {
  switch (actions.type){
    case API_POST_EDIT:
      return {
        ...state,
        data:actions.data
      };
    case API_GET_CARD[1]:
      return {
        ...state,
        cardBInData:actions.data,
      }
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
