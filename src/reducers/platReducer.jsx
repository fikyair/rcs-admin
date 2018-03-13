import {
    API_GET_PROVINCE,
    API_GET_PROVINCE_BY_PNAME,
} from '../utils/ActionsType';


const initialState = {
    NavProvinceData: [],
    NavProvinceDataByPName: [],
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

        case API_GET_PROVINCE_BY_PNAME[1]:
            return {
                ...state,
                NavProvinceDataByPName: _.map(actions.data, (v) =>{
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

