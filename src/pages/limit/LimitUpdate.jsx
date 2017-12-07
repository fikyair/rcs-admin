import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import SelectComs, {Option} from '../../components/SelectComs';
import {setTitle, Containerization} from '../../common/PublicComponent';
import {getLimitInitData, getBodyProperty, getBussinessType, getMainPart, getModels} from '../../actions/limitActions';
import {FetchAPI} from '../../utils/fetch-middleware'

const InputGroup = Input.Group;
import InputComs from "../../components/InputComs";
import MapModifyCom from '../../components/MapModifyCom'


const FormItem = Form.Item;

@setTitle('限额修改页')
@Containerization(state => ({
    initdata: state.LimitReducer.initdata,


})) @Form.create()
export default class LimitUpdate extends React.Component {

    state = {
        isMerchant: false,
        initData: {}
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
                key: 'accountType', type: 'select',

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
                    style: {width: 140},
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
        let data = {id: 22}
        this.props.dispatch(getLimitInitData(data));
    }


    handleSubmit = () => {
        const value = this.formData.props.form.getFieldsValue()
    }


    render() {
        const {
            match,
            initdata = [],
        } = this.props;
        return (
            <div>
                <div className={"title-style"}><b>限额名称：POS商户对私结算限额</b></div>

                <Form className="form-body" layout="inline">
                    {
                        initdata.map((v, k) => {
                            <Card title={v.name} noHovering={true}
                                  style={{marginBottom: 6}}
                            >
                                <MapModifyCom data={v.value}/>
                            </Card>
                        })
                    }

                    <div>
                        <div style={{textAlign: 'center'}}>
                            <Button style={{margin: '10px'}}
                                    onClick={() => this.props.history.push('/limitManager')}>取消</Button>
                            <Button htmlType="submit" style={{margin: '10px'}}
                                    onClick={() => this.handleSubmit()}>保存</Button>
                        </div>


                    </div>
                </Form>
            </div>
        )
    }
}