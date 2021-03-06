import { checkStatus, parseJSON, headers } from '../utils/fetch-middleware';
import {
    CLEAR_MSG,
    API_POST_LOGIN,
  FORM_SET,
    ASYNC_COOKIE,
  API_GET_CARD
} from '../utils/ActionsType';

import  * as LimitActions from './limitActions';


export default {
  ...LimitActions
}
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
*
* */
export function setTemp(data) {
  return {
    type:FORM_SET,
    data:data,
  }

}


/*
*
* 接口请求
*
* */

//登录接口
export function getCardBin() {
  return {
    types:[...API_GET_CARD],
    payload:'',
    promise:()=>{
      return new Promise((resolve,reject)=>{
        fetch(`/api/rcslmodelcardbin`,{
          method:'POST',
          headers,
          credentials:'include',
        }).then(checkStatus).then(parseJSON).then((data)=>{
          resolve(data);
        })
      })
    }
  }

}

