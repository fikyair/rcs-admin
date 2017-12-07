import {
    API_GET_MODELS,
    API_GET_BUSSINESS_TYPE,
    API_GET_MAIN_ACCOUNT,
    API_GET_BODY_PROPERTY,
    API_UPDATE_MODEL,
    API_GET_MERCHT_TYPE,
    API_POST_MODEL,
    API_MODIFY_MODEL,
    API_INIT_POST_MODEL,
} from '../utils/ActionsType';

const initialState = {
    modelsData: {},
    bussinessType: {},
    selectsData: {
        limitType: {},
        limitProperty: {},
        limitBodyB: {},
        limitBodyC:{},
      merchType: {},
    },
    cardType: [],
    mainAccount: [],
    bodyProperty: [],
    initdata: [],
    entryData:{},
    editsuccess:{},
    selectData: []
};
//全局状态信息，数据信息存储
export default function (state = initialState, actions) {
    switch (actions.type) {
        case API_GET_MODELS[1]:
            return {
                ...state,
                modelsData: actions.data
            };
        case API_GET_BUSSINESS_TYPE[1]:

      return {
        ...state,
        selectsData:{
          ...state.selectsData,
          limitType:{
            labelName: '限额类型',
            optionVal: [
              ..._.map(actions.data,(v,k)=>{ return {value:String(v.key),name:String(v.value)}}),
            ],
            key: 'limitType',
            type: 'select'
        }},
        bussinessType:actions.data,
      }
      case API_GET_MAIN_ACCOUNT[1]:

       return {
      ...state,
         selectsData:{
           ...state.selectsData,
           ... _.keyBy(actions.data.map((v,k)=>{
             return {
               labelName: v.name,
               optionVal: [
                 ..._.map(v.value,(v,k)=>{ return {value:String(v.code),name:String(v.name)}}),
               ],
               key: v.code == 1?"limitBodyC":'limitBodyB',
               type: 'select'
             }
           }),'key')
         }
    }
    case API_GET_BODY_PROPERTY[1]:
      return {
        ...state,
        selectsData:{
          ...state.selectsData,
          limitProperty:{
            labelName: '限额属性',
            optionVal: [
              ..._.map(actions.data,(v,k)=>{ return {value:String(v.key),name:String(v.value)}}),
            ],
            key: 'limitProperty',
            type: 'select'
          }},
        bodyProperty:actions.data,
      }
    case API_GET_MERCHT_TYPE[1]:
      debugger;
      return {
        ...state,
        selectsData: {
          ...state.selectsData,
          merchType: {
            index:'4',
            labelName: '商户类型',
            optionVal: [
              ..._.map(actions.data, (v, k) => {
                return {value: v.code, name: v.name}
              }),
            ],
            key: 'merchType',
            type: 'select'
          }
        },
        bodyProperty: actions.data,
      }
      case API_UPDATE_MODEL[1]:
            return {
                ...state,
                entryData: actions.data,
                initdata: _.map(actions.data.propertyList, (v, k) => {
                    return {
                        value: v.value.map((v, k) => {
                            return {
                                labelName: v.name,
                                initialValue: v.value.name,
                                key: v.code,
                                body: {
                                    style: {width: 150},
                                    disabled: true
                                }
                            }
                        }),
                        name: v.name,
                        code: v.code,


                    }
                }),

            }
        case API_INIT_POST_MODEL[1]:
            debugger
            return {
                ...state,
                selectData: _.map(actions.data, (v, k) => {
                    return {
                        value: v.value.map((v, k) => {
                            return {
                                labelName: v.name,
                                optionVal: v.value.map(data =>{return {value: data.code, name: data.name}}),
                                key: v.code,
                                type: 'select'
                            }
                        }),
                        name: v.name,
                        code: v.code,
                    }
                }),

            }

        case API_MODIFY_MODEL[1]:
            return {
                ...state,
                editsuccess: actions.data
            }
    default:
      return state
  }
}
