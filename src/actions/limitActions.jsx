import { checkStatus, parseJSON, headers, filterResponse } from '../utils/fetch-middleware';
import  { queryData } from '../utils/dataConvert';
import {
  API_GET_BUSSINESS_TYPE,
  API_GET_MODELS,
  API_GET_MAIN_ACCOUNT,
  API_GET_BODY_PROPERTY,
  API_UPDATE_MODEL,
    API_POST_MODEL,
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


//GET /type/mainpart 查找限额主体（限额主体)
export const getMainPart = (data)=>  ActionCreator(API_GET_MAIN_ACCOUNT,`/api/type/mainpart${queryData(data)}`,'GET')();


//GET /type/mainparttype 查找限额主体属性（限额属性）
export const getBodyProperty =  ActionCreator(API_GET_BODY_PROPERTY,`/api/type/mainparttype`,'GET');

export const getLimitInitData = (data) => ActionCreator(API_UPDATE_MODEL,`/api/rcslmodel`, 'PUT')