import React from 'react';
import { Form, Input, Select, Row, Col,Button, Card} from 'antd';

const InputGroup = Input.Group;
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
                <Card bordered={true}>
                    <Row>
                        <Col span={3}>
                            <FormItem
                                {...formItemLayout}
                                style={{fontSize:15}}
                            >
                                商户编号:
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input style={{width:200, height:40}} disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
                <br/><br/>
                <Card title="商户属性:" bordered={true}>
                    <Row>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="结算账户类型:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="名单类型:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
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
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="是否有终端:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="POS商户类型:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
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
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="POS结算周期:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
                <br/><br/>
                <Card title="交易属性:" bordered={true}>
                    <Row>
                        <Col span={1}>
                            <strong>线下交易</strong>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="卡属性:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="卡介质:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="消费方式:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={5}>
                            <FormItem
                                {...formItemLayout}
                                label="接触方式:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={1}>
                            <strong>扫码交易</strong>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="扫码方式:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="扫码方式:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="扫码方式:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
                <br/><br/>
                <Card title="修改限额值:" bordered={true}>
                    <Row>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单笔(金额):"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input addonAfter={"元"} disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单日(金额):"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input addonAfter={"元"} disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单月(金额):"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input addonAfter={"元"} disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="终身(金额):"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input addonAfter={"元"} disabled={"true"} />
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
                                    <Input addonAfter={"秒"} disabled={"true"} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="笔数/分钟:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                    <Input addonCenter="/" disabled={"true"}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="笔/日:"
                            >
                                {getFieldDecorator('merchantAttribute')(
                                   // <Input addonAfter={"笔"} disabled={"true"} />
                                    <InputGroup compact>
                                        <Input style={{ width: '45%' }} addonAfter={"笔"} />
                                        &nbsp;&nbsp;/&nbsp;&nbsp;
                                        <Input style={{ width: '45%' }}  addonAfter={"分"} />
                                    </InputGroup>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
                <br/><br/>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{marginLeft:280}}>关闭</Button>
                </FormItem>
            </Form>
        );
    }
}