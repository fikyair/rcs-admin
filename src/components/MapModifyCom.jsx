import React from 'react';
import {Containerization} from '../common/PublicComponent';
import SelectComs, {Option} from './SelectComs';
import {Form,} from 'antd';
import InputComs from './InputComs'
import '../style/style.less'
import Storage from '../store';
import {getMainPart} from '../actions/limitActions'

const FormItem = Form.Item;
@Form.create()
export default class MapModifyCom extends React.Component {

    render() {
        const {data} = this.props;
        const {getFieldDecorator} = this.props.form
        return (
            <div style={{display: 'inline-block'}}>

                {
                    data.map((v, k) => {
                        return <FormItem key={k} {...this.props}>
                            {
                                getFieldDecorator(v.key, {
                                    initialValue: v.initialValue,
                                    rules: v.rules ? [...v.rules] : [],
                                })(
                                    <InputComs {...v.body} className='input-style' labelName={v.labelName}
                                               placeholder="请选择"/>
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