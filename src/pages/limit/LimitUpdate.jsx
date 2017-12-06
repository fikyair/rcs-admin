import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import SelectComs, {Option} from '../../components/SelectComs';
import {setTitle, Containerization} from '../../common/PublicComponent';
import {getLimitInitData, getBodyProperty, getBussinessType, getMainPart, getModels} from '../../actions/limitActions';
import {FetchAPI} from '../../utils/fetch-middleware'

const InputGroup = Input.Group;
import InputComs from "../../components/InputComs";
import MapSelectComs from '../../components/MapSelectComs'


const FormItem = Form.Item;

@setTitle('限额修改页')
@Containerization()
@Form.create()
export default class LimitUpdate extends React.Component {

    state = {
        isMerchant: false,
        initData: {}
    }


    setInitialValue = (data, selectData) => {
        let list = selectData.map(v => {
            v.initialValue = data[v.key]
            return v
        })
        return list
    }

    initData = {
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
                // body: {'disabled': true},
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
                labelName: '是否优质商户',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'isPerfect',
                type: 'select',
                body: {'disabled': true},
            }, {
                labelName: '行业大类',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'category',
                type: 'select',
                body: {'disabled': true},
            }, {
                labelName: '细类',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'xcategory',
                type: 'select',
                body: {'disabled': true},
            }, {
                labelName: 'MCC',
                optionVal: [
                    {value: '1', name: '是'},
                    {value: '2', name: '否'},
                ],
                key: 'mcc',
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
                    labelName: '扫码终端',
                    optionVal: [
                        {value: '1', name: '台卡'},
                        {value: '2', name: 'APP'},
                    ],
                    key: 'qrTerminal',
                    type: 'select',
                    body: {'disabled': true},
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
                key: 'dayAmountLimit',
                labelValue: 'sigle',
                addonBefore: "金额",
                addonAfter: "元",
                type: 'input',
                body: {
                    style: {width: 120},
                    addonBefore: "金额",
                    addonAfter: "元",
                },

            }, {
                labelName: '单月',
                key: 'monthAmountLimit',
                labelValue: 'sigle',

                type: 'input',
                body: {
                    style: {width: 120},
                    addonBefore: "金额",
                    addonAfter: "元",
                },

            }, {
                labelName: '年',
                key: 'yearAmountLimit',
                labelValue: 'sigle',
                body: {
                    style: {width: 120},
                    addonBefore: "金额",
                    addonAfter: "元",
                },
                type: 'input',
            }, {
                labelName: '终身',
                key: 'lifeAmountLimit',
                labelValue: 'sigle',
                body: {
                    style: {width: 120},

                    addonBefore: "金额",
                    addonAfter: "元",
                },
                type: 'input',
            }, {
                labelName: '两笔间隔',
                key: 'intervalSecondsLimit',
                labelValue: 'sigle',
                addonAfter: "元",
                body: {
                    addonAfter: "元",
                    style: {width: 120},

                },
                type: 'input',
            }, {
                labelName: '笔/日',
                key: 'oneTime',
                labelValue: 'dayCountLimit',
                addonAfter: "元",
                type: 'input',
                body: {
                    style: {width: 120},

                },

            }
        ]

    }


    componentDidMount() {

    }

    componentWillMount() {
        this.setState({initData: this.initData})
        let id= '21'
        this.getinitData(id)

    }


    getinitData = (id) => {
        let data = {}
        FetchAPI(`/rcslmodel/${id}`, 'GET').then((data) => {
            debugger;
            console.log(data)
            let list = this.setInitialValue(data, this.initData.inputLimit)
            let initData= this.state.initData
            initData.inputLimit = list
            this.setState({initData: initData})
           // this.initData.inputLimit = this.setInitialValue(data, this.initData.inputLimit)
        })
    }

    handleSubmit = () => {
        debugger
        const value = this.formData.props.form.getFieldsValue()
        value.id = '22'
        FetchAPI(`/rcslmodel`, 'PUT',value).then((data) => {
            debugger;
            console.log(data)

            // this.initData.inputLimit = this.setInitialValue(data, this.initData.inputLimit)
        })

        debugger;


    }

    render() {
        const {
            match
        } = this.props;
        const {type, id} = match.params
        const {getFieldDecorator} = this.props.form;
        const queryItemLayout = {
            xs: 12,
            sm: 7,
            md: 5,
        };
        debugger
        return (
            <div>
                <div className={"title-style"}><b>限额名称：POS商户对私结算限额</b></div>

                <Form className="form-body" layout="inline" >

                    <Card title="选择商户属性" noHovering={true}
                          style={{marginBottom: 6}}
                    >
                        <MapSelectComs data={this.state.initData.merchentSelects}/>
                    </Card>
                    <Card title="选择交易属性" noHovering={true}
                          style={{marginBottom: 6}}
                    >
                        <div>
                            <FormItem style={{margin: '10px'}}>
                                <div style={{fontSize: 13}}><b>线下交易</b></div>
                            </FormItem>
                            <MapSelectComs data={this.state.initData.tradeSelects.offline}/>
                        </div>
                        <div>
                            <FormItem style={{margin: '10px'}}>
                                <div style={{fontSize: 13}}><b>扫码交易</b></div>
                            </FormItem>
                            <MapSelectComs data={this.state.initData.tradeSelects.online}/>
                        </div>
                    </Card>
                    <Card title="添加限额值" noHovering={true}
                          style={{marginBottom: 6}}
                    >

                        <Row>
                            <MapSelectComs data={this.state.initData.inputLimit} wrappedComponentRef={(inst) => this.formData = inst}>
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
                                            <Input style={{width: 50, textAlign: 'center'}}
                                            />
                                            <Input style={{
                                                width: 24,
                                                borderLeft: 0,
                                                pointerEvents: 'none',
                                                backgroundColor: '#fff'
                                            }} placeholder="/" disabled/>
                                            <Input
                                                style={{width: 49, textAlign: 'center', borderLeft: 0}}
                                            />
                                        </InputGroup>
                                    </div>
                                </FormItem>

                            </MapSelectComs>

                        </Row>

                    </Card>
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <Button style={{margin: '10px'}}
                                    onClick={() => this.props.history.push('/limitManager')}>取消</Button>
                            <Button htmlType="submit" style={{margin: '10px'}} onClick={()=>this.handleSubmit()}>保存</Button>
                        </div>


                    </div>
                </Form>
            </div>
        )
    }
}