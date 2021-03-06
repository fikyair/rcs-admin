import { ActionCreator } from '../utils/fetch-middleware';
import {queryData} from '../utils/dataConvert';
import {
    API_GET_PROVINCE,
    API_GET_PROVINCE_BY_PNAME,
    API_GET_CITY_BY_CNAME,
    API_GET_FLAT_BY_SID,
    API_GET_FLAT_ALL,
    API_GET_COMBINE_FLAT,
    API_GET_USER_REGISTER,
} from '../utils/ActionsType';

export const get_province_all = (data) => ActionCreator(API_GET_PROVINCE, `/api/queryProvince/query`, 'GET')();


//按pName查询地理信息
export const get_province_by_pname = (pName) => ActionCreator(API_GET_PROVINCE_BY_PNAME, `/api/queryProvince/queryByPname/${pName}`, `GET`)();

//按cName查询所有街道信息
export const get_city_by_cname = (cName) => ActionCreator(API_GET_CITY_BY_CNAME, `/api/queryProvince/queryByCname/${cName}`, `GET`)();

//按sId查询所有房源信息
export const get_flat_by_sId =  (sId) => ActionCreator(API_GET_FLAT_BY_SID, `/api/flat/queryBysId/${sId}`, 'GET')();

//查询所有房源信息

export const get_flat_all = (pName) => ActionCreator(API_GET_FLAT_ALL, `/api/flat/queryall/${pName}`, 'GET')();

//动态查询房源信息

export const get_combine_flat = (data) => ActionCreator(API_GET_COMBINE_FLAT, `/api/flat/combineselect`, 'POST', data)();

//前端注册接口
export const get_user_register = (data) => ActionCreator(API_GET_USER_REGISTER, `/api/user/addUser`, 'POST', data)();