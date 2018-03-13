import { ActionCreator } from '../utils/fetch-middleware';
import {
    API_GET_PROVINCE,
    API_GET_PROVINCE_BY_PNAME,
} from '../utils/ActionsType';

export const get_province_all = (data) => ActionCreator(API_GET_PROVINCE, `/api/queryProvince/query`, 'GET')();


//按pName查询地理信息
export const get_province_by_pname = (pName) => ActionCreator(API_GET_PROVINCE_BY_PNAME, `/api/queryProvince/queryByPname/${pName}`, `GET`)();