import {
  API_GET_PERSONAL_LIMIT
} from '../utils/ActionsType';

const initialState = {
  initdata:[],
  entryData:{}

}

export default function (state = initialState, actions) {
  switch (actions.type){
    case API_GET_PERSONAL_LIMIT[1]:
      debugger;
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

    default:
      return state;
  }

}