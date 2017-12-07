import {
  API_GET_PERSONAL_LIMIT,
    API_UPDATE_LIMIT,
} from '../utils/ActionsType';

const initialState = {

}

export default function (state = initialState, actions) {
  switch (actions.type){
    case API_GET_PERSONAL_LIMIT[1]:
      return {
        ...state
      }
      case API_UPDATE_LIMIT[1]:
          return {
              ...state,
              editsuccess: actions.data
          }
    default:
      return state;
  }

}