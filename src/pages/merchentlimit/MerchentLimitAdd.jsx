import React from 'react'
import {Form, Col, Row, Select,Table, Button,Input, Layout, Tabs,Card} from 'antd'
import {Link} from 'react-router-dom'
import {InitComs} from "../../common/PublicComponent";
const FormItem = Form.Item
const Option = Select.Option
const TabPane = Tabs.TabPane;
const InputGroup = Input.Group;


@Form.create()
export default class MerchentLimitAdd extends React.Component {

    state = {

    }



    componentWillMount() {

    }


    render(){
        const {getFieldDecorator} = this.props.form;
        const cardStyle = {
            marginBottom: 16,
        };
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

                <h1 style={{textAlign: 'center', marginBottom: 16}}>{this.props.location.state.title}</h1>

                <Form>
                <Card title="选择商户属性" style={cardStyle}>
                        <Row>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="结算账户类型"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('settleType')(
                                            <Select>
                                                <Option key="12">123</Option>
                                            </Select>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="名单类型"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('listType')(
                                            <Select>
                                                <Option key="12">123</Option>
                                            </Select>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="是否小额双免"
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
                                    label="是否有终端"
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
                                    label="POS商户类型"
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
                                    label="POS秒到等级"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('merchentCode')(
                                            <Input />
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="POS结算周期"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('merchentCode')(
                                            <Input />
                                        )
                                    }

                                </FormItem>
                            </Col>

                        </Row>

                </Card>
                <Card title="选择交易属性：" style={cardStyle}>
                        <Row>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="卡属性"
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
                                    label="卡介质"
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
                                    label="消费方式"
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
                                    label="接触方式"
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
                                    label="扫码类型"
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

                        </Row>

                </Card>
                <Card title="添加限额值" style={cardStyle}>

                        <Row>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="单笔（金额）"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                           <Input addonAfter="元"/>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="单日（金额）"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input addonAfter="元"/>

                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="单月（金额）"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input addonAfter="元"/>

                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="年（金额）"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input addonAfter="元"/>

                                        )
                                    }

                                </FormItem>
                            </Col>
                        </Row>

                        <Row>
                                                     <Col {...queryItemLayout}>
                                <FormItem
                                    label="终身（金额）"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input addonAfter="元"/>

                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="两笔间隔"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input addonAfter="元"/>

                                        )
                                    }

                                </FormItem>
                            </Col>


                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="笔数／分钟"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                        <InputGroup >
                                        <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
                                        <Input style={{ width: 24, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="/" disabled />
                                        <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
                                        </InputGroup>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="笔／日"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input addonAfter="元"/>

                                        )
                                    }

                                </FormItem>
                            </Col>

                        </Row>


                </Card>
                </Form>
                <Row style={{textAlign: 'center'}}>
                <FormItem>
                    <Button type="primary" ghost htmlType="submit">取消</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="danger" ghost htmlType="submit">保存</Button>
                </FormItem>
                </Row>
            </div>

        )
    }
}