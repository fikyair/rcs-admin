import React from 'react';
import {Layout, Form, Input, Button, Card} from 'antd';
import SelectComs, {Option} from '../../components/SelectComs';
import {setTitle, Containerization} from '../../common/PublicComponent';

const FormItem = Form.Item;
const InputGroup = Input.Group
@setTitle('限额修改页')
@Containerization()
@Form.create()
export default class LimitUpdate extends React.Component {

    state = {}


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
                labelName: '单日（金额）',
                key: 'singleDay',
            }, {
                labelName: '单月（金额）',
                key: 'singleMonth',
            }, {
                labelName: '年（金额）',
                key: 'singleYear',
            }, {
                labelName: '终身（金额）',
                key: 'lifetime',
            }, {
                labelName: '笔数/分钟',
                key: 'minutes',
            }, {
                labelName: '笔/日',
                key: 'oneTime',
            }
        ]

    }

    componentWillMount() {
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
        return (
            <div>
                <div className="title-style">
                    <b>商户编号：</b>
                </div>
                <Form className="container-body" layout="inline" onSubmit={this.handleSubmit}>
                    <Card noHovering={true} title="选择商户属性">
                        {
                            merchentSelects.map((v, k) => {
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
                    </Card>
                    <Card noHovering={true} title="选择交易属性">
                        <div>
                            <FormItem style={{margin: '10px'}}><div style={{fontSize: 13}}><b>线下交易</b></div></FormItem>

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
                            <FormItem style={{margin: '10px'}}><div style={{fontSize: 13}}><b>扫码交易</b></div></FormItem>

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
                    <Card noHovering={true} title="添加限额值">

                        {
                            inputLimit.map((v, k) => {
                                return (
                                    <FormItem key={k}>
                                        {getFieldDecorator(v.key, {
                                            rules: [],

                                        })(
                                            <Input placeholder={"请输入"} addonBefore={(<span
                                                style={{
                                                    minWidth: '70px',
                                                    display: 'inline-block'
                                                }}>{v.labelName}</span>)}
                                                   style={{width: '200px', margin: '10px'}}/>
                                        )
                                        }
                                    </FormItem>
                                )
                            })

                        }
                        {/*<div style={{marginTop: '10px', display: 'inline-block'}}>*/}
                            <FormItem>
                                {getFieldDecorator('jian', {
                                rules: [],

                            })(<Input addonBefore={(<span
                                    style={{
                                        minWidth: '70px',
                                        display: 'inline-block'
                                    }}>两笔间隔</span>)} style={{width: 140,marginLeft:'10px', textAlign: 'center'}}
                                      placeholder="请输入每笔"/>)
                            }
                            <Input style={{width: 24, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff'}}
                                   placeholder="／" disabled/>
                            {getFieldDecorator('ww', {
                                rules: [],

                            })(<Input style={{width: 60, textAlign: 'center', borderLeft: 0}} placeholder="请输入每分"/>
                            )
                            }
                            </FormItem>
                        {/*</div>*/}
                    </Card>
                    <Card noHovering={true}>
                        <Button style={{margin: '10px', verticalAlign: 'top'}}
                                onClick={() => this.props.history.push('/limitManager')}>取消</Button>
                        <Button htmlType="submit" style={{margin: '10px', verticalAlign: 'top'}}>保存</Button>
                    </Card>
                </Form>
            </div>
        )
    }
}