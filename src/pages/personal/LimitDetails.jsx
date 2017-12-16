import React from 'react';
import {Input, Button, Form, Row, Col, Card} from 'antd'
import {Containerization, InitComs, setTitle} from '../../common/PublicComponent';
import MapModifyCom from "../../components/MapModifyCom";
import MapSelectComs from '../../components/MapSelectComs';
import {getPersonalDetial, getDetailPersionalForEdit} from '../../actions/limitActions';

const InputGroup = Input.Group;
const {TextArea} = Input
const FormItem = Form.Item;
@setTitle('限额详情页')
@Containerization(state => ({
    initdata: state.PersonalReducer.initdataEdit,
    entryData: state.PersonalReducer.entryDataEdit
}))
@Form.create()
export default class LimitDetails extends React.Component {

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
                type: 'select',
                body: {'disabled': true},
                initialValue: '1'
            }, {
                labelName: '名单类型',
                optionVal: [
                    {value: '1', name: '白名单类型'},
                    {value: '2', name: '非白名单类型'},
                ],
                key: 'listType',
                type: 'select',
                body: {'disabled': true},
            }, {
                labelName: '是否小额双免',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'doublefree',
                type: 'select',
                body: {'disabled': true},
            }, {
                labelName: '是否有终端',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'isTermial',
                type: 'select',
                body: {'disabled': true},
            }, {
                labelName: 'POS商户类型',
                optionVal: [
                    {value: '1', name: '小微一'},
                    {value: '2', name: '小微二'},
                ],
                key: 'postType',
                type: 'select',
                body: {'disabled': true},
            }, {
                labelName: 'POS秒到等级',
                optionVal: [
                    {value: '1', name: '1'},
                    {value: '2', name: '2'},
                ],
                key: 'postLevel',
                type: 'select',
                body: {'disabled': true},
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
                    type: 'select',
                    body: {'disabled': true},
                }, {
                    labelName: '卡介质',
                    optionVal: [
                        {value: '1', name: 'IC卡'},
                        {value: '2', name: '非IC卡'},
                    ],
                    key: 'cardLand',
                    type: 'select',
                    body: {'disabled': true},
                }, {
                    labelName: '消费方式',
                    optionVal: [
                        {value: '1', name: '预授权'},
                        {value: '2', name: '预授权完成'},
                        {value: '3', name: '消费'},
                    ],
                    key: 'salesMethod',
                    type: 'select',
                    body: {'disabled': true},
                }, {
                    labelName: '接触方式',
                    optionVal: [
                        {value: '1', name: '挥卡'},
                        {value: '2', name: '云闪付'},
                    ],
                    key: 'touchMethod',
                    type: 'select',
                    body: {'disabled': true},
                },
            ],
            online: [
                {
                    labelName: '扫码类型',
                    optionVal: [
                        {value: '1', name: '台卡'},
                        {value: '2', name: 'APP'},
                    ],
                    key: 'qrTerminal',
                    type: 'select',
                    body: {'disabled': true},
                }, {
                    labelName: '扫码类型',
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
                    type: 'select',
                    body: {'disabled': true},
                }, {
                    labelName: '扫码类型',
                    optionVal: [
                        {value: '1', name: '二维码-主扫'},
                        {value: '2', name: '二维码-被扫'},
                    ],
                    key: 'qrType',
                    type: 'select',
                    body: {'disabled': true},
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
                type: 'input',
                body: {
                    style: {width: 140},
                    addonBefore: "金额",
                    addonAfter: "元",
                    disabled: true,
                },

            }, {
                labelName: '单月',
                key: 'singleMonth',
                labelValue: 'sigle',

                type: 'input',
                body: {
                    style: {width: 140},
                    addonBefore: "金额",
                    addonAfter: "元",
                    disabled: true,
                },

            }, {
                labelName: '年',
                key: 'singleYear',
                labelValue: 'sigle',
                body: {
                    style: {width: 140},
                    addonBefore: "金额",
                    addonAfter: "元",
                    disabled: true,
                },
                type: 'input',
            }, {
                labelName: '终身',
                key: 'lifetime',
                labelValue: 'sigle',
                body: {
                    style: {width: 140},
                    disabled: true,
                    addonBefore: "金额",
                    addonAfter: "元",
                },
                type: 'input',
            }, {
                labelName: '两笔间隔',
                key: 'interval',
                labelValue: 'sigle',
                body: {
                    disabled: true,
                    addonAfter: "元",
                    style: {width: 140},

                },
                type: 'input',
            }, {
                labelName: '笔/日',
                key: 'oneTime',
                labelValue: 'sigle',
                type: 'input',
                body: {
                    style: {width: 140},
                    disabled: true,
                },

            }
        ]

    }
    inputLimit = [
        {
            labelName: '单笔',
            key: 'singleAmountLimit',
            type: 'input',
            disabled: true,
            body: {
                style: {width: 140},
                addonBefore: "金额",
                addonAfter: "元",
            },

        }, {
            labelName: '单日',
            key: 'dayAmountLimit',
            addonBefore: "金额",
            addonAfter: "元",
            type: 'input',
            disabled: true,
            body: {
                style: {width: 140},
                addonBefore: "金额",
                addonAfter: "元",
            },

        }, {
            labelName: '单月',
            key: 'monthAmountLimit',
            type: 'input',
            disabled: true,
            body: {
                style: {width: 140},
                addonBefore: "金额",
                addonAfter: "元",
            },

        }, {
            labelName: '年',
            disabled: true,
            key: 'yearAmountLimit',
            body: {
                style: {width: 140},
                addonBefore: "金额",
                addonAfter: "元",
            },
            type: 'input',
        }, {
            labelName: '终身',
            disabled: true,
            key: 'lifeAmountLimit',
            body: {
                style: {width: 140},

                addonBefore: "金额",
                addonAfter: "元",
            },
            type: 'input',
        }, {
            labelName: '两笔间隔',
            disabled: true,
            key: 'intervalSecondsLimit',
            addonAfter: "元",
            body: {
                addonAfter: "元",
                style: {width: 140},

            },
            type: 'input',
        }, {
            labelName: '笔/日',
            disabled: true,
            key: 'dayCountLimit',
            addonAfter: "元",
            type: 'input',
            body: {
                style: {width: 140},

            },

        }
    ]

    componentWillMount(args) {
        let id = this.props.match.params.id
        this.props.dispatch(getDetailPersionalForEdit(id)).then(()=>{

        })
    }

    render() {
        const {
            merchentSelects = this.mockData.merchentSelects,
            online = this.mockData.tradeSelects.online,
            offline = this.mockData.tradeSelects.offline,
            inputLimit = this.mockData.inputLimit,
            initdata = [],
            entryData = [],
        } = this.props;
        debugger
        this.inputLimit.map(data => {
            data.initialValue = entryData[data.key]
        })
        const {getFieldDecorator} = this.props.form
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
                <div className={"title-style"}><span><b>商户编号&nbsp;&nbsp;&nbsp;&nbsp;
                    {entryData.mainPartValue}</b></span>
                </div>
                <Form className="form-body" layout="inline" onSubmit={this.handleSubmit}>

                    {
                        initdata.map((v, k) => {
                            return (<Card title={v.name} noHovering={true} key={k}
                                          style={{marginBottom: 6}}
                            >
                                <MapModifyCom data={v.value}/>
                            </Card>)
                        })
                    }

                    <Card title="添加限额值" noHovering={true}
                          style={{marginBottom: 6}}
                    >

                        <Row>
                            <MapModifyCom data={this.inputLimit} wrappedComponentRef={(inst) => this.formData = inst}>
                                <InputGroup style={{display: 'inline'}}>
                                    <FormItem
                                        label={(<div className="label-class">每笔/分钟</div>)}
                                        style={{display: 'inline-block',marginRight: 0,marginLeft: 10, marginTop: 10}}
                                    >

                                            {
                                                getFieldDecorator('countLimitCountValue', {
                                                    initialValue: entryData.countLimitCountValue == -1?'无': entryData.countLimitCountValue
                                                })(
                                                    <Input disabled={true} style={{width: 58, textAlign: 'center', borderTopRightRadius: 0,borderBottomRightRadius: 0}}
                                                    />
                                                )
                                            }
                                    </FormItem>
                                    <FormItem
                                        style={{ marginTop: 10}}
                                    >
                                            <Input style={{
                                                width: 24,
                                                borderLeft: 0,
                                                pointerEvents: 'none',
                                                backgroundColor: '#fff',
                                                borderRadius: 0,
                                            }} placeholder="/" disabled/>
                                            {
                                                getFieldDecorator('countLimitMinuteValue', {
                                                    initialValue: entryData.countLimitMinuteValue == -1?'无':entryData.countLimitMinuteValue
                                                })(
                                                    <Input
                                                        disabled={true}
                                                        style={{width: 58, textAlign: 'center', borderLeft: 0,  borderTopLeftRadius: 0,borderBottomLeftRadius: 0}}
                                                    />
                                                )
                                            }
                                    </FormItem>
                                </InputGroup>
                                <FormItem
                                    label={"备注"}
                                    style={{marginLeft:50, marginTop: 10, width: 222.91, marginLeft: 75}}
                                >
                                    {
                                        getFieldDecorator('remark',{
                                            initialValue: entryData.remark
                                        })
                                        (
                                            <TextArea disabled={true} style={{maxWidth: 141}} autosize={ {minRows: 1, maxRows: 6}}/>
                                        )
                                    }
                                </FormItem>
                            </MapModifyCom>

                        </Row>

                    </Card>
                    <div style={{textAlign: 'center', marginBottom: 10, marginTop: 10}}><Button
                        type={"primary"}
                    onClick={()=>{this.props.history.push('/merchantlimit')}}>关闭</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

