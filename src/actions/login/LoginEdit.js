import { checkStatus, parseJSON, headers } from '../../utils/fetch-middleware';

import {
    CLEAR_MSG,
    API_POST_LOGIN,
    ASYNC_COOKIE
} from '../../utils/ActionsType';

//登录接口
export function editLogin(id,data) {
    const { name,password} = data;
    return {
        types:'EDIT',
        promise:()=>{
            return new Promise((resolve,reject)=>{
                fetch(`/api/cuser/2475d376fa634ec884886d8c7c31c3be`,{
                    method:'PUT',
                    headers,
                    body: {
                        name: data.name,
                        loginname: data.loginname,
                        password: data.password,
                        sex: 0,
                        age: 0,
                        email: "string",
                        mobilephone: data.mobilephone,
                        telephone: "123456789",
                        iscancel: 0,
                        userType: 0,
                        userState: 0,
                        remark: "string"
                    }
                }).then(parseJSON).then((data)=>{
                    resolve(data);
                })
            })
        }
    }

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

