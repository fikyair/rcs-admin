import {
    API_GET_PROVINCE
} from '../utils/ActionsType';


const initialState = {
    NavProvinceData: [],
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
                            return {
                                cName: i.cName,
                                streets: i.streets.map((j) =>{
                                     return {
                                         sName: j.sName
                                     }
                                })
                            }
                        })
                    }
                })
            }
        default:
            return state;
    }

}

