import React from 'react'
import {Form, Col, Row, Select, Table, Button, Input, Layout, Tabs, Card} from 'antd'
import {Link} from 'react-router-dom'
import {InitComs} from "../../common/PublicComponent";
import SelectComs, {Option} from '../../components/SelectComs';
import InputComs from '../../components/InputComs';

const FormItem = Form.Item
const InputGroup = Input.Group;


@Form.create()
export default class MerchentLimitModify extends React.Component {

    state = {
        data: {},
    }


    componentWillMount() {
        let data = {
            settleType: 1,
            listType: 2,

        }
        this.setState({data: data})
    }

    initData = {
        merchantData: [
            {
                labelName: '结算账户类型',
                labelValue: 'settleType',
                initialValue: '1',
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
        transactionData: [
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
            },
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
                xs: {span: 24},//小于768px
                sm: {span: 10},//大于768px
            },
            wrapperCol: {//标签
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const queryItemLayout = {
            xs: 12,
            sm: 8,
            md: 6,
        }
        return (
            <div>

                <h1 style={{textAlign: 'center', marginBottom: 16}}>商户修改限额</h1>

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
                                                        <SelectComs key={k} labelName={v.labelName} style={{width: 120}}>
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

                        </Row>

                    </Card>
                    <Card title="选择交易属性：" style={cardStyle}>
                        <Row>


                            {
                                this.initData.transactionData.map((v, k) => {

                                        return (
                                            <Col {...queryItemLayout}>
                                                {
                                                    getFieldDecorator(v.labelValue)(
                                                        <SelectComs key={k} labelName={v.labelName} style={{width: 120}}>
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

                        </Row>

                    </Card>
                    <Card title="添加限额值" style={cardStyle}>

                        <Row>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="单笔"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input style={{width: 120}} addonBefore="金额" addonAfter="元"/>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="单日"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input style={{width: 120}} addonBefore="金额" addonAfter="元"/>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="单月"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input style={{width: 120}} addonBefore="金额" addonAfter="元"/>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="年"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input style={{width: 120}} addonBefore="金额" addonAfter="元"/>
                                        )
                                    }

                                </FormItem>
                            </Col>
                        </Row>

                        <Row>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="终身"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Input style={{width: 120}} addonBefore="金额" addonAfter="元"/>
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
                                            <Input style={{width: 120}} addonAfter="元"/>
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
                                            <InputGroup>
                                                <Input style={{width: 100, textAlign: 'center'}} placeholder="Minimum"/>
                                                <Input style={{
                                                    width: 24,
                                                    borderLeft: 0,
                                                    pointerEvents: 'none',
                                                    backgroundColor: '#fff'
                                                }} placeholder="/" disabled/>
                                                <Input style={{width: 100, textAlign: 'center', borderLeft: 0}}
                                                       placeholder="Maximum"/>
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
                                            <Input style={{width: 120}} addonAfter="元"/>
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