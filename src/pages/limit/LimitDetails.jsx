import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import {setTitle, Containerization} from '../../common/PublicComponent';
import {getLimitInitData, editLimit} from '../../actions/limitActions';
import MapModifyCom from '../../components/MapModifyCom'

const InputGroup = Input.Group;
const FormItem = Form.Item;

@setTitle('限额详情页')
@Containerization(state => ({
    initdata: state.LimitReducer.initdata,
    entryData: state.LimitReducer.entryData,
}))
@Form.create()
export default class LimitDetails extends React.Component {

    state = {
        isMerchant: false,
    }
    inputLimit = [
        {
            labelName: '单笔',
            key: 'singleAmountLimit',
            type: 'input',
            body: {
                style: {width: 140},
                addonBefore: "金额",
                addonAfter: "元",
                disabled: true,
            },

        }, {
            labelName: '单日',
            key: 'dayAmountLimit',
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
            key: 'monthAmountLimit',
            type: 'input',
            body: {
                style: {width: 120},
                addonBefore: "金额",
                addonAfter: "元",
                disabled: true,
            },

        }, {
            labelName: '年',
            key: 'yearAmountLimit',
            body: {
                style: {width: 120},
                addonBefore: "金额",
                addonAfter: "元",
                disabled: true,
            },
            type: 'input',
        }, {
            labelName: '终身',
            key: 'lifeAmountLimit',
            body: {
                style: {width: 120},

                addonBefore: "金额",
                addonAfter: "元",
                disabled: true,
            },
            type: 'input',
        }, {
            labelName: '两笔间隔',
            key: 'intervalSecondsLimit',
            addonAfter: "元",
            body: {
                addonAfter: "元",
                style: {width: 120},
                disabled: true,

            },
            type: 'input',
        }, {
            labelName: '笔/日',
            key: 'dayCountLimit',
            addonAfter: "元",
            type: 'input',
            body: {
                style: {width: 120},
                disabled: true,
            },

        }
    ]


    componentWillMount() {
        let id = this.props.match.params.id
        this.props.dispatch(getLimitInitData({id: id}));
    }

    handleSubmit = () => {
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
        const {modelName} = entryData;
        const {getFieldDecorator} = this.props.form

        return (
            <div>
                <div className={"title-style"}><b>限额名称：{modelName}</b></div>
                <Form className="container-body" layout="inline">
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
                                                    initialValue: entryData.countLimitCountValue != -1? entryData.countLimitCountValue :''
                                                })(
                                                    <Input style={{width: 50, textAlign: 'center'}} disabled={true}
                                                           placeholder="请输入"
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
                                                    initialValue: entryData.countLimitCountValue != -1? entryData.countLimitCountValue :''
                                                })(
                                                    <Input
                                                        style={{width: 49, textAlign: 'center', borderLeft: 0}}
                                                        disabled={true}
                                                        placeholder="请输入"
                                                    />
                                                )
                                            }

                                        </InputGroup>
                                    </div>
                                </FormItem>

                            </MapModifyCom>

                        </Row>

                    </Card>
                    <div style={{textAlign: 'center', marginBottom: 10, marginTop: 10}}>
                        <Button onClick={() => {
                            this.props.history.push('/limitManager')
                        }} type={"primary"}>关闭</Button>
                    </div>
                </Form>
            </div>
        )
    }
}