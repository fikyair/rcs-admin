import { ActionCreator } from '../utils/fetch-middleware';
import {
    API_GET_PROVINCE
} from '../utils/ActionsType';

export const get_province_all = (data) => ActionCreator(API_GET_PROVINCE, `/api/queryProvince/query`, 'GET')();
