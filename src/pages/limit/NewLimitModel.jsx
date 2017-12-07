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
})) @Form.create()
export default class NewLimitModel extends React.Component {

    state = {
        // isMerchant: false,
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


    componentWillMount() {
        this.props.dispatch(getSelectDdata({id: 22}))
    }

    handleSubmit = () => {
        const formDataMerchent = this.formDataMerchent.props.form.getFieldsValue();
        const formDataOffLine = this.formDataOffLine.props.form.getFieldsValue();
        const formDataOnLine = this.formDataOnLine.props.form.getFieldsValue();
        const formDataInputLimit = this.formDataInputLimit.props.form.getFieldsValue();
        const getValues = {...formDataMerchent, ...formDataOffLine, ...formDataOnLine, ...formDataInputLimit}
        const val = getValues;
        console.log("表单的数据", val)
        this.props.dispatch(addModel(val)).then(data => {
            console.log("----->", data);
        })
        // TODO 提交表单
    }

    render() {
        const {
            match,
            selectData
        } = this.props;
        debugger
        const {type, id} = match.params
        const {getFieldDecorator} = this.props.form;
        const queryItemLayout = {
            xs: 12,
            sm: 7,
            md: 5,
        };
        return (
            <div>
                <Form className="form-body" layout="inline">

                    {
                        selectData.map((v, k) => {
                            return (<Card title={v.name} noHovering={true} key={k}
                                          style={{marginBottom: 6}}
                            >
                                <MapSelectComs data={v.value}/>
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
                        <Input placeholder="请输入"
                               addonBefore={(<span style={{minWidth: '70px', display: 'inline-block'}}>限额名称</span>)}
                               style={{width: '200px', margin: '10px'}}/>
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