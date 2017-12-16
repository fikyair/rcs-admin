import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import {setTitle, Containerization} from '../../common/PublicComponent';
import ExtracData from '../../components/ExtractData'
import {validatSingle} from '../../utils/vaildator'

const InputGroup = Input.Group;
import {getPersonalDetial, addPersionalLimit} from "../../actions/limitActions";
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
        list: [],
        flag: false,
    }

    inputLimit = [
        {
            labelName: '单笔',
            key: 'singleAmountLimit',
            type: 'input',
            body: {
                style: {width: 120},
                addonBefore: "金额",
                addonAfter: "元",
            },

        }, {
            labelName: '单日',
            key: 'dayAmountLimit',
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
            addonAfter: "秒",
            body: {
                addonAfter: "秒",
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
        let mainPartCode = this.props.location.state.mainPartCodeGroup
        let modelId = this.props.match.params.id
        const formData = this.formData.props.form.getFieldsValue()
        let countLimitCountValue = this.props.form.getFieldValue('countLimitCountValue')
        let countLimitMinuteValue = this.props.form.getFieldValue('countLimitMinuteValue')
        formData['dayCountLimit'] = parseInt(formData['dayCountLimit'])

        const {remark, mainPartValue} = this.props.form.getFieldsValue()
        let arr = []
        arr.push({mainPartValue: mainPartValue, remark: remark})
        let list = this.state.list
        list.shift()
        let params = {
            ...formData,
            countLimitMinuteValue: countLimitMinuteValue,
            countLimitCountValue: countLimitCountValue,
            excelVoList: list.length ? list : arr,
            mainPartCode: mainPartCode,
            modelId: parseInt(modelId)
        }
        let data = {
            ...formData,
            countLimitMinuteValue: countLimitMinuteValue,
            countLimitCountValue: countLimitCountValue
        }
        debugger
        if(validatSingle(data)){
            this.props.dispatch(addPersionalLimit(params))
            this.props.history.push('/merchantlimit')
        }


    }

    getData(list) {
        console.log('======>list', list)
        this.setState({list: list, flag: true})
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
                <Form className="form-body" layout="inline">
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
                                <FormItem label={(<div className="label-class">每笔／分钟</div>)} style={{display: 'inline-block',margin:'10px'}}>

                                        <InputGroup>
                                            {
                                                getFieldDecorator('countLimitCountValue', {
                                                    initialValue: entryData.countLimitCountValue>=0 ? entryData.countLimitCountValue:''
                                                })(
                                                    <Input style={{width: 50, textAlign: 'center'}}
                                                           placeholder="请输入"
                                                           disabled={entryData.countLimitCountValue===-1 }
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
                                                    initialValue: entryData.countLimitMinuteValue>=0?entryData.countLimitMinuteValue:""
                                                })(
                                                    <Input
                                                        style={{width: 49, textAlign: 'center', borderLeft: 0}}
                                                        placeholder="请输入"
                                                        disabled={entryData.countLimitCountValue===-1 }
                                                    />
                                                )
                                            }

                                        </InputGroup>

                                </FormItem>

                            </MapModifyCom>

                        </Row>

                    </Card>
                    <Card title="配置商户"
                          noHovering={true}
                    >
                        <Row>

                            {getFieldDecorator('mainPartValue')(
                                <Input disabled={this.state.flag} placeholder="请输入"
                                       addonBefore={(
                                           <span style={{minWidth: '70px', display: 'inline-block'}}>配置商户</span>)}
                                       style={{width: '200px', margin: '10px'}}/>
                            )}
                            <FormItem
                                label="备注"
                            >
                                {getFieldDecorator('remark')(<TextArea disabled={this.state.flag}></TextArea>)}

                            </FormItem>
                            <Button style={{margin: '10px', verticalAlign: 'top'}}
                                    onClick={() => this.props.history.push('/merchantlimit')}>取消</Button>
                            <Button htmlType="submit" style={{margin: '10px', verticalAlign: 'top'}}
                                    onClick={() => this.handleSubmit()}>保存</Button>
                        </Row>
                        <Row>
                            <ExtracData data={this.props.form.getFieldsValue()} getData={this.getData.bind(this)}/>
                        </Row>
                    </Card>
                </Form>
            </div>
        )
    }
}