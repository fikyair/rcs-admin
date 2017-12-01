import React from 'react';
import {Input, Button, Form, Row, Col, Card} from 'antd'
import {Containerization, InitComs, setTitle} from '../../common/PublicComponent';
import InputComs from "../../components/InputComs";
const InputGroup = Input.Group;

const FormItem = Form.Item;
@setTitle('限额详情页')
@Containerization()
@Form.create()
export default class LimitDetails extends React.Component {

    initData = {
        merchantAttrData: [{
            labelName: '结算账户类型',
            labelValue: 'accountType',
        },{
            labelName: '名单类型',
            labelValue: 'listType'
        },{
            labelName: '是否优质商户',
            labelValue: 'isExcellentClient',
        },{
            labelName: '行业大类',
            labelValue: 'industryCategory'
        },{
            labelName: '细类',
            labelValue: 'detailCategory',
        },{
            labelName: 'MCC',
            labelValue: 'mcc',
        },{
            labelName: '是否小额双免',
            labelValue: 'isSmallExemption',
        },{
            labelName: '是否有终端',
            labelValue: 'hasTerminal',
        },{
            labelName: 'POS商户类型',
            labelValue: 'posClientType',
        },{
            labelName: 'POS秒到等级',
            labelValue: 'posSecondRank',
        },{
            labelName: 'POS结算周期',
            labelValue: 'posbalanceTime',
        }],
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 7},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        };
        const queryItemLayout = {
            xs: 12,
            sm: 8,
            md: 6,
        }
        return (
            <div style={{margin: '15px 35px '}}>
                <div style={{textAlign: 'center', marginBottom: 10, marginTop: 10, fontSize: 16}} > <b>限额名称：POS商户对私结算限额</b> </div>
                <Form >
                    <Card title="商户属性：" bordered={true}>
                        <Row style={{marginTop: 10}}>
                            {
                                this.initData.merchantAttrData.map((v,k)=>{
                                    return(
                                        <Col  {...queryItemLayout}
                                        >
                                            {
                                               getFieldDecorator(v.labelValue)(
                                                   <InputComs  disabled={true} labelName={v.labelName} style={{width: 120}}/>
                                               )
                                            }
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Card>
                </Form>
                <Form>
                    <Card title="交易属性" border={true}>
                        <Row style={{marginTop: 10}}>
                            <Col span={2}>
                                线下交易：
                            </Col>

                            <Col span={6}>
                                <FormItem
                                    {...formItemLayout}
                                    label="卡属性："
                                >

                                    {getFieldDecorator('carType')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...formItemLayout}
                                    label="卡介质："
                                >

                                    {getFieldDecorator('media')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={5}>
                                <FormItem
                                    {...formItemLayout}
                                    label="消费方式："
                                >

                                    {getFieldDecorator('consumeType')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={5}>
                                <FormItem
                                    {...formItemLayout}
                                    label="接触方式："
                                >

                                    {getFieldDecorator('contactType')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>

                        <Row style={{marginTop: 10}}>
                            <Col span={2}>
                                扫码交易：
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...formItemLayout}
                                    label="扫码类型："
                                >

                                    {getFieldDecorator('scanType')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...formItemLayout}
                                    label="扫码类型："
                                >

                                    {getFieldDecorator('scanType')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={5}>
                                <FormItem
                                    {...formItemLayout}
                                    label="扫码类型："
                                >

                                    {getFieldDecorator('scanType')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                </Form>
                <Form>
                    <Card title={"修改限额值"} bordered={true}>
                    <Row style={{marginTop: 10}}>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单笔(金额)："
                            >

                                {getFieldDecorator('singleAmount')(
                                    <Input addonAfter={'元'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单日(金额)："
                            >

                                {getFieldDecorator('singleAmountDay')(
                                    <Input addonAfter={'元'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单月(金额)："
                            >

                                {getFieldDecorator('singleAmountMonth')(
                                    <Input addonAfter={'元'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="终身(金额)："
                            >

                                {getFieldDecorator('lifeAmountDay')(
                                    <Input addonAfter={'元'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <Row style={{marginTop: 10}}>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="两笔间隔："
                            >

                                {getFieldDecorator('scanType')(
                                    <Input addonAfter={'秒'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="笔数/分钟："
                            >

                                {getFieldDecorator('countByMinute')(
                                    <InputGroup compact >
                                        <Input disabled={true} style={{width: 65}}addonAfter={'笔'} />
                                        <Input style={{width: 20, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="/" disabled />
                                        <Input disabled={true} style={{width: 65, borderLeft: 0}} addonAfter={'分'} />
                                    </InputGroup>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="笔/日"
                            >
                                {getFieldDecorator('minute')(
                                    <Input addonAfter={'笔'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    </Card>
                </Form>
                <div style={{textAlign: 'center', marginBottom: 10, marginTop: 10}}><Button type={"primary"}>关闭</Button></div>
            </div>
        )
    }
    }

