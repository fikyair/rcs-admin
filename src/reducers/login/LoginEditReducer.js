import {EDIT} from '../../utils/ActionsType';
const initialState ={

}

export default function (state = initialState,actions ) {
  //const {payload} = actions;
  switch (actions.type){
    case EDIT:
      return {
        ...state,
        data:actions.data
      };
    default:
      return state
  }
}
