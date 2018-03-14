import { ActionCreator } from '../utils/fetch-middleware';
import {
    API_GET_PROVINCE,
    API_GET_PROVINCE_BY_PNAME,
    API_GET_CITY_BY_CNAME,
} from '../utils/ActionsType';

export const get_province_all = (data) => ActionCreator(API_GET_PROVINCE, `/api/queryProvince/query`, 'GET')();


//按pName查询地理信息
export const get_province_by_pname = (pName) => ActionCreator(API_GET_PROVINCE_BY_PNAME, `/api/queryProvince/queryByPname/${pName}`, `GET`)();

//按cName查询所有街道信息
export const get_city_by_cname = (cName) => ActionCreator(API_GET_CITY_BY_CNAME, `/api/queryProvince/queryByCname/${cName}`, `GET`)();