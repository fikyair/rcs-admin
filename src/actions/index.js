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




