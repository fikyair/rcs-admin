import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import SelectComs, {Option} from '../../components/SelectComs';
import {setTitle, Containerization} from '../../common/PublicComponent';
import {getPersonalDetial, editPersional, getDetailPersionalForEdit} from '../../actions/limitActions';


const InputGroup = Input.Group;
const TextArea = Input.TextArea;
import MapModifyCom from "../../components/MapModifyCom";
import MapSelectComs from '../../components/MapSelectComs'
import PersonalReducer from "../../reducers/personalReducer";


const FormItem = Form.Item;

@setTitle('个性限额修改页')
@Containerization(state => ({
    initdata: state.PersonalReducer.initdataEdit,
    entryData: state.PersonalReducer.entryDataEdit,
    editsuccess: state.PersonalReducer.editsuccess
}))
@Form.create()
export default class LimitUpdate extends React.Component {

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
            },

        }, {
            labelName: '单月',
            key: 'monthAmountLimit',
            type: 'input',
            body: {
                style: {width: 140},
                addonBefore: "金额",
                addonAfter: "元",
            },

        }, {
            labelName: '年',
            key: 'yearAmountLimit',
            body: {
                style: {width: 140},
                addonBefore: "金额",
                addonAfter: "元",
            },
            type: 'input',
        }, {
            labelName: '终身',
            key: 'lifeAmountLimit',
            body: {
                style: {width: 140},

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
                style: {width: 140},

            },
            type: 'input',
        }, {
            labelName: '笔/日',
            key: 'dayCountLimit',
            addonAfter: "元",
            type: 'input',
            body: {
                style: {width: 140},

            },

        }
    ]

    componentWillMount() {
        let id = this.props.match.params.id
        this.props.dispatch(getDetailPersionalForEdit(id))
    }

    handleSubmit = () => {
        let id = this.props.match.params.id
        const value = this.formData.props.form.getFieldsValue()
        const value1 = this.props.form.getFieldsValue()
        const params = {
            ...value,
            ...value1,
            id: id
        }
        this.props.dispatch(editPersional(params))

        this.props.history.push('/merchantlimit')
    }

    render() {
        let {
            initdata = [],
            entryData = [],
            match
        } = this.props;
        this.inputLimit.map(data => {
            data.initialValue = entryData[data.key]
        })
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <div className={"title-style"}><b>商户编号:&nbsp;&nbsp;&nbsp;&nbsp;{entryData.mainPartValue}</b></div>

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
                                    style={{marginLeft:50, marginTop: 10}}
                                >
                                    {
                                        getFieldDecorator('remark',{

                                        })
                                        (
                                            <TextArea autosize={ {minRows: 1, maxRows: 6, cols: 50}} />
                                        )
                                    }
                                </FormItem>
                            </MapModifyCom>

                        </Row>

                    </Card>
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <Button style={{margin: '10px'}}
                                    onClick={() => this.props.history.push('/merchantlimit')}>取消</Button>
                            <Button htmlType="submit" style={{margin: '10px'}}
                                    onClick={() => this.handleSubmit()}>保存</Button>
                        </div>


                    </div>
                </Form>
            </div>
        )
    }
}