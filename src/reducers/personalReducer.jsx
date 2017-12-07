import {
  API_GET_PERSONAL_LIMIT,
    API_UPDATE_PERSONAL_LIMIT,
    API_DELETE_PERSIONAL_MODEL,
} from '../utils/ActionsType';

const initialState = {
  initdata:[],
  entryData:{},
    detelesuccess:{},
    editsuccess:{}

}

export default function (state = initialState, actions) {
  switch (actions.type){
    case API_GET_PERSONAL_LIMIT[1]:
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
      case API_UPDATE_PERSONAL_LIMIT[1]:
          return {
              ...state,
              editsuccess: true
          }
      case API_DELETE_PERSIONAL_MODEL[1]:
          return {
              ...state,
              detelesuccess: true
          }
    default:
      return state;
  }

}