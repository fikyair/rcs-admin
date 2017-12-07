import React from 'react';
import {Input, Button, Form, Row, Col, Card} from 'antd'
import {Containerization, InitComs, setTitle} from '../../common/PublicComponent';
import InputComs from "../../components/InputComs";
import MapSelectComs from '../../components/MapSelectComs';
import { getPersonalDetial} from '../../actions/limitActions';

const InputGroup = Input.Group;

const FormItem = Form.Item;
@setTitle('限额详情页')
@Containerization(state=>({}))
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
                    style: {width: 120},
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
                    style: {width: 120},
                    addonBefore: "金额",
                    addonAfter: "元",
                    disabled: true,
                },

            }, {
                labelName: '年',
                key: 'singleYear',
                labelValue: 'sigle',
                body: {
                    style: {width: 120},
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
                    style: {width: 120},
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
                    style: {width: 120},

                },
                type: 'input',
            }, {
                labelName: '笔/日',
                key: 'oneTime',
                labelValue: 'sigle',
                type: 'input',
                body: {
                    style: {width: 120},
                    disabled: true,
                },

            }
        ]

    }

    componentWillMount() {
        this.props.dispatch(getPersonalDetial('11'))
    }

    render() {
        const {
            merchentSelects = this.mockData.merchentSelects,
            online = this.mockData.tradeSelects.online,
            offline = this.mockData.tradeSelects.offline,
            inputLimit = this.mockData.inputLimit,
            match
        } = this.props;
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
                <div className={"title-style"}><b>限额名称：POS商户对私结算限额</b></div>
                <Form className="form-body" layout="inline" onSubmit={this.handleSubmit}>

                    <Card title="选择商户属性" noHovering={true}
                          style={{marginBottom: 6}}
                    >
                        <MapSelectComs data={merchentSelects}/>
                    </Card>
                    <Card title="选择交易属性" noHovering={true}
                          style={{marginBottom: 6}}
                    >
                        <div>
                            <FormItem style={{margin: '10px'}}><div style={{fontSize: 13}}><b>线下交易</b></div></FormItem>
                            <MapSelectComs data={offline}/>
                        </div>
                        <div>
                            <FormItem style={{margin: '10px'}}><div style={{fontSize: 13}}><b>扫码交易</b></div></FormItem>
                            <MapSelectComs data={online}/>
                        </div>
                    </Card>
                    <Card title="添加限额值" noHovering={true}
                          style={{marginBottom: 6}}
                    >

                        <Row>
                            <MapSelectComs data={inputLimit}>
                                <FormItem>
                                 <span style={{
                                     marginRight: '10px',
                                     minWidth: '80px',
                                     display: 'inline-block',
                                     marginTop: 10,
                                     verticalAlign: 'top',
                                 }}>每笔／分钟:</span>
                                    <div style={{display: 'inline-block', margin: '10px'}}>

                                        <InputGroup>
                                            <Input  disabled={true} style={{width: 50, textAlign: 'center'}}
                                            />
                                            <Input style={{
                                                width: 24,
                                                borderLeft: 0,
                                                pointerEvents: 'none',
                                                backgroundColor: '#fff'
                                            }} placeholder="/" disabled/>
                                            <Input
                                                disabled={true}  style={{width: 49, textAlign: 'center', borderLeft: 0}}
                                            />
                                        </InputGroup>
                                    </div>
                                </FormItem>

                            </MapSelectComs>

                        </Row>

                    </Card>
                    <div style={{textAlign: 'center', marginBottom: 10, marginTop: 10}}><Button type={"primary"}>关闭</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

