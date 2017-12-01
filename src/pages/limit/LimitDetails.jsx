import React from 'react';
import { Input, Layout, Form } from 'antd'
import {Containerization, setTitle} from '../../common/PublicComponent';
const FormItem=Form.Item;
@setTitle('限额详情页')
@Containerization()
@Form.create()
export default class LimitDetails extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
        };

        return (
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="结算账户类型："
                        hasFeedback
                    >
                        { getFieldDecorator('accountType', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="名单类型："
                        hasFeedback
                    >
                        { getFieldDecorator('listType', {
                            rules: [ {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="是否优质商户："
                        hasFeedback
                    >
                        { getFieldDecorator('isExcellentClient', {
                            rules: [ {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="行业大类："
                        hasFeedback
                    >
                        { getFieldDecorator('industryCategory', {
                            rules: [ {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="行业大类："
                        hasFeedback
                    >
                        { getFieldDecorator('industryCategory', {
                            rules: [ {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
               )
    }
}

