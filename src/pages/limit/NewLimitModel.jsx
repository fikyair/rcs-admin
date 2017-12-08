import React from 'react';
import {Layout, Form, Input, Button, Card, Row, Col} from 'antd';
import SelectComs, {Option} from '../../components/SelectComs';
import {setTitle, Containerization} from '../../common/PublicComponent';
import {getSelectDdata} from '../../actions/limitActions';

const InputGroup = Input.Group;
import InputComs from "../../components/InputComs";
import MapSelectComs from '../../components/MapSelectComs'
import {addModel} from "../../actions/limitActions";

const FormItem = Form.Item;

@setTitle('新增限额页')
@Containerization(state => ({
    selectData: state.LimitReducer.selectData,
    entryData: state.LimitReducer.entryData,
  formTemp:state.GlobalReducer.formTemp,
})) @Form.create()
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
            addonAfter: "元",
            body: {
                addonAfter: "元",
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

    formsIns = {}


    componentWillMount() {
        const { addLimitTemp } = this.props.formTemp;
        if(!addLimitTemp){
            this.props.history.push('/limitManager')
            return
        }
        const { limitType, merchType, limitProperty, limitBodyC, limitBodyB} = addLimitTemp;

        this.props.dispatch(getSelectDdata({limitType,merchType,limitProperty,mainPartCodeGroup:`${limitBodyB?limitBodyB:''}${limitBodyB?'_':''}${limitBodyC}`}))
    }

    handleSubmit = () => {
        const { addLimitTemp } = this.props.formTemp;

        const { limitType, merchType, limitProperty, limitBodyC, limitBodyB} = addLimitTemp;

        let mainData = {limitType,limitProperty,mainPartCodeGroup:`${limitBodyB?limitBodyB:''}${limitBodyB?'_':''}${limitBodyC}`}

        let formDataMerchent = {};
            Object.keys(this.formsIns).map(v=>{
                formDataMerchent = {...formDataMerchent,...this.formsIns[v].props.form.getFieldsValue()}
        })
        let modelPropertyVoList =  []
        for(let key in formDataMerchent){
            if(formDataMerchent[key]){
            modelPropertyVoList.push({propertyCode:key,propertyDetailCode:formDataMerchent[key]})
            }
        }
        const formDataInputLimit = this.formDataInputLimit.props.form.getFieldsValue();
        const formData = this.props.form.getFieldsValue()
        const getValues = { ...formDataInputLimit, ...formData,...mainData, modelPropertyVoList:modelPropertyVoList}
        const val = getValues;
        console.log("表单的数据", val)
        this.props.dispatch(addModel(val))
        this.props.history.push('/limitManager')
        // TODO 提交表单
    }

    render() {
        const {
            match,
            selectData
        } = this.props;
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <Form className="form-body" layout="inline">

                    {

                        selectData.map((v, k) => {

                            return (<Card title={v.name} noHovering={true} key={k}
                                          style={{marginBottom: 6}}
                            >
                                <MapSelectComs data={v.value}
                                               wrappedComponentRef={(inst) => {

                                                   this.formsIns[v.code] = inst
                                               }}
                                />
                            </Card>)
                        })
                    }
                    <Card title="添加限额值" noHovering={true}
                          style={{marginBottom: 6}}
                    >

                        <Row>
                            <MapSelectComs data={this.inputLimit}
                                           wrappedComponentRef={(inst) => this.formDataInputLimit = inst}>
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
                    <Card title="添加限额名称" noHovering={true}>
                        {
                            getFieldDecorator('modelName')(
                                <Input placeholder="请输入"
                                       addonBefore={(<span style={{minWidth: '70px', display: 'inline-block'}}>限额名称</span>)}
                                       style={{width: '200px', margin: '10px'}}/>
                            )
                        }
                        <Button style={{margin: '10px'}}
                                onClick={() => this.props.history.push('/limitManager')}>取消</Button>
                        <Button htmlType="submit" style={{margin: '10px'}}
                                onClick={() => this.handleSubmit()}>保存</Button>
                    </Card>
                </Form>
            </div>
        )
    }
}