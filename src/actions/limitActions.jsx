import { checkStatus, parseJSON, headers } from '../utils/fetch-middleware';
import {
  API_GET_BUSSINESS_TYPE,
  API_GET_MODELS,
  API_GET_CARD
} from '../utils/ActionsType';

const base_url = 'https://rcs-admin-dev.suixingpay.com';

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

//限额类型
export function getBussinessType() {
  return {
    types:[...API_GET_BUSSINESS_TYPE],
    payload:'',
    promise:()=>{
      return new Promise((resolve,reject)=>{
        fetch(`/api/type/businesstype`,{
          method:'GET',
          headers,
        }).then(checkStatus).then(parseJSON).then((data)=>{
          resolve(data);
        })
      })
    }
  }

}

//GET /rcslmodel 查询限额模型列表
export function getModels() {
  return {
    types:[...API_GET_CARD],
    payload:'',
    promise:()=>{
      return new Promise((resolve,reject)=>{
        fetch(`/api/rcslmodel`,{
          method:'GET',
          headers,
        }).then(checkStatus).then(parseJSON).then((data)=>{
          resolve(data);
        })
      })
    }
  }
}

//GET /type/cardtype 查找卡类型枚举
export function getCardType() {
  return {
    types:[...API_GET_MODELS],
    payload:'',
    promise:()=>{
      return new Promise((resolve,reject)=>{
        fetch(`/api/type/cardtype`,{
          method:'GET',
          headers,
        }).then(checkStatus).then(parseJSON).then((data)=>{
          resolve(data);
        })
      })
    }
  }
}

//GET /type/mainpart 查找限额主体（限额主体)
export const getMainPart =  ActionCreator(API_GET_MODELS,`/api/type/mainpart`,'GET');