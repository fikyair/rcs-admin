import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import SelectComs, {Option} from '../../components/SelectComs';
import {setTitle, Containerization} from '../../common/PublicComponent';
import {getLimitInitData, editLimit} from '../../actions/limitActions';
import {FetchAPI} from '../../utils/fetch-middleware'

const InputGroup = Input.Group;
import InputComs from "../../components/InputComs";
import MapModifyCom from '../../components/MapModifyCom'


const FormItem = Form.Item;

@setTitle('限额修改页')
@Containerization(state => ({
    initdata: state.LimitReducer.initdata,
    entryData: state.LimitReducer.entryData,
    editsuccess: state.LimitReducer.editsuccess
}))
@Form.create()
export default class LimitUpdate extends React.Component {

    state = {
        isMerchant: false,
    }


    inputLimit = [
        {
            labelName: '单日',
            key: 'dayAmountLimit',
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
            type: 'input',
            body: {
                style: {width: 120},
                addonBefore: "金额",
                addonAfter: "元",
            },

        }, {
            labelName: '年',
            key: 'yearAmountLimit',
            body: {
                style: {width: 120},
                addonBefore: "金额",
                addonAfter: "元",
            },
            type: 'input',
        }, {
            labelName: '终身',
            key: 'lifeAmountLimit',
            body: {
                style: {width: 120},

                addonBefore: "金额",
                addonAfter: "元",
            },
            type: 'input',
        }, {
            labelName: '两笔间隔',
            key: 'intervalSecondsLimit',
            addonAfter: "元",
            body: {
                addonAfter: "元",
                style: {width: 120},

            },
            type: 'input',
        }, {
            labelName: '笔/日',
            key: 'dayCountLimit',
            addonAfter: "元",
            type: 'input',
            body: {
                style: {width: 120},

            },

        }
    ]

    componentDidMount() {

    }

    componentWillMount() {
        let data = {id: 22}
        this.props.dispatch(getLimitInitData(data));
    }


    handleSubmit = () => {
        const value = this.formData.props.form.getFieldsValue()
        const value1 = this.props.form.getFieldsValue()
        const params = {
            ...value,
            ...value1,
            id: 22
        }
        this.props.dispatch(editLimit(params))
        this.props.history.push('/limitManager')
    }


    render() {
        const {
            match,
            initdata = [],
            entryData = {}
        } = this.props;
        this.inputLimit.map(data => {
            data.initialValue = entryData[data.key]
        })
        const {getFieldDecorator} = this.props.form

        return (
            <div>
                <div className={"title-style"}><b>限额名称：POS商户对私结算限额</b></div>
                <Form className="form-body" layout="inline">
                    {
                        initdata.map((v, k) => {
                            return (<Card title={v.name} noHovering={true}
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
                                            {
                                                getFieldDecorator('countLimitCountValue', {
                                                    initialValue: entryData.countLimitCountValue
                                                })(
                                                    <Input style={{width: 50, textAlign: 'center'}}
                                                    />
                                                )
                                            }

                                            <Input style={{
                                                width: 24,
                                                borderLeft: 0,
                                                pointerEvents: 'none',
                                                backgroundColor: '#fff'
                                            }} placeholder="/" disabled/>
                                            {
                                                getFieldDecorator('countLimitMinuteValue', {
                                                    initialValue: entryData.countLimitMinuteValue
                                                })(
                                                    <Input
                                                        style={{width: 49, textAlign: 'center', borderLeft: 0}}
                                                    />
                                                )
                                            }

                                        </InputGroup>
                                    </div>
                                </FormItem>

                            </MapModifyCom>

                        </Row>

                    </Card>
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