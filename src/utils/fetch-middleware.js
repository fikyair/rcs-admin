import store from '../store';
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
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export  function parseJSON(response) {
    return response.json()
}

export const headers = ()=> ({
    headers:{
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    },
})