import { checkStatus, parseJSON, headers } from '../utils/fetch-middleware';
import {
    queryMyFund_REQUEST,
    API_GET_ALL_INSTANCE,
    API_GET_DAGNODEJS_LOAD
} from '../utils/ActionsType';

import  { FetchAPI as FetchPromise } from '../utils/fetch-middleware'


export function warnings(err) {
  return {
    type:ERROR,
    payload:err
  }
}

/*
*
* 接口请求
*
* */
export function queryMyFund(data) {
  return {
    types: [...queryMyFund_REQUEST],
    payload:data,
    promise:()=>{
     return FetchPromise("/trade/query/queryMyFund",'post',data)
    }
  };
}

//首页获取 timebucket
export function getAllInstance () {
  return {
    types:[...API_GET_ALL_INSTANCE],
      payload:'',
      promise:() =>{
       return new Promise((resolve,reject)=>{
           fetch('/api/time/sync/allInstance',{
               method: "GET",
               headers,
               credentials: 'include',
           }).then(parseJSON).then((data) =>{
               resolve(data);
           })
       });
      }

  }
    
}

//首页获取节点数
export function dagNodejsLoad() {
    return {
        types:[...API_GET_DAGNODEJS_LOAD],
        payload:'',
        promise:()=>{
            return new Promise((resolve,reject)=>{
                fetch('/api/dagNodesLoad?startTime=201711101758&endTime=201711101858',{
                    method:'GET',
                    headers,
                    credentials:'include'
                }).then(parseJSON).then((data)=>{
                    resolve(data);
                })
            })
        }
    }

}

