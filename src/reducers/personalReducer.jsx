import {
  API_GET_PERSONAL_LIMIT
} from '../utils/ActionsType';

const initialState = {

}

export default function (state = initialState, actions) {
  switch (actions.type){
    case API_GET_PERSONAL_LIMIT[1]:
      return {
        ...state
      }
    default:
      return state;
  }

}