import React, {Component} from 'react';
import {Form, Input, Button, Table, Select, Row, Col} from 'antd';
import PaginationComponent from '../components/PaginationComponent';

const FormItem = Form.Item;

@Form.create()
export default class UserList extends Component {
    state = {
        pageNum: 1,
        pageSize: 20,
        gettingUsers: false,
        users: [],
        orgName: '',
        orgNo: [],
        total: 0,
        statusLoading: {},
        addUser: false,
        userId: '',
        UserShow: false,
        queryLoading: false,
    }

    search = (args) => {
        const {form: {getFieldsValue}} = this.props;
        const {pageNum, pageSize} = this.state;
        const orgName = this.state.orgName;
        const org = this.state.orgNo.find(it => it.orgName === orgName);
        let orgNo = '';
        if (org) {
            orgNo = org.id;
        }
        let params = {
            ...getFieldsValue(),
            pageNum,
            pageSize,
            orgNo,
            ...args,
        };
        this.setState({
            gettingUsers: true,
            queryLoading: true,
        });
        let data = [{name:'12',age:'23'},{name:'12',age:'23'}]
        this.setState({users: data})
    }


    handlePageNumChange = (pageNum) => {
        this.setState({
            pageNum,
        });
        this.search({
            pageNum,
        });
    }
    handlePageSizeChange = pageSize => {
        this.setState({
            pageNum: 1,
            pageSize,
        });
        this.search({
            pageNum: 1,
            pageSize,
        });
    }

    componentWillMount() {
    }

    render() {
        const {
            gettingUsers,
            users,
            total,
            pageNum,
            pageSize,
            queryLoading,
        } = this.state;
        const {form: {getFieldDecorator}} = this.props;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const queryItemLayout = {
            xs: 12,
            md: 8,
            lg: 6,
        };
        return (
            <div>
                <Form>
                    <Row gutter={16}>
                        <Col {...queryItemLayout}>
                            <FormItem
                                {...formItemLayout}
                                label="登录名称">
                                {getFieldDecorator('loginName')(
                                    <Input placeholder="请输入登录名称" style={{width: '100%'}}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col {...queryItemLayout} style={{display: 'none'}}>
                            <FormItem
                                {...formItemLayout}
                                label="备注名">
                                {getFieldDecorator('remarkName')(
                                    <Input placeholder="请输入备注名"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
                <Table
                    loading={gettingUsers}
                    size="middle"
                    rowKey={(record) => record.id}
                    columns={this.columns}
                    dataSource={users}
                    pagination={false}
                />
                <PaginationComponent
                    pageSize={pageSize}
                    pageNum={pageNum}
                    total={total}
                    onPageNumChange={this.handlePageNumChange}
                    onPageSizeChange={this.handlePageSizeChange}
                />
            </div>
        );
    }
}

