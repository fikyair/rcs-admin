import React from 'react'
import {Form, Col, Row, Select,Table, Button,Input, Layout} from 'antd'
import {Link} from 'react-router-dom'
const FormItem = Form.Item
const Option = Select.Option

@Form.create()
export default class LimitHome extends React.Component {

    state = {
        dataSource: [],
        pageNum: 1,
        pageSize: 3,
        total: 0,
    }

    constructor(props, state){
        super(props, state);
    }


    columns = [{
        title: '商户编号',
        dataIndex: 'merchantCode',
        render: text => <Link href="#">{text}</Link>,
    }, {
        title: '单笔（金额）',
        dataIndex: 'sigle',
    }, {
        title: '单日（金额）',
        dataIndex: 'oddDay',
    },{
        title:'年（金额）',
        dataIndex:'year',
    },{
        title:'终身（金额）',
        dataIndex:'lifeLong',
    },{
        title:'两笔间隔（秒）',
        dataIndex:'createUserName',
    },{
        title:'每笔／分钟',
        dataIndex:'updateUserId',
    },{
        title:'笔／日',
        dataIndex:'updateUserName',
    },{
        title:'状态',
        dataIndex:'status',
    },{
        title: '管理',
        dataIndex: 'operation',
        render: (text, record) => {
            return (
                <div className="editable-row-operations">
                    {/*<Link to="/">修改</Link>*/}
                    <span style={{color:'blue', cursor:'pointer'}} onClick={()=>this.props.history.push('/newadded')}>
                        停用
                    </span>&nbsp;&nbsp;&nbsp;
                    <span style={{color:'blue', cursor:'pointer'}} onClick={ ()=>{this.showModal(record) }}>
                        修改
                    </span>&nbsp;&nbsp;&nbsp;
                    <span style={{color:'blue', cursor:'pointer'}} onClick={ ()=>{this.showModal(record) }}>
                        操作记录
                    </span>&nbsp;&nbsp;&nbsp;
                </div>
            );
        },
    }];

    componentWillMount() {
     let dataSource = [
            {
                merchantCode:'1221',
                 sigle:'ewe',
                oddDay: 'oddDay',
                year:'year',
                lifeLong:'lifeLong',
                createUserName:'createUserName',
                updateUserId:'updateUserId',
                updateUserName:'updateUserName',
                status:'status',
            }
        ]

        this.setState({dataSource:dataSource})


    }

    query() {

        const {pageNum,pageSize} = this.state;
        let data = this.props.form.getFieldsValue()
        let params = {
            pageNum,
            pageSize,
            ...data,
        }


    }

    render(){
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
        const queryItemLayout ={
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
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="限额类别"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitType')(
                                            <Select>
                                                <Option key="12">123</Option>
                                            </Select>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="限额属性"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitProperty')(
                                            <Select>
                                                <Option key="12">123</Option>
                                            </Select>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="限额主体"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitMain')(
                                            <Select>
                                                <Option key="12">123</Option>
                                            </Select>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="商户类型"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('merchentType')(
                                            <Select>
                                                <Option key="12">123</Option>
                                            </Select>
                                        )
                                    }

                                </FormItem>
                            </Col>
                        </Row>

                        <Row>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="限额状态"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('limitStatus')(
                                            <Select>
                                                <Option key="12">123</Option>
                                            </Select>
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Col {...queryItemLayout}>
                                <FormItem
                                    label="商户编号"
                                    {...formItemLayout}
                                >
                                    {
                                        getFieldDecorator('merchentCode')(
                                            <Input />
                                        )
                                    }

                                </FormItem>
                            </Col>
                            <Button type="primary" style={{marginLeft: '30px'}}>查询</Button>

                        </Row>

                    </Form>

                </div>

                <Table dataSource={this.state.dataSource} pagination={false} columns={this.columns} ></Table>

            </div>
        )
    }
}