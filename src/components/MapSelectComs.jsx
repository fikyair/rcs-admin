import React from 'react';
import {Containerization} from '../common/PublicComponent';
import SelectComs, {Option} from './SelectComs';
import {Form,Select, Input} from 'antd';
import '../style/style.less'
import Storage from '../store';
import {  getMainPart} from '../actions/limitActions'

const FormItem = Form.Item;
@Form.create({
  onValuesChange:(props, values)=>{
      if(values['limitProperty']){
        props.data.limitBody = null;
        Storage.dispatch(getMainPart({mainPartTypeEnum:values['limitProperty']}))
      }
  }
})
export default class MapSelectComs extends React.Component {

    render() {
        const {data,initial = false, selectedAll= false, matchIs=false } = this.props;
        const {getFieldDecorator} = this.props.form
        return (
            <div style={{display: 'inline-block',}}>

                {
                  Object.keys(data).map((key, k) => {
                    const v = data[key];
                    if(!v || Object.keys(v).length == 0) return null;
                    const option = initial?{initialValue:'all'} :{};
                    const optionVal = selectedAll?v.optionVal.concat([{
                      value:'all',
                      name:'全部'
                    }]):v.optionVal;

                    return <FormItem  label={(<div className="label-class">{v.labelName}</div>)} style={{display: 'inline-block',margin:'10px'}}   key={k} {...this.props}>
                            {
                                getFieldDecorator(v.key, {
                                    ...option,
                                    rules: matchIs ? [{required:true,message:'请勾选'}] : [],
                                  help:'11111',
                                })(
                                    v.type === 'select' ?
                                        <Select style={{width:'120px'}} labelName={v.labelName} placeholder="请选择" {...v.body}
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