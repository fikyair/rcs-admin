import React from 'react';
import {Containerization} from '../common/PublicComponent';
import SelectComs, {Option} from './SelectComs';
import {Form, Input} from 'antd';
import InputComs from './InputComs'
import '../style/style.less'
import Storage from '../store';
import {getMainPart} from '../actions/limitActions'

const FormItem = Form.Item;
@Form.create()
export default class MapModifyCom extends React.Component {

    render() {
        const {data = []} = this.props;
        const {getFieldDecorator} = this.props.form
        return (
            <div style={{display: 'inline-block'}}>

                {
                    data.map((v, k) => {
                        return <FormItem key={k} {...this.props} label={(<div className="label-class">{v.labelName}</div>)} style={{display: 'inline-block',margin:'10px'}}>
                            {
                                getFieldDecorator(v.key, {
                                    initialValue: v.initialValue != -1? v.initialValue:'',
                                    rules: v.rules ? [...v.rules] : [],
                                })(
                                    <Input disabled={v.disabled} {...v.body} className='input-style'
                                               placeholder="请输入"/>
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