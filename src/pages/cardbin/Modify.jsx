import React from 'react';
import { Table, Pagination, Form, Popconfirm } from 'antd';
import {FetchAPI} from '../../utils/fetch-middleware';
//import {Link} from 'react-router-dom'
import CollectionCreateForm from './CollectionCreateForm'

/*const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form, initdata } = props;
        console.log('==========>initdata',initdata)
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="修改信息"
                okText="确认"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="主体编码">
                        {getFieldDecorator('mainPartCode', {
                            initialValue:initdata.mainPartCode,
                            rules: [{ required: false, message: 'Please input the title of collection!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="主体名称">
                        {getFieldDecorator('mainPartName')(<Input />)}
                    </FormItem>
                    <Row style={{marginTop: 40}}>
                        <Col className="gutter-row" span={12}>
                            <FormItem label="主体类型:">
                                {getFieldDecorator('type')(
                                    <Select style={{width:150}}>
                                        <Option value="1">B</Option>
                                        <Option value="2">C</Option>
                                    </Select>)}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="状态:">
                                {getFieldDecorator('status')(
                                    <Select style={{width:150}}>
                                        <Option value="0">无效</Option>
                                        <Option value="1">有效</Option>
                                    </Select>)}
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem label="创建人ID">
                        {getFieldDecorator('createUserId')(<Input />)}
                    </FormItem>
                    <FormItem label="创建人姓名">
                        {getFieldDecorator('createUserName')(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);*/
export default class Modify extends React.Component{
    state={
        data : [],
        pageNum: '1',
        pageSize: '3',
        total: '0',
        visible: false,
        record:{},
    }
    search(args) {
        const {pageNum,pageSize} = this.state;
        const params = {
            pageNum,
            pageSize,
            ...args,
        }
        //const getFieldsValue=this.props.Form.getFieldsValue();
        FetchAPI(`/rcslmainpart?pageNum=${params.pageNum}&pageSize=${params.pageSize}`, 'GET').then((data) => {
            console.log('=====>111',data)
            this.setState({
                pageNum: data.current,
                total:data.total,
                pageSize: data.size,
                data: data.records
            })
            //console.log(data)
        })

    }

    columns = [{
        title: '主体编码',
        dataIndex: 'mainPartCode',
    }, {
        title: '主体名称',
        dataIndex: 'mainPartName',
    }, {
        title: '主体类型',
        dataIndex: 'type',
    },{
        title:'状态',
        dataIndex:'status',
    },{
        title:'创建人ID',
        dataIndex:'createUserId',
    },{
        title:'创建人姓名',
        dataIndex:'createUserName',
    },{
        title:'修改人ID',
        dataIndex:'updateUserId',
    },{
        title:'修改人姓名',
        dataIndex:'updateUserName',
    },{
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
            return (
                <div className="editable-row-operations">
                    {/*<Link to="/">修改</Link>*/}
                    <span style={{color:'blue', cursor:'pointer'}} onClick={()=>this.props.history.push('/newadded')}>
                        增加
                    </span>&nbsp;&nbsp;&nbsp;
                    <span style={{color:'blue', cursor:'pointer'}} onClick={ ()=>{this.showModal(record) }}>
                        修改
                    </span>&nbsp;&nbsp;&nbsp;
                    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                        <a href="#" style={{color:'blue'}}>删除</a>
                    </Popconfirm>
                </div>
            );
        },
    }];

    //  edit(obj) {
    //     // this.props.history.push('/modify',{some:obj})
    //     //  console.log('',some)
    //      this.setState({record:obj})
    // }
    componentWillMount(){
        this.search();
    }
    componentWillReceiveProps(nextProps){
        this.setState({visible:false})
        this.search();
    }
    onChange = (page) =>{
        //alert(page)
        //this.setState({pageNum:page})
        this.search({
            pageNum: page
        })
    }
    showModal = (obj) => {
        console.log(obj)
        this.setState({
            visible: true,
            record:obj
        });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    // handleCreate = () => {
    //
    //     // const form = this.form;
    //
    //     this.props.form.validateFields((err, values) => {
    //         if (err) {
    //             return;
    //         }
    //
    //         console.log('Received values of form: ', values);
    //         // form.resetFields();
    //         this.setState({ visible: false });
    //         const {record} = this.state;
    //         let params = {
    //             ...this.state.record,
    //             ... this.props.form.getFieldsValue()
    //         }
    //         FetchAPI(`/rcslmainpart/${record.id}`, 'put', params).then((data) => {
    //             // console.log(data)
    //         })
    //     });
    // }
    saveFormRef = (form) => {
     this.form = form;
    }
    render() {
        //console.log('======>',this.state.record)
        return (
            <div>
                <Table bordered dataSource={this.state.data} pagination={false} columns={this.columns} />
                <div>
                    <Pagination current={this.state.pageNum} pageSize={this.state.pageSize} total={this.state.total} onChange={this.onChange} />
                </div>
                <CollectionCreateForm
                    // ref={this.saveFormRef}
                    initdata={this.state.record}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}