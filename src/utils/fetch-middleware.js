export const FetchAPI = (url,method,data)=>{
    return new Promise((resolve, reject) => {
        const req = new Request(`/api${url}`, {
            method: method,
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                "Content-Type": ' application/json',
            }});
        fetch(req).then((res)=>{
            if(res.ok){
                return res.json();
            }
            reject({err:{msg:'网络异常',code:'6666'}})
        }).then((result)=>{
            if(result.code == '0000'){
                resolve(result.data)
            } else {
                reject(result);
            }
        }).catch((err)=> {
            reject({err:{msg:'后台异常',code:'6666'}})
        });
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