export const  ERROR = 'ERROR';
export const CLEAR_MSG = 'CLEAR_MSG';
export const TOAST = 'TOAST';
export const LOADING = 'LOADING';
export const ASYNC_COOKIE='ASYNC_COOKIE';

// 分页
export const COMMONT_PAGE_NUMBER='COMMONT_PAGE_NUMBER'

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
export const API_DETAIL_MODEL = ['REQUEST', 'UPDATE_MODEL_SUCCESS', 'FAILURE'];
//修改
export const API_MODIFY_MODEL = ['REQUEST', 'UPDATE_MODEL_SUCCESS', 'FAILURE'];
//删除
export const API_DELETE_MODEL = ['REQUEST', 'DELETE_MODEL_SUCCESS', 'FAILURE'];
//查看明细
export const API_GET_MODEL = ['REQUEST', 'GET_MODEL_SUCCESS', 'FAILURE'];
//普通限额操作做记录
export const API_RECORD_MODEL = ['REQUEST', 'GET_MODEL_SUCCESS', 'FAILURE'];


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
// 修改个性限额
export const  API_UPDATE_PERSONAL_LIMIT =  ['REQUEST', 'API_UPDATE_PERSONAL_LIMIT', 'FAILURE'];
// 删除个性限额
export const  API_DELETE_PERSIONAL_MODEL =  ['REQUEST', 'API_DELETE_PERSIONAL_MODEL', 'FAILURE'];
// 添加个性限额
export const  API_POST_PERSIONAL_MODEL =  ['REQUEST', 'API_POST_PERSIONAL_MODEL', 'FAILURE'];

// 查询消费类型下拉纬度
export const API_GET_PERSIONAL_CONSUMPTION = ['REQUEST', 'API_GET_PERSIONAL_CONSUMPTION', 'FAILURE'];
// 查询在线交易类型下拉纬度
export const API_GET_PERSIONAL_ONLINE = ['REQUEST', 'API_GET_PERSIONAL_ONLINE', 'FAILURE'];
// 查询消费类型下拉纬度
export const API_GET_PERSIONAL_ONLINEPAY = ['REQUEST', 'API_GET_PERSIONAL_ONLINEPAY', 'FAILURE'];
// 首页列表
export const API_GET_PERSIONAL_HOMELIST = ['REQUEST', 'API_GET_PERSIONAL_HOMELIST', 'FAILURE'];

//查询个性限额操作记录
export const API_GET_PERSIONAL_OPTLOG = ['REQUEST', 'GET_PERSONAL_LIMIT_SUCCESS','FAILURE'];

export const API_GET_PERSIONAL_DETAILFOR_EDIT = ['REQUEST', 'API_GET_PERSIONAL_DETAILFOR_EDIT','FAILURE'];


//GET /rcslCommon/getAuthorityVerify  查看系统权限

export const  API_GET_ROLES = ['REQUEST', 'API_GET_ROLES','FAILURE'];