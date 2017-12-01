import React from 'react'
import {Form, Col, Row, Select, Table, Button, Input, Layout,Pagination} from 'antd'
import {Link} from 'react-router-dom'
import {Containerization} from '../../common/PublicComponent';
import SelectComs, {Option} from '../../components/SelectComs';
import InputComs from "../../components/InputComs";

const FormItem = Form.Item;
@Form.create()
@Containerization()
export default class LimitHome extends React.Component {

    state = {
        dataSource: [],
        pageNum: 1,
        pageSize: 3,
        total: 19,
    }

    constructor(props, state) {
        super(props, state);
    }

    initData = {
        selectsData: [
            {
                labelName: '限额类别',
                labelValue: 'limitType',
                optionVal: [
                    {value: '1', name: '交易'},
                    {value: '2', name: '结算'},
                    {value: '3', name: '全部'},
                ]
            },
            {
                labelName: '限额属性',
                labelValue: 'limitProperty',
                optionVal: [
                    {value: '1', name: 'B端'},
                    {value: '2', name: 'C端'},
                    {value: '3', name: 'B-C端'},
                    {value: '4', name: '全部'},
                ]
            }, {
                labelName: '限额主体',
                labelValue: 'limitMain',
                optionVal: [
                    {value: '1', name: '商户'},
                    {value: '2', name: '结算人证件号'},
                    {value: '3', name: '持卡人银行卡'},
                    {value: '4', name: '用户openId'},
                    {value: '5', name: '用户证件号'},
                    {value: '6', name: '支付账户'},
                    {value: '7', name: '全部'},
                ]
            }, {
                labelName: '商户类型',
                labelValue: 'merchantLimit',


                optionVal: [
                    {value: '1', name: 'POS商户'},
                    {value: '2', name: 'MPOS商户'},
                    {value: '3', name: '互联网商户'},
                    {value: '4', name: '全部'},
                ]
            },
            {
                labelName: '限额状态',
                labelValue: 'limitStatus',
                optionVal: [
                    {value: '1', name: '启用'},
                    {value: '2', name: '停用'},
                    {value: '3', name: '全部'},
                ]
            }
        ],
        inputsData: [
            {
                labelName: '商户编号',
                labelValue: 'merchantCode',

            },
        ],


        columns: [
            {
                title: '商户编号',
                dataIndex: 'merchantCode',
                render: text => <Link to="#">{text}</Link>,
            }, {
                title: '单笔（金额）',
                dataIndex: 'sigle',
            }, {
                title: '单日（金额）',
                dataIndex: 'oddDay',
            }, {
                title: '年（金额）',
                dataIndex: 'year',
            }, {
                title: '终身（金额）',
                dataIndex: 'lifeLong',
            }, {
                title: '两笔间隔（秒）',
                dataIndex: 'createUserName',
            }, {
                title: '每笔／分钟',
                dataIndex: 'updateUserId',
            }, {
                title: '笔／日',
                dataIndex: 'updateUserName',
            }, {
                title: '状态',
                dataIndex: 'status',
            }, {
                title: '管理',
                dataIndex: 'operation',
                render: (text, record) => {
                    return (
                        <div className="editable-row-operations">
                            {/*<Link to="/">修改</Link>*/}
                            <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => {
                            }}>
                        停用
                    </span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => {
                                this.edit(record)
                            }}>
                        修改
                    </span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: 'blue', cursor: 'pointer'}}>
                        操作记录
                    </span>&nbsp;&nbsp;&nbsp;
                        </div>
                    );
                },
            }]

    }


    edit(record) {
        this.props.history.push('/merchentlimitmodify')
    }

    componentWillMount() {
        let dataSource = [
            {
                merchantCode: '1221',
                sigle: 'ewe',
                oddDay: 'oddDay',
                year: 'year',
                lifeLong: 'lifeLong',
                createUserName: 'createUserName',
                updateUserId: 'updateUserId',
                updateUserName: 'updateUserName',
                status: 'status',
            }
        ]

        this.setState({dataSource: dataSource})


    }

    search() {

        const {pageNum, pageSize} = this.state;
        let data = this.props.form.getFieldsValue()
        let params = {
            pageNum,
            pageSize,
            ...data,
        }


    }

    onChange = (page) => {
        this.setState({pageNum: page})
        this.search({
            pageNum: page,
        })
    }

    render() {
        const {dataSource} = this.state
        console.log(dataSource)
        const {getFieldDecorator} = this.props.form;
        //const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {//文字
                xs: {span: 24},//小于768px
                sm: {span: 10},//大于768px
            },
            wrapperCol: {//标签
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const queryItemLayout = {
            xs: 12,
            sm: 8,
            md: 6,
        }
        return (
            <div>

                <div style={{
                    padding: '24px 16px 0 16px',
                    marginBottom: '16px',
                    background: '#f8f8f8',
                    border: '1px solid #d9d9d9',
                    borderRadius: '6px',
                }}>
                    <Form>
                        <Row>
                            {
                                this.initData.selectsData.map((v, k) => {

                                        return (
                                            <Col {...queryItemLayout}>
                                                {
                                                    getFieldDecorator(v.labelValue)(
                                                        <SelectComs key={k} labelName={v.labelName} style={{width: 120}}>
                                                            {
                                                                v.optionVal.map((i, j) => {
                                                                    return <Option key={j} value={i.value}>{i.name}</Option>
                                                                })
                                                            }
                                                        </SelectComs>
                                                    )
                                                }
                                            </Col>
                                        )
                                    }
                                )
                            }
                            {
                                this.initData.inputsData.map((v, k) => {

                                    return (
                                        <Col {...queryItemLayout}>
                                            {
                                                getFieldDecorator(v.labelValue)(
                                                    <InputComs labelName={v.labelName} style={{width: 120}}/>
                                                )
                                            }
                                        </Col>
                                    )
                                })
                            }

                            <Col>
                                <Button type="primary" style={{marginLeft: '30px'}} onClick={() => {
                                    this.search()
                                }}>查询</Button>
                            </Col>
                        </Row>

                    </Form>

                </div>
                <div style={{marginTop: '15px', marginBottom: '15px'}}>
                    <Button type="primary" onClick={() => {
                        this.props.history.push('/merchentlimitadd', {title: '商户添加限额'})
                    }}>添加</Button>
                </div>

                <Table dataSource={this.state.dataSource} pagination={false} columns={this.initData.columns}></Table>
                <div style={{marginTop: '10px',textAlign:'right',marginRight: '15px'}}>
                    <Pagination current={this.state.pageNum} pageSize={this.state.pageSize} total={this.state.total}
                                onChange={this.onChange}/>
                </div>

            </div>
        )
    }
}