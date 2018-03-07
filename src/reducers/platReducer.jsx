import {
    API_GET_PROVINCE
} from '../utils/ActionsType';


const initialState = {
    NavProvinceData: [],
    cities: [],

}

export default function (state = initialState, actions) {
    switch (actions.type){
        case API_GET_PROVINCE[1]:
            debugger
            return {
                ...state,
                NavProvinceData: _.map(actions.data, (v) =>{
                    return{
                        pName: v.pName,
                        cities: v.cities.map((i) =>{
                            return i.cName
                        })
                    }
                })
            }
        default:
            return state;
    }

}

