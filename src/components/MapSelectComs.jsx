import React from 'react';
import {Containerization} from '../common/PublicComponent';
import SelectComs, {Option} from './SelectComs';
import {Form,} from 'antd';
import InputComs from './InputComs'
import '../style/style.less'


const FormItem = Form.Item;
@Form.create()
export default class MapSelectComs extends React.Component {

    render() {
        const {data} = this.props;
        const {getFieldDecorator} = this.props.form
        return (
            <div>

                {
                    data.map((v, k) => {
                        return <FormItem key={k} {...this.props}>
                            {
                                getFieldDecorator(v.key, {
                                    rules: v.rules ? [...v.rules] : [],
                                })(
                                    v.type === 'select' ?
                                        <SelectComs labelName={v.labelName} placeholder="请选择"
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
            </div>
        )
    }
}