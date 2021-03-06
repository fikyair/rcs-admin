import React from 'react';
import {Containerization} from '../common/PublicComponent';
import SelectComs, {Option} from './SelectComs';
import {Form,Select, Input} from 'antd';
import '../style/style.less'
import Storage from '../store';
import {  getMainPart, getMerchtType,getMultiList } from '../actions/limitActions';
import {  setTemp } from '../actions/index'

const FormItem = Form.Item;


@Form.create({
  onValuesChange:(props, values)=>{
    Storage.dispatch(setTemp({...values}))
    const {formTemp} = Storage.getState().GlobalReducer;

    //限额属性及联逻辑
    if(values['limitProperty'] || values['limitType'] ){
      props.data.limitBodyB = null;
      props.data.limitBodyC = null;
      Storage.dispatch(setTemp({limitBodyC:''}));
      Storage.dispatch(setTemp({limitBodyB:''}));
      const { limitProperty, limitType } = {...formTemp,...values};
      if(limitProperty && limitType) Storage.dispatch(getMainPart({limitProperty,limitType}))
    }

    //限额主体及联逻辑
    if(values['limitProperty'] || values['limitType'] || values['limitBodyB'] || values['limitBodyC']){
      props.data.merchType = null;
      const { limitBodyB:selectsB, limitBodyC:selectsC} = props.data;
      const { limitProperty, limitType, limitBodyB, limitBodyC } = {...formTemp,...values};
      if(limitProperty && limitType && (
          (selectsB&&selectsC&&limitBodyC&&limitBodyB)
          ||(selectsB&&limitBodyB&&!selectsC)
          ||(selectsC&&limitBodyC&&!selectsB)
        )
      ){

        Storage.dispatch(getMerchtType({limitProperty,limitType,mainPartCodeGroup:`${limitBodyB?limitBodyB:""}${limitBodyB&&limitBodyC?'_':''}${limitBodyC?limitBodyC:''}`}));}
    }
    //其他消费及联逻辑
    if(values['P205'] && values['P205'] == 'P2051005'){
      Storage.dispatch(getMultiList('propertyEnums=QR_INMOD&propertyEnums=QR_TYPE'))
        /*
        选择其他消费，隐藏其他 ----->代需求确认
         */
        props.data["P203"] = null
        props.data['P204'] = null
        props.data['P207'] = null
        props.data['P215'] = null
        props.data['P206'] = null
    } else if(values['P205'] && values['P205'] != 'P2051005') {
        /*
       选择其他消费，隐藏其他 ----->代需求确认
        */
      Storage.dispatch(getMultiList('propertyEnums=IS_CLOUD_PAY&propertyEnums=CARD_TYPE&propertyEnums=IC_CARD_FLAG&propertyEnums=NO_SIGN_SECRET'))
      props.data['P209'] = null;
      props.data['P210'] = null;

    }

    //是云闪付及联逻辑
    if(values['P207'] && values['P207'] == 'P2071001'){

      Storage.dispatch(getMultiList('propertyEnums=CLOUD_PAY_SOURCE'))
    } else if(values['P207'] && values['P207'] != 'P2071001'){
      props.data['P206'] = null;
    }

     //POS结算周期选择T+0隐藏POS秒到等级 --->代需求确认
      if(values['P105']  && (values['P105'] === "P1051001" || values['P105'] === "P1051002")) {
          props.data['P122'] =null
      }else if(values['P105']  && values['P105'] !== "P1051001"){
          Storage.dispatch(getMultiList('propertyEnums=POS_MD_LEVEL'))
      }

  }
})
export default class MapSelectComs extends React.Component {

    render() {
        const {data ={},initial = false, selectedAll= false, matchIs=false } = this.props;
        const {getFieldDecorator} = this.props.form
        return (
            <div style={{display: 'inline-block',}} >

                {
                  Object.keys(data).map((key, k) => {
                    const v = data[key];
                    if(!v || Object.keys(v).length == 0) return null;
                    const { optionVal=[] } = v;
                    if(optionVal.length == 0 && v.type === 'select'){
                      return null;
                    }

                    if(selectedAll && optionVal[0].value) {
                        optionVal.unshift({value:'',name:'全部'})
                    }
                      if(!selectedAll && !optionVal[0].value){
                          optionVal.shift()
                      }

                    return <FormItem hasFeedback={true}   label={(<div className="label-class">{v.labelName}</div>)} style={{display: 'inline-block',margin:'10px'}}   key={k} {...this.props}>
                            {
                                getFieldDecorator(v.key, {
                                    rules: matchIs ? [{required:true,message:'请选择'}] : [],
                                })(
                                    v.type === 'select' ?
                                        <Select style={{width:'120px'}} labelName={v.labelName} placeholder={selectedAll?"全部":"请选择"} {...v.body}
                                                    >
                                            {
                                              optionVal.map((i, j) => {
                                                    return <Option key={j} value={i.value}>{i.name}</Option>
                                                })
                                            }
                                        </Select>
                                        : v.type === 'input' ?
                                        <Input style={{width:'120px'}} {...v.body}   placeholder="请选择"/>
                                        : ''
                                )
                            }
                        </FormItem>

                    })

                }
                {this.props.children}
            </div>
        )
    }
}