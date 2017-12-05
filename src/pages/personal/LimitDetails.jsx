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
        }, {
            labelName: '名单类型',
            labelValue: 'listType'
        }, {
            labelName: '是否优质商户',
            labelValue: 'isExcellentClient',
        }, {
            labelName: '行业大类',
            labelValue: 'industryCategory'
        }, {
            labelName: '细类',
            labelValue: 'detailCategory',
        }, {
            labelName: 'MCC',
            labelValue: 'mcc',
        }, {
            labelName: '是否小额双免',
            labelValue: 'isSmallExemption',
        }, {
            labelName: '是否有终端',
            labelValue: 'hasTerminal',
        }, {
            labelName: 'POS商户类型',
            labelValue: 'posClientType',
        }, {
            labelName: 'POS秒到等级',
            labelValue: 'posSecondRank',
        }, {
            labelName: 'POS结算周期',
            labelValue: 'posbalanceTime',
        }],
        transactionAttrData: [{
            labelName: '卡属性',
            labelValue: 'carType',
        }, {
            labelName: '卡介质',
            labelValue: 'media'
        }, {
            labelName: '消费方式',
            labelValue: 'consumeType'
        }, {
            labelName: '接触方式',
            labelValue: 'contactType'
        }],
        scanData: [{
            labelName: '扫码类型',
            labelValue: 'scanType'
        }],
        modifyLimitData: [{
            labelName: '单笔',
            labelValue: 'sigle',
            addonBefore: "金额",
            addonAfter: "元"
        },
            {
                labelName: '单日',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元"
            }, {
                labelName: '单月',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元"
            },
            {
                labelName: '终身',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元"
            }, {
                labelName: '两笔间隔',
                labelValue: 'sigle',
                addonAfter: "元"
            },
            {
                labelName: '笔／日',
                labelValue: 'sigle',
                addonAfter: "元"
            }

        ]
    }

    componentWillMount() {
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
            xs: 12, //手机
            sm: 7,   //平板
            md: 5,   //pc
        };
        const tailItemLayout = {
            xs: 24,
            sm: 24,    //平板的时候占一行，因为一行有24格
            md: 1       //在PC上的时候分一格  ，剩下的23格input组件来分
        };
        return (
            <div>
                <div style={{textAlign:'center',marginBottom: 10, marginTop: 10, fontSize: 16}}> {
                    <b>商户限额详情</b>
                } </div>
                <div style={{marginBottom: 10, marginTop: 10, fontSize: 16}}>
                     <b>商户编号：</b>
                 </div>
                <Form>
                    <Card noHovering={true} title="商户属性：" bordered={true}>
                        <Row style={{marginTop: 10}}>
                            {
                                this.initData.merchantAttrData.map((v, k) => {
                                    return (
                                        <Col  {...queryItemLayout}
                                              key={k}>
                                            {
                                                getFieldDecorator(v.labelValue)(
                                                    <InputComs disabled={true} labelName={v.labelName}
                                                               style={{width: 120}}/>
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
                    <Card title="交易属性" bordered={true}>
                        <Row style={{marginTop: 10}}>
                            <Col {...tailItemLayout}
                            >
                                <span style={{marginTop: 16, display: 'inline-block'}}> 线下交易:</span>
                            </Col>
                            <Col>
                                {
                                    this.initData.transactionAttrData.map((v, k) => {

                                        return (
                                            <Col {...queryItemLayout}
                                                 key={k}>
                                                {
                                                    getFieldDecorator(v.labelValue)(
                                                        <InputComs disabled={true} labelName={v.labelName}
                                                                   style={{width: 120}}/>
                                                    )
                                                }
                                            </Col>

                                        )
                                    })
                                }

                            </Col>
                        </Row>
                        <Row>
                            <Col {...tailItemLayout}
                            >
                                <span style={{marginTop: 16, display: 'inline-block'}}> 扫码交易:</span>
                            </Col>
                            <Col>
                                {
                                    this.initData.scanData.map((v, k) => {

                                        return (
                                            <Col {...queryItemLayout}
                                                 key={k}>
                                                {
                                                    getFieldDecorator(v.labelValue)(
                                                        <InputComs disabled={true} labelName={v.labelName}
                                                                   style={{width: 120}}/>
                                                    )
                                                }
                                            </Col>

                                        )
                                    })
                                }

                            </Col>
                        </Row>
                    </Card>
                </Form>
                <Form>
                    <Card title={"修改限额值"} bordered={true}>
                        <Row style={{marginTop: 10}}>
                            {
                                this.initData.modifyLimitData.map((v, k) => {

                                        return (
                                            <Col {...queryItemLayout}
                                                 key={k}>
                                                {
                                                    getFieldDecorator(v.labelValue)(
                                                        <InputComs disabled={true} labelName={v.labelName}
                                                                   style={{width: 120}}
                                                                   addonBefore={v.addonBefore} addonAfter={v.addonAfter}/>
                                                    )
                                                }
                                            </Col>
                                        )
                                    }
                                )
                            }
                            <Col {...queryItemLayout}>
                                <Row style={{marginTop: '10px'}}>
                                    <Col span={7}>
                                        <span style={{marginTop: '5px', display: 'inline-block'}}>每笔／分钟:</span>
                                    </Col>
                                    <Col span={16}>
                                        {
                                            getFieldDecorator('limitType')(
                                                <InputGroup>
                                                    <Input disabled={true} style={{width: 60, textAlign: 'center'}}
                                                    />
                                                    <Input style={{
                                                        width: 24,
                                                        borderLeft: 0,
                                                        pointerEvents: 'none',
                                                        backgroundColor: '#fff'
                                                    }} placeholder="/" disabled/>
                                                    <Input disabled={true}
                                                           style={{width: 60, textAlign: 'center', borderLeft: 0}}
                                                    />
                                                </InputGroup>
                                            )
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Form>
                <div style={{textAlign: 'center', marginBottom: 10, marginTop: 10}}><Button type={"primary"}>关闭</Button>
                </div>
            </div>
        )
    }
}

