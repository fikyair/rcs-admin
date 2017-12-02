import React from 'react'
import {Form, Col, Row, Select, Table, Button, Input, Layout, Tabs, Card} from 'antd'
import {Link} from 'react-router-dom'
import {InitComs} from "../../common/PublicComponent";
import SelectComs, {Option} from '../../components/SelectComs';
import InputComs from '../../components/InputComs';

const FormItem = Form.Item
const InputGroup = Input.Group;


@Form.create()
export default class MerchentLimitAdd extends React.Component {

    state = {
        data: {},
    }


    componentWillMount() {
        let data = {
            settleType: '1',
            listType: 2,

        }
        this.setInitValue(data)
    }

    // 初始化表单数据
    setInitValue = (data) => {
        this.initData.merchantData[0].initialValue = data.settleType
    }

    initData = {
        merchantData: [
            {
                labelName: '结算账户类型',
                labelValue: 'settleType',
                optionVal: [
                    {value: '1', name: '交易'},
                    {value: '2', name: '结算'},
                    {value: '3', name: '全部'},
                ]
            },
            {
                labelName: '名单类型',
                labelValue: 'listType',
                optionVal: [
                    {value: '1', name: '账户结算类型'},
                    {value: '2', name: '名单类型'},
                    {value: '3', name: '行业大类'},
                    {value: '4', name: '全部'},
                ]
            }, {
                labelName: '是否小额双免',
                labelValue: 'bothFree',
                optionVal: [
                    {value: '1', name: '持卡人银行'},
                    {value: '2', name: '用户openID'},
                    {value: '7', name: '全部'},
                ]
            }, {
                labelName: '是否有终端',
                labelValue: 'isTerminal',
                optionVal: [
                    {value: '1', name: '持卡人银行'},
                    {value: '2', name: '用户openID'},
                    {value: '4', name: '全部'},
                ]
            },
            {
                labelName: 'POS商户类型',
                labelValue: 'POSMerchantType',
                optionVal: [
                    {value: '1', name: '持卡人银行'},
                    {value: '2', name: '用户openID'},
                    {value: '3', name: '全部'},
                ]
            }, {
                labelName: 'POS秒到等级',
                labelValue: 'POSSecondsLevel',
                optionVal: [
                    {value: '1', name: '持卡人银行'},
                    {value: '2', name: '用户openID'},
                    {value: '4', name: '全部'},
                ]
            },
            {
                labelName: 'POS结算周期',
                labelValue: 'POSBillingCycle',
                optionVal: [
                    {value: '1', name: '持卡人银行'},
                    {value: '2', name: '用户openID'},
                    {value: '3', name: '全部'},
                ]
            }
        ],
        lineTransaction: [
            {
                labelName: '卡属性',
                labelValue: 'settleType',
                optionVal: [
                    {value: '1', name: '交易'},
                    {value: '2', name: '结算'},
                    {value: '3', name: '全部'},
                ]
            },
            {
                labelName: '卡介质',
                labelValue: 'listType',
                optionVal: [
                    {value: '1', name: '账户结算类型'},
                    {value: '2', name: '名单类型'},
                    {value: '3', name: '行业大类'},
                    {value: '4', name: '全部'},
                ]
            }, {
                labelName: '消费方式',
                labelValue: 'bothFree',
                optionVal: [
                    {value: '1', name: '持卡人银行'},
                    {value: '2', name: '用户openID'},
                    {value: '7', name: '全部'},
                ]
            }, {
                labelName: '接触方式',
                labelValue: 'isTerminal',
                optionVal: [
                    {value: '1', name: '持卡人银行'},
                    {value: '2', name: '用户openID'},
                    {value: '4', name: '全部'},
                ]
            },],
        scanTransaction: [
            {
                labelName: '扫码类型',
                labelValue: 'POSMerchantType',
                optionVal: [
                    {value: '1', name: '持卡人银行'},
                    {value: '2', name: '用户openID'},
                    {value: '3', name: '全部'},
                ]
            }
        ],
        limitData: [
            {
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
                labelName: '单日',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元"
            }, {
                labelName: '年',
                labelValue: 'year',
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
        ],
        inputsData: [
            {
                labelName: '商户编号',
                labelValue: 'merchantCode',

            },
        ],


    }


    render() {
        const {getFieldDecorator} = this.props.form;
        const cardStyle = {
            marginBottom: 16,
        };
        const formItemLayout = {
            labelCol: {//文字
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {//标签
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const queryItemLayout = {
            xs: 12,
            sm: 7,
            md: 5,
        }
        const tailItemLayout = {
            xs: 24,
            sm: 24,
            md: 1
        }
        return (
            <div>

                <h1 style={{textAlign: 'center', marginBottom: 16}}>商户限额详情</h1>

                <Form>
                    <Card style={cardStyle}>
                        <Row>
                            <Col {...queryItemLayout}>
                                {
                                    getFieldDecorator('settleType')(
                                        <InputComs labelName="商户编号" style={{width: 200}} disabled={true}/>
                                    )
                                }
                            </Col>
                        </Row>
                    </Card>
                    <Card title="选择商户属性" style={cardStyle}>
                        <Row>

                            {
                                this.initData.merchantData.map((v, k) => {
                                        return (
                                            <Col {...queryItemLayout}>
                                                {
                                                    getFieldDecorator(v.labelValue, {
                                                        initialValue: v.initialValue
                                                    })(
                                                        <SelectComs disabled={true} key={k} labelName={v.labelName} style={{width: 120}}>
                                                            {
                                                                v.optionVal.map((i, j) => {
                                                                    return <Option key={j} value={i.value}> {i.name}</Option>
                                                                })
                                                            }
                                                        </SelectComs>
                                                    )
                                                }
                                            </Col>
                                        )
                                    }
                                )
                            }

                        </Row>

                    </Card>
                    <Card title="选择交易属性：" style={cardStyle}>
                        <Row>
                            <Row>
                                <Col {...tailItemLayout} >
                                    <span style={{marginTop: '16px', display: 'inline-block'}}>线下交易：</span>
                                </Col>
                                <Col>
                                    {
                                        this.initData.lineTransaction.map((v, k) => {

                                                return (
                                                    <Col {...queryItemLayout}>
                                                        {
                                                            getFieldDecorator(v.labelValue)(
                                                                <SelectComs disabled={true} key={k} labelName={v.labelName}
                                                                            style={{width: 120}}>
                                                                    {
                                                                        v.optionVal.map((i, j) => {
                                                                            return <Option key={j} value={i.value}>{i.name}</Option>
                                                                        })
                                                                    }
                                                                </SelectComs>
                                                            )
                                                        }
                                                    </Col>
                                                )
                                            }
                                        )
                                    }
                                </Col>
                            </Row>

                            <Row>
                                <Col {...tailItemLayout} >
                                    <span style={{marginTop: '16px', display: 'inline-block'}}>扫码交易：</span>
                                </Col>
                                <Col>
                                    {
                                        this.initData.scanTransaction.map((v, k) => {

                                                return (
                                                    <Col {...queryItemLayout}>
                                                        {
                                                            getFieldDecorator(v.labelValue)(
                                                                <SelectComs disabled={true} key={k} labelName={v.labelName}
                                                                            style={{width: 120}}>
                                                                    {
                                                                        v.optionVal.map((i, j) => {
                                                                            return <Option key={j}
                                                                                           value={i.value}>{i.name}</Option>
                                                                        })
                                                                    }
                                                                </SelectComs>
                                                            )
                                                        }
                                                    </Col>
                                                )
                                            }
                                        )
                                    }
                                </Col>
                            </Row>
                        </Row>


                    </Card>
                    <Card title="添加限额值" style={cardStyle}>

                        <Row>


                            {
                                this.initData.limitData.map((v, k) => {

                                        return (
                                            <Col {...queryItemLayout}>
                                                {
                                                    getFieldDecorator(v.labelValue)(
                                                        <InputComs disabled={true} labelName={v.labelName} style={{width: 120}}
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
                                                <InputGroup disabled={true}>
                                                    <Input disabled={true} style={{width: 60, textAlign: 'center'}}
                                                           placeholder="Minimum"/>
                                                    <Input disabled={true} style={{
                                                        width: 24,
                                                        borderLeft: 0,
                                                        pointerEvents: 'none',
                                                        backgroundColor: '#fff'
                                                    }} placeholder="/" disabled/>
                                                    <Input disabled={true} style={{width: 60, textAlign: 'center', borderLeft: 0}}
                                                           placeholder="Maximum"/>
                                                </InputGroup>
                                            )
                                        }
                                    </Col>
                                </Row>


                            </Col>

                        </Row>

                        <Row>
                        </Row>


                    </Card>
                </Form>
                <Row style={{textAlign: 'center'}}>
                    <FormItem>
                        <Button type="primary" ghost htmlType="submit">关闭</Button>
                    </FormItem>
                </Row>
            </div>

        )
    }
}