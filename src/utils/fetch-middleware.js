import store from '../store';
import {getCurrentLoginUser} from '../common/permission';

export const FetchAPI = (url,method,data)=>{
  store.dispatch({ type: 'REQUEST'});
    return new Promise((resolve, reject) => {
        const req = new Request(`/api${url}`, {
            method: method,
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                "Content-Type": ' application/json',
                "auth-token": $.cookie('token'),
            }});
        try {
          fetch(req).then((res)=>{
            //限额后台，在之前框架中加入http 400 状态码处理
            if(res.ok || res.status == '400'){
              return res.json();
            } else {
              return {err:{msg:'请求异常',code:'6666'}}
            }

          }).then((result)=>{
            store.dispatch({ type: 'FINISH'});
            if(result.code == '200'){
                resolve(result.data)
            } else if(result.code === '205'){ // 刷新缓存
                $.cookie('Version-Token', result.msg, { expires: 8, path: '/'});
                setTimeout(()=>{
                    window.location.reload();
                },1000)
                throw new Error('请稍候，页面升级中');
            } else {
              store.dispatch({ result:{message:result.message},type: 'FAILURE'});
              reject({err:{msg:'后台异常',code:'9999'}});
            }
          }).catch((err)=> {
            store.dispatch({ result:{message:err.msg},type: 'FAILURE'});
            reject({err:{msg:'网络异常',code:'6666'}});
          });
        } catch (e){
          store.dispatch({ result:{message:"请检查网络"},type: 'FAILURE'});
        }

    })
}

export function checkStatus(response) {
    if ((response.status >= 200 && response.status < 300) || response.status == 400 ) {
        return response
    } else {
        var err = new Error("网络异常")
        err.response = response
      err.message = response.statusText
        throw err
    }
}

export  function parseJSON(response) {
  if(response.ok || response.status == '400'){
    return response.json();
  } else {
    return {err:{msg:'请求异常',code:'6666'}}
  }
}

export const headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'auth-token':$.cookie('auth-token'),
        'roles':JSON.stringify(getCurrentLoginUser),
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
}

export function filterResponse (data) {
  if(data.success){
    return data
  } else{
    var error = new Error(data.message)
    throw error
  }

}