import {
    API_GET_PROVINCE,
    API_GET_PROVINCE_BY_PNAME,
    API_GET_CITY_BY_CNAME,
    API_GET_FLAT_BY_SID,
    API_GET_FLAT_ALL,
    API_GET_COMBINE_FLAT,
    API_GET_USER_REGISTER,
} from '../utils/ActionsType';


const initialState = {
    NavProvinceData: [],
    NavProvinceDataByPName: [],
    NavCityDataByCName: [],
    flatDataByAny: [],
    flatAllData: [],
    dymFlatData:[],
    registerData:[],
}

export default function (state = initialState, actions) {
    switch (actions.type){
        case API_GET_PROVINCE[1]:
            return {
                ...state,
                NavProvinceData: _.map(actions.data, (v) =>{
                    return{
                        pId: v.pId,
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
                        pId: v.pId,
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
        case API_GET_CITY_BY_CNAME[1]:
            return {
                ...state,
                NavCityDataByCName: _.map(actions.data, (v) => {
                    return {
                        cName: v.cName,
                        cId: v.cId,
                        streets: v.streets.map((i) => {
                            return {
                                sName: i.sName,
                                sId: i.sId,
                            }
                        })
                    }
                })
            }
        case API_GET_FLAT_BY_SID[1]:
            return {
                ...state,
                flatDataByAny: actions.data
            }
        case API_GET_FLAT_ALL[1]:
            return {
                ...state,
                flatAllData: actions.data
            }
        case API_GET_COMBINE_FLAT[1]:
            return {
                ...state,
                dymFlatData: actions.data
            }
        case API_GET_USER_REGISTER[1]:
            return {
                ...state,
                registerData: actions.data
            }
        default:
            return state;
    }

}

