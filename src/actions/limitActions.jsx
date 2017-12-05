import { checkStatus, parseJSON, headers } from '../utils/fetch-middleware';
import  { queryData } from '../utils/dataConvert';
import {
  API_GET_BUSSINESS_TYPE,
  API_GET_MODELS,
  API_GET_MAIN_ACCOUNT,
  API_GET_BODY_PROPERTY
} from '../utils/ActionsType';

const ActionCreator = (type,url,method)=>{
  return  ()=>{
    return {
      types:[...type],
      payload:'',
      promise:()=>{
        return new Promise((resolve,reject)=>{
          fetch(url,{
            method:method,
            headers,
          }).then(checkStatus).then(parseJSON).then((data)=>{
            resolve(data);
          })
        })
      }
    }
  }
}

//查询所有的Models
export const getModels =(data)=>  ActionCreator(API_GET_MODELS,`/api/rcslmodel${queryData(data)}`,'GET')();

//GET /type/businesstype 查找限额业务类型（限额类型）
export const getBussinessType =  ActionCreator(API_GET_BUSSINESS_TYPE,`/api/type/businesstype`,'GET');


//GET /type/mainpart 查找限额主体（限额主体)
export const getMainPart = (data)=>  ActionCreator(API_GET_MAIN_ACCOUNT,`/api/type/mainpart${queryData(data)}`,'GET')();


//GET /type/mainparttype 查找限额主体属性（限额属性）
export const getBodyProperty =  ActionCreator(API_GET_BODY_PROPERTY,`/api/type/mainparttype`,'GET');