import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import SelectComs, {Option} from '../../components/SelectComs';
import {setTitle, Containerization} from '../../common/PublicComponent';
const InputGroup = Input.Group;
import InputComs from "../../components/InputComs";


const FormItem = Form.Item;

@setTitle('限额修改页')
@Containerization()
@Form.create()
export default class LimitUpdate extends React.Component {

    state = {
        isMerchant: false,
    }


    mockData = {
        merchentSelects: [
            {
                labelName: '结算账户类型',
                optionVal: [
                    {value: '1', name: '对公'},
                    {value: '2', name: '对私-法人'},
                    {value: '3', name: '对私'},
                ],
                key: 'accountType',
            }, {
                labelName: '名单类型',
                optionVal: [
                    {value: '1', name: '白名单类型'},
                    {value: '2', name: '非白名单类型'},
                ],
                key: 'listType',
            }, {
                labelName: '是否优质商户',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'isPerfect',
            }, {
                labelName: '行业大类',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'category',
            }, {
                labelName: '细类',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'xcategory',
            }, {
                labelName: 'MCC',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'mcc',
            }, {
                labelName: '是否小额双免',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'doublefree',
            }, {
                labelName: '是否有终端',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'isTermial',
            }, {
                labelName: 'POS商户类型',
                optionVal: [
                    {value: '1', name: '小微一'},
                    {value: '2', name: '小微二'},
                ],
                key: 'postType',
            }, {
                labelName: 'POS秒到等级',
                optionVal: [
                    {value: '1', name: '1'},
                    {value: '2', name: '2'},
                ],
                key: 'postLevel',
            }
        ],
        tradeSelects: {
            offline: [
                {
                    labelName: '卡属性',
                    optionVal: [
                        {value: '1', name: '贷记卡'},
                        {value: '2', name: '借记卡'},
                        {value: '3', name: '准贷记卡'},
                    ],
                    key: 'cardProperty',
                }, {
                    labelName: '卡介质',
                    optionVal: [
                        {value: '1', name: 'IC卡'},
                        {value: '2', name: '非IC卡'},
                    ],
                    key: 'cardLand',
                }, {
                    labelName: '消费方式',
                    optionVal: [
                        {value: '1', name: '预授权'},
                        {value: '2', name: '预授权完成'},
                        {value: '3', name: '消费'},
                    ],
                    key: 'salesMethod',
                }, {
                    labelName: '接触方式',
                    optionVal: [
                        {value: '1', name: '挥卡'},
                        {value: '2', name: '云闪付'},
                    ],
                    key: 'touchMethod',
                },
            ],
            online: [
                {
                    labelName: '扫码终端',
                    optionVal: [
                        {value: '1', name: '台卡'},
                        {value: '2', name: 'APP'},
                    ],
                    key: 'qrTerminal',
                }, {
                    labelName: '扫码支付渠道',
                    optionVal: [
                        {value: '1', name: '支付宝'},
                        {value: '2', name: '微信'},
                        {value: '3', name: '百度'},
                        {value: '4', name: '银联二维码'},
                        {value: '5', name: 'QQ'},
                        {value: '6', name: '京东'},
                        {value: '7', name: '其他'},
                    ],
                    key: 'qrChannel',
                }, {
                    labelName: '扫码类型',
                    optionVal: [
                        {value: '1', name: '二维码-主扫'},
                        {value: '2', name: '二维码-被扫'},
                    ],
                    key: 'qrType',
                },
            ],
        },
        inputLimit: [
            {
                labelName: '单日',
                key: 'singleDay',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元",
            }, {
                labelName: '单月',
                key: 'singleMonth',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元",
            }, {
                labelName: '年',
                key: 'singleYear',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元",
            }, {
                labelName: '终身',
                key: 'lifetime',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元",
            }, {
                labelName: '两笔间隔',
                key: 'interval',
                labelValue: 'sigle',
                addonAfter: "元"
            }, {
                labelName: '笔/日',
                key: 'oneTime',
                labelValue: 'sigle',
                addonAfter: "元"
            }
        ]

    }

    componentWillMount() {
        if (this.props.match.path.indexOf('merchant') > 0) {
            this.setState({isMerchant: true})
        }
    }

    handleSubmit = () => {
        const {getFieldsValue} = this.props.form;
        const val = getFieldsValue();
        // TODO 提交表单
        debugger;
    }

    render() {
        const {
            merchentSelects = this.mockData.merchentSelects,
            online = this.mockData.tradeSelects.online,
            offline = this.mockData.tradeSelects.offline,
            inputLimit = this.mockData.inputLimit,
            match
        } = this.props;
        const {type, id} = match.params
        const {getFieldDecorator} = this.props.form;
        const queryItemLayout = {
            xs: 12,
            sm: 7,
            md: 5,
        };
        return (
            <Form className="container-body"  layout="inline" onSubmit={this.handleSubmit}>
                <h1>836商户限额</h1>
                <Card title="选择商户属性"
                      style={{marginBottom: 6}}
                >
                    {
                        merchentSelects.map((v, k) => {
                            return <FormItem key={k}>
                                {getFieldDecorator(v.key, {
                                    rules: [],
                                    initialValue: v.optionVal[0].value

                                })(
                                    <SelectComs disabled placeholder="请选择" labelName={v.labelName} style={{width: 120}}>
                                        {
                                            v.optionVal.map((i, j) => {
                                                return <Option key={j} value={i.value}>{i.name}</Option>
                                            })
                                        }
                                    </SelectComs>
                                )}
                            </FormItem>
                        })
                    }
                </Card>
                <Card title="选择交易属性"
                      style={{marginBottom: 6}}
                >
                    <div>
                        <FormItem style={{margin: '10px'}}>线下交易:</FormItem>

                        {
                            offline.map((v, k) => {
                                return <FormItem key={k}>
                                    {getFieldDecorator(v.key, {
                                        rules: [],
                                        initialValue: v.optionVal[0].value

                                    })(
                                        <SelectComs disabled placeholder="请选择" labelName={v.labelName}
                                                    style={{width: 120}}>
                                            {
                                                v.optionVal.map((i, j) => {
                                                    return <Option key={j} value={i.value}>{i.name}</Option>
                                                })
                                            }
                                        </SelectComs>
                                    )}
                                </FormItem>
                            })
                        }

                    </div>
                    <div>
                        <FormItem style={{margin: '10px'}}>扫码交易:</FormItem>

                        {
                            online.map((v, k) => {
                                return <FormItem key={k}>
                                    {getFieldDecorator(v.key, {
                                        rules: [],
                                        initialValue: v.optionVal[0].value
                                    })(
                                        <SelectComs disabled placeholder="请选择" labelName={v.labelName}
                                                    style={{width: 120}}>
                                            {
                                                v.optionVal.map((i, j) => {
                                                    return <Option key={j} value={i.value}>{i.name}</Option>
                                                })
                                            }
                                        </SelectComs>
                                    )}
                                </FormItem>
                            })
                        }
                    </div>
                </Card>
                <Card title="添加限额值"
                      style={{marginBottom: 6}}
                >

                    <Row>
                        {
                            inputLimit.map((v, k) => {
                                return (
                                    <Col {...queryItemLayout}
                                        key={k}>
                                        {getFieldDecorator(v.key, {
                                            rules: [],

                                        })(
                                            <InputComs disabled={true} labelName={v.labelName}
                                                       style={{width: 120}}
                                                        addonBefore={v.addonBefore} addonAfter={v.addonAfter}/>
                                        )
                                        }
                                    </Col>
                                )
                            })
                        }

                        <Col {...queryItemLayout}>
                            <Row style={{marginTop: '10px'}}>
                                <Col span={9}>
                                    <span style={{marginTop: '5px',marginLeft: '8px', display: 'inline-block'}}>每笔／分钟:</span>
                                </Col>
                                <Col span={15}>
                                    {
                                        getFieldDecorator('limitType')(
                                            <InputGroup>
                                                <Input disabled={true} style={{width: 50, textAlign: 'center'}}
                                                />
                                                <Input style={{
                                                    width: 24,
                                                    borderLeft: 0,
                                                    pointerEvents: 'none',
                                                    backgroundColor: '#fff'
                                                }} placeholder="/" disabled/>
                                                <Input disabled={true}
                                                       style={{width: 49, textAlign: 'center', borderLeft: 0}}
                                                />
                                            </InputGroup>
                                        )
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Card>
                <div >

                            <div style={{textAlign:'center'}}>
                                <Button style={{margin: '10px'}}
                                        onClick={() => this.props.history.push('/limitManager')}>取消</Button>
                                <Button htmlType="submit" style={{margin: '10px'}}>保存</Button>
                            </div>



                </div>
            </Form>)
    }
}