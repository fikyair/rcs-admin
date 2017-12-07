import { checkStatus, parseJSON, headers, filterResponse } from '../utils/fetch-middleware';
import  { queryData } from '../utils/dataConvert';
import {
  API_GET_BUSSINESS_TYPE,
  API_GET_MODELS,
  API_GET_MAIN_ACCOUNT,
  API_GET_BODY_PROPERTY,
  API_UPDATE_MODEL,
    API_POST_MODEL,
    API_GET_MERCHT_TYPE,
    API_MODIFY_MODEL,
    API_INIT_POST_MODEL
} from '../utils/ActionsType';

const ActionCreator = (type,url,method,data)=>{
  return  ()=>{
    return {
      types:[...type],
      payload:'',
      promise:()=>{
        return new Promise((resolve,reject)=>{
          fetch(url,{
            method:method,
            headers,
              body: JSON.stringify(data),
          }).then(checkStatus).then(parseJSON).then(filterResponse).then((data)=>{
            resolve(data);
          }).catch((err)=> {
            reject({err:{message:'网络异常',code:'6666'}});
          });
        })
      }
    }
  }
}

//查询所有的Models
export const getModels =(data)=>  ActionCreator(API_GET_MODELS,`/api/rcslmodel${queryData(data)}`,'GET')();

//新增Models

export const addModel =(data) => ActionCreator(API_POST_MODEL,`/api/rcslmodel`,'POST',data)();

//GET /type/businesstype 查找限额业务类型（限额类型）
export const getBussinessType =  ActionCreator(API_GET_BUSSINESS_TYPE,`/api/type/businesstype`,'GET');


//GET GET /rcslmodelcascade/mainpart
export const getMainPart = (data)=>  ActionCreator(API_GET_MAIN_ACCOUNT,`/api/rcslmodelcascade/mainpart${queryData(data)}`,'GET')();


//GET /type/mainparttype 查找限额主体属性（限额属性）
export const getBodyProperty =  ActionCreator(API_GET_BODY_PROPERTY,`/api/type/mainparttype`,'GET');
// /rcslproperty/detail 查看维度明细

export const getMerchtType = (data)=> ActionCreator(API_GET_MERCHT_TYPE,`/api/rcslproperty/detail/${queryData(data)}`,'GET')();


export const getLimitInitData = (data) => ActionCreator(API_UPDATE_MODEL, `/api/rcslmodel/${data.id}`, 'GET')()

export const editLimit = (data) => ActionCreator(API_MODIFY_MODEL, `/api/rcslmodel`, 'PUT', data)()

//查询新增的下拉选项等数据
export const getSelectDdata = (data) => ActionCreator(API_INIT_POST_MODEL, `/api/rcslmodelcascade/propertylist?limitType=1&limitProperty=1&mainPartCodeGroup=M101&merchType=P1011001`, 'GET')()