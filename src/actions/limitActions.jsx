import { checkStatus, parseJSON, headers, filterResponse } from '../utils/fetch-middleware';
import  { queryData } from '../utils/dataConvert';
import {
  API_GET_BUSSINESS_TYPE,
  API_GET_MODELS,
  API_GET_MAIN_ACCOUNT,
  API_GET_BODY_PROPERTY,
  API_DETAIL_MODEL,
    API_POST_MODEL,
    API_GET_MERCHT_TYPE,
    API_MODIFY_MODEL,
    API_INIT_POST_MODEL,
  API_GET_PERSONAL_LIMIT,
    API_UPDATE_PERSONAL_LIMIT,
    API_DELETE_PERSIONAL_MODEL,
    API_DELETE_MODEL
} from '../utils/ActionsType';

const ActionCreator = (type,url,method,data)=>{
  return  ()=>{
    return {
      types:[...type],
      payload:'',
      promise:()=>{
        return new Promise((resolve,reject)=>{
          fetch(url,{
            method:method,
            headers,
              body: JSON.stringify(data),
          }).then(checkStatus).then(parseJSON).then(filterResponse).then((data)=>{
            resolve(data);
          }).catch((err)=> {
            reject({err:{message:'网络异常',code:'6666'}});
          });
        })
      }
    }
  }
}

//查询所有的Models
export const getModels =(data)=>  ActionCreator(API_GET_MODELS,`/api/rcslmodel${queryData(data)}`,'GET')();

//新增Models

export const addModel =(data) => ActionCreator(API_POST_MODEL,`/api/rcslmodel`,'POST',data)();

//删除Models
export const deleteModel = (data) => ActionCreator(API_DELETE_MODEL,`/api/rcslmodel/${data.id}`,'DELETE')();

//GET /type/businesstype 查找限额业务类型（限额类型）
export const getBussinessType =  ActionCreator(API_GET_BUSSINESS_TYPE,`/api/type/businesstype`,'GET');


//GET GET /rcslmodelcascade/mainpart
export const getMainPart = (data)=>  ActionCreator(API_GET_MAIN_ACCOUNT,`/api/rcslmodelcascade/mainpart${queryData(data)}`,'GET')();


//GET /type/mainparttype 查找限额主体属性（限额属性）
export const getBodyProperty =  ActionCreator(API_GET_BODY_PROPERTY,`/api/type/mainparttype`,'GET');
// /rcslproperty/detail 查看维度明细

// GET /rcslmodelcascade/merchtype 查询商户类型下拉数据(新增时)
export const getMerchtType = (data)=> ActionCreator(API_GET_MERCHT_TYPE,`/api/rcslmodelcascade/merchtype/${queryData(data)}`,'GET')();


export const getLimitInitData = (data) => ActionCreator(API_DETAIL_MODEL, `/api/rcslmodel/${data.id}`, 'GET')()

export const editLimit = (data) => ActionCreator(API_MODIFY_MODEL, `/api/rcslmodel`, 'PUT', data)()

//查询新增的下拉选项等数据
export const getSelectDdata = (data) => ActionCreator(API_INIT_POST_MODEL, `/api/rcslmodelcascade/propertylist${queryData(data)}`, 'GET')()



//查询个性限额明细 GET /rcslmodelprivate/{id}查询明细
export const  getPersonalDetial = (data)=> ActionCreator(API_GET_PERSONAL_LIMIT,`/api/rcslmodelprivate/${data}`,'GET')();

// 修改个性限额
export const  editPersional = (data)=> ActionCreator(API_UPDATE_PERSONAL_LIMIT,`/api/rcslmodelprivate`,'PUT',data)();
// 删除个性限额
export const  detelePersionalLimit = (data)=> ActionCreator(API_DELETE_PERSIONAL_MODEL,`/api/rcslmodelprivate/${data}`,'DELETE')();
