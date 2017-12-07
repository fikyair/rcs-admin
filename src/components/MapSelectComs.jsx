import React from 'react';
import {Containerization} from '../common/PublicComponent';
import SelectComs, {Option} from './SelectComs';
import {Form,Select, Input} from 'antd';
import '../style/style.less'
import Storage from '../store';
import {  getMainPart, getMerchtType } from '../actions/limitActions';
import {  setTemp } from '../actions/index'

const FormItem = Form.Item;


@Form.create({
  onValuesChange:(props, values)=>{
    Storage.dispatch(setTemp({...values}))
    const {formTemp} = Storage.getState().GlobalReducer;

    if(values['limitProperty'] || values['limitType'] ){
      props.data.limitBodyB = null;
      props.data.limitBodyC = null;
      const { limitProperty, limitType } = {...formTemp,...values};
      if(limitProperty && limitType) Storage.dispatch(getMainPart({limitProperty,limitType}))
    }
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
        debugger;
        Storage.dispatch(getMerchtType({limitProperty,limitType,mainPartCodeGroup:`${limitBodyB?`${limitBodyB}_`:''}${limitBodyC?limitBodyC:''}`}));}
    }

  }
})
export default class MapSelectComs extends React.Component {

    render() {
        const {data,initial = false, selectedAll= false, matchIs=false } = this.props;
        const {getFieldDecorator} = this.props.form
        return (
            <div style={{display: 'inline-block',}} >

                {
                  Object.keys(data).map((key, k) => {
                    const v = data[key];
                    if(!v || Object.keys(v).length == 0) return null;
                    const optionVal = v.optionVal;

                    return <FormItem hasFeedback={true}   label={(<div className="label-class">{v.labelName}</div>)} style={{display: 'inline-block',margin:'10px'}}   key={k} {...this.props}>
                            {
                                getFieldDecorator(v.key, {
                                    rules: matchIs ? [{required:true,message:'请勾选'}] : [],
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