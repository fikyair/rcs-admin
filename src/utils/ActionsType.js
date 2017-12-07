export const  ERROR = 'ERROR';
export const CLEAR_MSG = 'CLEAR_MSG';
export const TOAST = 'TOAST';
export const LOADING = 'LOADING';
export const ASYNC_COOKIE='ASYNC_COOKIE';

export const FORM_SET='FORM_SET';
// 登录修改
export const API_POST_EDIT = ['REQUEST', 'POST_EDITSUCCESS', 'FAILURE'];


export const API_POST_LOGIN = ['REQUEST', 'POST_LOGIN_SUCCESS', 'FAILURE'];


export const API_GET_CARD = ['REQUEST', 'GET_CARD_SUCCESS', 'FAILURE'];

/*
* 主体、业务、账户下拉菜单
*
* */
//业务类型
export const API_GET_BUSSINESS_TYPE = ['REQUEST', 'GET_BUSSINESS_TYPE_SUCCESS', 'FAILURE'];

//主体
export const API_GET_MAIN_ACCOUNT = ['REQUEST', 'GET_MAIN_ACCOUNT_SUCCESS', 'FAILURE'];
//主体属性
export const API_GET_BODY_PROPERTY = ['REQUEST', 'GET_BODY_PROPERTY_SUCCESS', 'FAILURE'];
//商户类型
export const API_GET_MERCHT_TYPE = ['REQUEST', 'GET_MERCHT_TYPE_SUCCESS', 'FAILURE'];



/*
*
* 限额模型接口
* */
//查询限额模型列表
export const API_GET_MODELS = ['REQUEST', 'GET_MODELS_SUCCESS', 'FAILURE'];
//新增初始化数据 ---下拉选项等
export const API_INIT_POST_MODEL = ['REQUEST', 'POST_MODEL_SUCCESS', 'FAILURE'];
//新增
export const API_POST_MODEL = ['REQUEST', 'POST_MODEL_SUCCESS', 'FAILURE'];
//修改回显
export const API_UPDATE_MODEL = ['REQUEST', 'UPDATE_MODEL_SUCCESS', 'FAILURE'];
//修改
export const API_MODIFY_MODEL = ['REQUEST', 'UPDATE_MODEL_SUCCESS', 'FAILURE'];
//删除
export const API_DELETE_MODEL = ['REQUEST', 'DELETE_MODEL_SUCCESS', 'FAILURE'];
//查看明细
export const API_GET_MODEL = ['REQUEST', 'GET_MODEL_SUCCESS', 'FAILURE'];


/*
*
*
* 查看维度明细
* */
export const API_GET_PROPERTIES = ['REQUEST', 'GET_PROPERTIES_SUCCESS', 'FAILURE'];


/*
*
* 查看个性限额明细
* */
export const  API_GET_PERSONAL_LIMIT =  ['REQUEST', 'GET_PERSONAL_LIMIT_SUCCESS', 'FAILURE'];