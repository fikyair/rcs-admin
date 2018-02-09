import {checkStatus, parseJSON, headers, filterResponse} from '../utils/fetch-middleware';
import {
    API_GET_PROVINCE
} from '../utils/ActionsType';
const ActionCreator = (type, url, method, data) => {

    return () => {
        return {
            types: [...type],
            payload: '',
            promise: () => {
                return new Promise((resolve, reject) => {
                    fetch(url, {
                        method: method,
                        headers:{...headers,'auth-token': $.cookie('auth-token')},
                        body: JSON.stringify(data),
                    }).then(checkStatus).then(parseJSON).then(filterResponse).then((data) => {
                        resolve(data);
                    }).catch((err) => {
                        reject({err});
                    });
                })
            }
        }
    }
}

export const get_province_all = (data) => ActionCreator(API_GET_PROVINCE, `/api/queryProvince/query`, 'GET')();
