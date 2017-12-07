import React from 'react';
import {Containerization} from '../common/PublicComponent';
import SelectComs, {Option} from './SelectComs';
import {Form,Select, Input} from 'antd';
import '../style/style.less'
import Storage from '../store';
import {  getMainPart,} from '../actions/limitActions';
import {  setTemp } from '../actions/index'

const FormItem = Form.Item;

@Containerization(()=>(state=>({formTemp:state.GlobalReducer.formTemp})))
@Form.create({
  onValuesChange:(props, values)=>{
    Storage.dispatch(setTemp({...values}))
    if(values['limitProperty'] || values['limitType'] ){
      const {formTemp} = props;
      const { limitProperty, limitType } = {...formTemp,...values}
      props.data.limitBody = null;
      if(limitProperty && limitType) Storage.dispatch(getMainPart({limitProperty,limitType}))
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