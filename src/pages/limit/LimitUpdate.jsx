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
       // const {remark} = entryData.remark;
       // console.log('remark',remark)
        const {getFieldDecorator} = this.props.form
        entryData.records = entryData.records && entryData.records.map((v,k)=> {
            for(let p in v){
                if(v[p]<= 0){
                    v[p] = '无'
                }
            }
            return v
        })
        debugger;
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
                                <FormItem label={(<div className="label-class">每笔／分钟</div>)} style={{display: 'inline-block',margin:'10px'}}>


                                        <InputGroup>
                                            {
                                                getFieldDecorator('countLimitCountValue', {
                                                    initialValue: entryData.countLimitCountValue!=-1?entryData.countLimitCountValue:""
                                                })(
                                                    <Input style={{width: 50, textAlign: 'center'}}
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
                                                    initialValue: entryData.countLimitMinuteValue !=-1? entryData.countLimitMinuteValue:''
                                                })(
                                                    <Input
                                                        style={{width: 49, textAlign: 'center', borderLeft: 0}}
                                                        placeholder="请输入"
                                                    />
                                                )
                                            }

                                        </InputGroup>
                                </FormItem>
                                <FormItem
                                    label={"备注"}
                                >
                                    {
                                        getFieldDecorator('remark',{
                                            initialValue: entryData.remark
                                        })
                                        (
                                            <TextArea/>
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