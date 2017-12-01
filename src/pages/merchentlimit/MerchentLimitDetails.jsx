import React from 'react';
import { Form, Input, Select, Row, Col,Button} from 'antd';


const FormItem = Form.Item;
@Form.create()
export default class MerchentLimitDetails extends React.Component{
    state={}
    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 10},//控制字段大小
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},//控制标签大小
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
            <Form>
                <Row>
                    <Col span={6}>
                        <h3>商户编号:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <h3>商户属性:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="结算账户类型:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="名单类型:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="是否小额双免:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="是否有终端:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="POS商户类型:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="POS秒到等级:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="POS结算周期:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <h3>交易属性:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="卡属性:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="卡介质:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="消费方式:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="接触方式:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="扫码方式:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="扫码方式:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="扫码方式:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>修改限额值:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="单笔(金额):"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="单日(金额):"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="单月(金额):"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="终身(金额):"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="两笔间隔:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="笔数/分钟:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...formItemLayout}
                            label="笔/日:"
                        >
                            {getFieldDecorator('merchantAttribute')(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">关闭</Button>
                </FormItem>
            </Form>
        );
    }
}