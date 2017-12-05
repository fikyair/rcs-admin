import React from 'react';
import {Containerization} from '../common/PublicComponent';
import SelectComs, {Option} from './SelectComs';
import {Form,} from 'antd';
import InputComs from './InputComs'
import '../style/style.less'
import Storage from '../store';
import {  getMainPart} from '../actions/limitActions'

const FormItem = Form.Item;
@Form.create({
  onValuesChange:(props, values)=>{
      if(values['limitProperty']){
        Storage.dispatch(getMainPart({mainPartTypeEnum:values['limitProperty']}))
      }
  }
})
export default class MapSelectComs extends React.Component {

    render() {
        const {data} = this.props;
        const {getFieldDecorator} = this.props.form
        return (
            <div style={{display: 'inline-block'}}>

                {
                  Object.keys(data).map((key, k) => {
                    const v = data[key];
                    return <FormItem key={k} {...this.props}>
                            {
                                getFieldDecorator(v.key, {
                                    initialValue: v.initialValue,
                                    rules: v.rules ? [...v.rules] : [],
                                })(
                                    v.type === 'select' ?
                                        <SelectComs labelName={v.labelName} placeholder="请选择" {...v.body}
                                                    className="selects-style">
                                            {
                                                v.optionVal.map((i, j) => {
                                                    return <Option key={j} value={i.value}>{i.name}</Option>
                                                })
                                            }
                                        </SelectComs>
                                        : v.type === 'input' ?
                                        <InputComs {...v.body} className='input-style' labelName={v.labelName} placeholder="请选择"/>
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