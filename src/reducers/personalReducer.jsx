import {
    API_GET_PERSONAL_LIMIT,
    API_UPDATE_PERSONAL_LIMIT,
    API_DELETE_PERSIONAL_MODEL,
    API_POST_PERSIONAL_MODEL,
    API_GET_PERSIONAL_CONSUMPTION,
    API_GET_PERSIONAL_ONLINE,
    API_GET_PERSIONAL_ONLINEPAY,
    API_GET_PERSIONAL_HOMELIST
} from '../utils/ActionsType';

const initialState = {
    initdata: [],
    entryData: {},
    detelesuccess: {},
    editsuccess: {},
    consumptionTypeData: {},
    onlineData: {},
    onlinePayData: {},
    homeListData: []
}

export default function (state = initialState, actions) {
    switch (actions.type) {
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
        case API_GET_PERSIONAL_HOMELIST[1]:
            return {
                ...state,
                homeListData: actions.data
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
        case API_POST_PERSIONAL_MODEL[1]:
            return {
                ...state,
                addsuccess: true
            }
        case API_GET_PERSIONAL_CONSUMPTION[1]:
            return {
                ...state,
                consumptionTypeData: actions.data
            }
        case API_GET_PERSIONAL_ONLINE[1]:
            return {
                ...state,
                onlineData: actions.data,
            }
        case API_GET_PERSIONAL_ONLINEPAY[1]:
            return {
                ...state,
                onlinePayData: actions.data
            }

        default:
            return state;
    }

}