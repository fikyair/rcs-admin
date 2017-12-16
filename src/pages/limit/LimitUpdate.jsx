import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import {setTitle, Containerization} from '../../common/PublicComponent';
import {getLimitInitData, editLimit} from '../../actions/limitActions';
import MapModifyCom from '../../components/MapModifyCom'


const FormItem = Form.Item;
const InputGroup = Input.Group;
const TextArea = Input.TextArea;

@setTitle('限额修改页')
@Containerization(state => ({
    initdata: state.LimitReducer.initdata,
    entryData: state.LimitReducer.entryData,
    editsuccess: state.LimitReducer.editsuccess,

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

    componentDidMount() {

    }

    componentWillMount() {
        let id = this.props.match.params.id
        this.props.dispatch(getLimitInitData({id: id}));
    }


    handleSubmit = () => {
        //从路由带参数
        let id = this.props.match.params.id;
        const value = this.formData.props.form.getFieldsValue();
        const value1 = this.props.form.getFieldsValue();
        const params = {
            ...value,
            ...value1,
            id: id,
        }
        console.log("---1",value)
        console.log('--2',value1)
        this.props.dispatch(editLimit(params)).then(() => {

        })
        this.props.history.push('/limitManager')
    }
    render() {
        const {
            match,
            initdata = [],
            entryData = []
        } = this.props;
        this.inputLimit.map(data => {
            data.initialValue = entryData[data.key]
        });
        console.log('--------',entryData)
        const {modelName} = entryData;
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <div className={"title-style"}><b>限额名称：{modelName}</b></div>
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
                    <Card title="修改限额值" noHovering={true}
                          style={{marginBottom: 6}}
                    >
                        <Row>
                            <MapModifyCom data={this.inputLimit} wrappedComponentRef={(inst) => this.formData = inst}>

                                        <InputGroup style={{display: 'inline'}}>
                                            <FormItem label={(<div className="label-class">每笔／分钟</div>)}
                                                      style={{display: 'inline-block', marginTop: 10,marginLeft: 10, marginRight: 0}}>
                                            {
                                                getFieldDecorator('countLimitCountValue', {
                                                    initialValue: entryData.countLimitCountValue!=-1?entryData.countLimitCountValue:""
                                                })(
                                                    <Input style={{width: 58, textAlign: 'center',borderTopRightRadius:0, borderBottomRightRadius:0}}
                                                           placeholder="请输入"
                                                           disabled={entryData.countLimitCountValue===-1}
                                                    />
                                                )
                                            }
                                            </FormItem>
                                            <FormItem>
                                            <Input style={{
                                                width: 24,
                                                borderLeft: 0,
                                                pointerEvents: 'none',
                                                backgroundColor: '#fff',
                                                marginTop:10,
                                                borderRadius:0
                                            }} placeholder="/" disabled/>
                                            {
                                                getFieldDecorator('countLimitMinuteValue', {
                                                    initialValue: entryData.countLimitMinuteValue !=-1? entryData.countLimitMinuteValue:''
                                                })(
                                                    <Input
                                                        style={{
                                                            width: 58, textAlign: 'center',
                                                            borderLeft: 0,
                                                            borderTopLeftRadius:0,
                                                            borderBottomLeftRadius:0,
                                                            marginTop:10
                                                        }}
                                                        placeholder="请输入"
                                                        disabled={entryData.countLimitCountValue===-1}
                                                    />
                                                )
                                            }
                                            </FormItem>
                                        </InputGroup>
                                <FormItem
                                    label={(<div className="label-class">备注</div>)} style={{display: 'inline-block',margin: 5}}
                                >
                                    {
                                        getFieldDecorator('remark',{
                                            initialValue: entryData.remark
                                        })
                                        (
                                            <TextArea autosize={{minRows:1,maxRow:6}}style={{width:140, height:32}}/>
                                        )
                                    }
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