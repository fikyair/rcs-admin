import React from 'react'
import {Form, Col, Row, Select,Table, Button,Input} from 'antd'
const FormItem = Form.Item
const Option = Select.Option

@Form.create()
export default class LimitHome extends React.Component {


    render(){
        const {getFieldDecorator} = this.props.form;
        //const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {//文字
                xs: {span: 24},//小于768px
                sm: {span: 10},//大于768px
            },
            wrapperCol: {//标签
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const queryItemLayout ={
            xs: 12,
            sm: 8,
            md: 6,
        }
        return (

            <div>
                <Form>
                    <Row>
                        <Col {...queryItemLayout}>
                        <FormItem
                            label="限额类别"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('limitType')(
                                    <Select>
                                        <Option key="12">123</Option>
                                    </Select>
                                )
                            }

                        </FormItem>
                    </Col>
                        <Col {...queryItemLayout}>
                            <FormItem
                                label="限额属性"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('limitProperty')(
                                        <Select>
                                            <Option key="12">123</Option>
                                        </Select>
                                    )
                                }

                            </FormItem>
                        </Col>
                        <Col {...queryItemLayout}>
                            <FormItem
                                label="限额主体"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('limitMain')(
                                        <Select>
                                            <Option key="12">123</Option>
                                        </Select>
                                    )
                                }

                            </FormItem>
                        </Col>
                        <Col {...queryItemLayout}>
                            <FormItem
                                label="商户类型"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('merchentType')(
                                        <Select>
                                            <Option key="12">123</Option>
                                        </Select>
                                    )
                                }

                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col {...queryItemLayout}>
                            <FormItem
                                label="限额状态"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('limitStatus')(
                                        <Select>
                                            <Option key="12">123</Option>
                                        </Select>
                                    )
                                }

                            </FormItem>
                        </Col>
                        <Col {...queryItemLayout}>
                            <FormItem
                                label="商户编号"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('merchentCode')(
                                        <Input />
                                    )
                                }

                            </FormItem>
                        </Col>
                        <Button type="primary" style={{marginLeft: '30px'}}>查询</Button>

                    </Row>

                </Form>



            </div>
        )
    }
}