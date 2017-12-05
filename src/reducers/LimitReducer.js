import {  API_GET_MODELS,
          API_GET_BUSSINESS_TYPE,
  API_GET_MAIN_ACCOUNT,
  API_GET_BODY_PROPERTY,
} from '../utils/ActionsType';
const initialState ={
  modelsData:[],
  bussinessType:{},
  selectsData:[],
  cardType:[],
  mainAccount:[],
  bodyProperty:[],
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
        selectsData:[
          ...state.selectsData,
          {
            labelName: '限额类型',
            optionVal: [
              ..._.map(actions.data,(v,k)=>{ return {value:v.key,name:v.value}}),
              {
                value:'all',
                name:'全部'
              }
            ],
            key: 'limitType',
            type: 'select'
        }],
        bussinessType:actions.data,
      }
    case API_GET_MAIN_ACCOUNT[1]:
       return {
      ...state,
         selectsData:[
           ...state.selectsData,
           {
             labelName: '限额主体',
             optionVal: [
               ..._.map(actions.data,(v,k)=>{ return {value:v.key,name:v.value}}),
               {
                 value:'all',
                 name:'全部'
               }
             ],
             key: 'limitBody',
             type: 'select'
           }],
    }
    case API_GET_BODY_PROPERTY[1]:
      return {
        ...state,
        selectsData:[
          ...state.selectsData,
          {
            labelName: '限额属性',
            optionVal: [
              ..._.map(actions.data,(v,k)=>{ return {value:v.key,name:v.value}}),
              {
                value:'all',
                name:'全部'
              }
            ],
            key: 'limitProperty',
            type: 'select'
          }],
        bodyProperty:actions.data,
      }

    default:
      return state
  }
}
