import { checkStatus, parseJSON, headers } from '../utils/fetch-middleware';
import {
    CLEAR_MSG,
    API_POST_LOGIN,
    ASYNC_COOKIE
} from '../utils/ActionsType';

import  { FetchAPI as FetchPromise } from '../utils/fetch-middleware';


/*
* 同步本地cookie 信息
* */

export function asyncCookie(data) {
    return {
        type:ASYNC_COOKIE,
        data:data,
    }

}

/*
* 清除错误信息
* */
export function clearErrMsg(data) {
    return {
        type:CLEAR_MSG,
        data:data,
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

//同步方法
export const synchronized = async function(fun) {
    await fun
}

//登录接口
export function loginWithUser(data) {
    const { name,password} = data;
    return {
        types:[...API_POST_LOGIN],
        payload:'',
        promise:()=>{
            return new Promise((resolve,reject)=>{
                fetch(`/api/login?Loginname=${name}&password=${password}`,{
                    method:'POST',
                    headers,
                    credentials:'include',
                }).then(parseJSON).then((data)=>{
                    resolve(data);
                })
            })
        }
    }

}

