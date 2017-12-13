import {
    API_GET_PERSONAL_LIMIT,
    API_UPDATE_PERSONAL_LIMIT,
    API_DELETE_PERSIONAL_MODEL,
    API_POST_PERSIONAL_MODEL,
    API_GET_PERSIONAL_CONSUMPTION,
    API_GET_PERSIONAL_ONLINE,
    API_GET_PERSIONAL_ONLINEPAY,
    API_GET_PERSIONAL_HOMELIST,
    API_GET_PERSIONAL_DETAILFOR_EDIT,
    PERSONAL_PAGE_NUMBER
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
                consumptionTypeData:  {
                    labelName: '消费类型',
                    key: 'tranCd',
                    type: 'select',
                    optionVal: actions.data.map(data => {
                            return {value: data.propertyDetailCode, name: data.propertyDetailName}

                        }
                    )

                }
            }
        case API_GET_PERSIONAL_ONLINE[1]:
            return {
                ...state,
                onlineData:  {
                    labelName: '在线支付类型',
                    key: 'olPayType',
                    type: 'select',

                    optionVal: actions.data.map(data => {
                            return {value: data.propertyDetailCode, name: data.propertyDetailName}

                        }
                    )

                }
            }
        case API_GET_PERSIONAL_ONLINEPAY[1]:
            return {
                ...state,
                onlinePayData:
                    {
                        labelName: '在线支付方式',
                        key: 'olPayWay',
                        type: 'select',

                        optionVal: actions.data.map(data => {
                                return {value: data.propertyDetailCode, name: data.propertyDetailName}

                            }
                        )

                    }
            }
        case API_GET_PERSIONAL_DETAILFOR_EDIT[1]:
            return {
                ...state,
                entryDataEdit: actions.data,
                initdataEdit: _.map(actions.data.propertyList, (v, k) => {
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
        case PERSONAL_PAGE_NUMBER:
            return {
                ...state,
                personalPageNum: actions.data,
            }
        default:
            return state;
    }

}