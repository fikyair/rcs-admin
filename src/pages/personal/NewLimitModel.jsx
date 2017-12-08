import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import {setTitle, Containerization} from '../../common/PublicComponent';
import ExtracData from '../../components/ExtractData'
const InputGroup = Input.Group;
import {getPersonalDetial} from "../../actions/limitActions";
import MapModifyCom from "../../components/MapModifyCom";


const FormItem = Form.Item;
const {TextArea} = Input
@setTitle('个性限额添加页')
@Containerization(state => ({
    initdata: state.PersonalReducer.initdata,
    entryData: state.PersonalReducer.entryData,
    editsuccess: state.PersonalReducer.editsuccess
}))
@Form.create()
export default class NewLimitModel extends React.Component {

    state = {
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
    componentWillMount() {
        let id = this.props.match.params.id
        this.props.dispatch(getPersonalDetial(id))
    }

    handleSubmit = () => {
        const formData = this.formData.props.form.getFieldsValue()

        const value = this.props.form.getFieldsValue()

        let params = {
            ...formData,
            ...value
        }

    }

    render() {
        const {
            initdata,
            entryData,
            match
        } = this.props;
        this.inputLimit.map(data => {
            data.initialValue = entryData[data.key]
        })
        const {getFieldDecorator} = this.props.form
        return (
            <div>
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
                    <Card title="配置商户"
                          noHovering={true}
                    >
                        {getFieldDecorator('merchant')(
                            <Input placeholder="请输入"
                                   addonBefore={(<span style={{minWidth: '70px', display: 'inline-block'}}>配置商户</span>)}
                                   style={{width: '200px', margin: '10px'}}/>
                        )}
                        <ExtracData/>
                        <FormItem
                        label="备注"
                        >
                            {getFieldDecorator('remark')( <TextArea></TextArea>)}

                        </FormItem>
                        <Button style={{margin: '10px', verticalAlign: 'top'}}
                                onClick={() => this.props.history.push('/merchantlimit')}>取消</Button>
                        <Button htmlType="submit" style={{margin: '10px', verticalAlign: 'top'}}>保存</Button>
                    </Card>
                </Form>
            </div>
        )
    }
}