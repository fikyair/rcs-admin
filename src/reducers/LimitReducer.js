import {
    API_GET_MODELS,
    API_GET_BUSSINESS_TYPE,
    API_GET_MAIN_ACCOUNT,
    API_GET_BODY_PROPERTY,
    API_DETAIL_MODEL,
    API_GET_MERCHT_TYPE,
    API_POST_MODEL,
  API_GET_MULTI_LIST,
    API_MODIFY_MODEL,
    API_INIT_POST_MODEL,
    API_DELETE_MODEL,
    API_GET_PERSIONAL_OPTLOG,
    API_RECORD_MODEL,
    COMMONT_PAGE_NUMBER,
  API_GET_HAS_PERSONAL,
} from '../utils/ActionsType';

const initialState = {
    modelsData: {},
    bussinessType: {},
    selectsData: {
        limitType: {},
        limitProperty: {},
        limitBodyB: {},
        limitBodyC: {},
        merchType: {},
    },
    cardType: [],
    mainAccount: [],
    bodyProperty: [],
    initdata: [],
    entryData: {},
    editsuccess: {},
    selectData: {},
    operationData: [],
    paginationData: {},
    reocrdData: [],
    commonPageNum: 1,
};
//全局状态信息，数据信息存储
export default function (state = initialState, actions) {
    switch (actions.type) {
        case API_GET_MODELS[1]:
            return {
                ...state,
                modelsData: actions.data
            };
        case API_DELETE_MODEL[1]:
            return {
                ...state,
                modelData: actions.data
            }
        case API_RECORD_MODEL[1]:
            return {
                ...state,
                recordData: _.map(actions.data.records, (v, k) => {
                    return {
                        key: k,
                        modelName: v.modelName,
                        singleAmountLimit: v.singleAmountLimit,
                        dayAmountLimit: v.dayAmountLimit,
                        monthAmountLimit: v.monthAmountLimit,
                        yearAmountLimit: v.yearAmountLimit,
                        lifeAmountLimit: v.lifeAmountLimit,
                        intervalSecondsLimit: v.intervalSecondsLimit,
                        countLimitCountValue: v.countLimitCountValue,
                        dayCountLimit: v.dayCountLimit,
                        status: v.status,
                        optUserName: v.optUserName,
                        optTime: v.optTime,
                        countLimitMinuteValue:v.countLimitMinuteValue,
                        optRemark:v.optRemark
                    }

                }),
                recordType: actions.data,
            }
        case API_GET_BUSSINESS_TYPE[1]:

            return {
                ...state,
                selectsData: {
                    ...state.selectsData,
                    limitType: {
                        labelName: '限额类型',
                        optionVal: [
                            ..._.map(actions.data, (v, k) => {
                                return {value: String(v.key), name: String(v.value)}
                            }),
                        ],
                        key: 'limitType',
                        type: 'select'
                    }
                },
                bussinessType: actions.data,
            }
        case API_GET_MAIN_ACCOUNT[1]:

            return {
                ...state,
                selectsData: {
                    ...state.selectsData,
                    ... _.keyBy(actions.data.map((v, k) => {
                        return {
                            labelName: v.name,
                            optionVal: [
                                ..._.map(v.value, (v, k) => {
                                    return {value: String(v.code), name: String(v.name)}
                                }),
                            ],
                            key: v.code == 1 ?   'limitBodyB':"limitBodyC",
                            type: 'select'
                        }
                    }), 'key')
                }
            }
        case API_GET_BODY_PROPERTY[1]:
            return {
                ...state,
                selectsData: {
                    ...state.selectsData,
                    limitProperty: {
                        labelName: '限额属性',
                        optionVal: [
                            ..._.map(actions.data, (v, k) => {
                                return {value: String(v.key), name: String(v.value)}
                            }),
                        ],
                        key: 'limitProperty',
                        type: 'select'
                    }
                },
                bodyProperty: actions.data,
            }
        case API_GET_MERCHT_TYPE[1]:

            return {
                ...state,
                selectsData: {
                    ...state.selectsData,
                    merchType: {
                        index: '4',
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
        case API_DETAIL_MODEL[1]:
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
        case API_GET_PERSIONAL_OPTLOG[1]:
            return {
                ...state,
                operationData: _.map(actions.data.records, (v, k) => {
                    return {
                        key: k,
                        singleAmountLimit: v.singleAmountLimit,
                        dayAmountLimit: v.dayAmountLimit,
                        monthAmountLimit: v.monthAmountLimit,
                        yearAmountLimit: v.yearAmountLimit,
                        lifeAmountLimit: v.lifeAmountLimit,
                        intervalSecondsLimit: v.intervalSecondsLimit,
                        countLimitCountValue: v.countLimitCountValue,
                        dayCountLimit: v.dayCountLimit,
                        optUserName: v.optUserName,
                        optTime: v.optTime,
                        mainPartValue: v.mainPartValue,
                        countLimitMinuteValue:v.countLimitMinuteValue,
                        remark:v.remark,
                        optRemark:  v.optRemark
                    }
                }),
                paginationData: actions.data

            }
        case API_INIT_POST_MODEL[1]:

            return {
                ...state,
                selectData: _.keyBy(_.map(actions.data, (v, k) => {
                    return {
                        value: _.keyBy(v.value.map((v, k) => {
                            return {
                                labelName: v.name,
                                optionVal: v.value.map(data => {
                                    return {value: data.code, name: data.name}
                                }),
                                key: v.code,
                                type: 'select'
                            }
                        }),'key'),
                        name: v.name,
                        code: v.code,
                    }
                }),'code')

            }

        case API_MODIFY_MODEL[1]:
            return {
                ...state,
                editsuccess: actions.data
            }
        case COMMONT_PAGE_NUMBER:
            return {
                ...state,
                commonPageNum: actions.data
            }
      case API_GET_MULTI_LIST[1]:
        const list =_.keyBy(_.map(actions.data, (v, k) => {
            return {
              value: _.keyBy(v.value.map((v, k) => {
                return {
                  labelName: v.name,
                  optionVal: v.value.map(data => {
                    return {value: data.propertyDetailCode, name: data.propertyDetailName}
                  }),
                  key: v.code,
                  type: 'select'
                }
              }),'key'),
              name: v.name,
              code: v.code,
            }
          }),'code')
        return {
          ...state,
          selectData:{
                ...state.selectData,
                ..._.keyBy(_.map(list,(v,k)=>{
                  return {
                    ...v,
                    value: {
                      ...state.selectData[v.code].value,
                      ...v.value,
                    }
                  }
                }),'code')
          }
        }
      case 'CLEAR_SELECT_DATA':
        return {
          ...state,
          selectsData:{}
        }
      case API_GET_HAS_PERSONAL[1]:
          return {
            ...state,
            hasPersonal: actions.data,
          }

        default:
            return state
    }
}
