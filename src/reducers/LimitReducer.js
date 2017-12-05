import {  API_GET_MODELS,
          API_GET_BUSSINESS_TYPE,
  API_GET_CARD,
} from '../utils/ActionsType';
const initialState ={
  modelsData:[],
  bussinessType:[],
  cardType:[],
};
//全局状态信息，数据信息存储
export default function (state = initialState,actions ) {
  switch (actions.type){
    case API_GET_MODELS[1]:
      return {
        ...state,
        modelsData:actions.data
      };
    case API_GET_BUSSINESS_TYPE[1]:
      return {
        ...state,
        bussinessType:actions.data,
      }
    case API_GET_CARD[1]:
       return {
      ...state,
      cardType:actions.data,
    }
    default:
      return state
  }
}
