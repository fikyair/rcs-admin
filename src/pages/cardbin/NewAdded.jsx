import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import {FetchAPI} from '../../utils/fetch-middleware';

const Option = Select.Option;
const FormItem = Form.Item;


@Form.create()
export default class NewAdded extends React.Component{
    state={
        confirmDirty: false,
        autoCompleteResult: [],
    };
    submit() {
        console.log('222')
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let data = this.props.form.getFieldsValue();
                console.log('form数据', data);
                FetchAPI(`/rcslmainpart`, 'post', data).then((data) => {
                    console.log(data)
                })
            }
        });

    }
    render(){
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };

        return(
            <div>
                <Form style={{ marginTop:70 }}>
                    <FormItem
                        {...formItemLayout}
                        label="主体编码:"
                        hasFeedback
                    >
                        {getFieldDecorator('mainPartCode', {
                            rules: [{
                                required: true, message: '请输入主体编码!',
                            }],
                        })(
                            <Input/>
                        )}

                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="主体名称:"
                        hasFeedback
                    >
                        {getFieldDecorator('mainPartName', {
                            rules: [{
                                required: true, message: '请输入主体名称!',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="主体类型:"
                        hasFeedback
                    >
                        {getFieldDecorator('type', {
                            rules: [{
                                required: true, message: '请选择主体类型!',
                            }],
                        })(
                            <Select style={{width:150}}>
                                <Option value="1">B</Option>
                                <Option value="2">C</Option>
                            </Select>
                        )}

                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="状态:"
                        hasFeedback
                    >
                        {getFieldDecorator('status', {
                            rules: [{
                                required: true, message: '请选择状态!',
                            }],
                        })(
                            <Select style={{width:150}}>
                                <Option value="0">无效</Option>
                                <Option value="1">有效</Option>
                            </Select>
                        )}

                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="创建人ID:"
                        hasFeedback
                    >
                        {getFieldDecorator('createUserId', {
                            rules: [{
                                required: false, message: '请输入创建人ID!',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="创建人姓名:"
                        hasFeedback
                    >
                        {getFieldDecorator('createUserName', {
                            rules: [{
                                required: false, message: '请输入创建人姓名!',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="修改人ID:"
                        hasFeedback
                    >
                        {getFieldDecorator('updateUserId', {
                            rules: [{
                                required: false, message: '请输入修改人ID!',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="修改人姓名:"
                        hasFeedback
                    >
                        {getFieldDecorator('updateUserName', {
                            rules: [{
                                required: false, message: '请输入修改人姓名!',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={() => {
                            this.submit()
                        }}>新增</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}