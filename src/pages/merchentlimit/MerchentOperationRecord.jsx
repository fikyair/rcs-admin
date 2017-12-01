import React from 'react';
import { Form, Input, Table, Pagination, Row, Col,Button} from 'antd';

const InputGroup = Input.Group;
const FormItem = Form.Item;
@Form.create()
export default class MerchentOperationRecord extends React.Component{
    state= {
        pageNum: '1',
        pageSize: '3',
        total: '100',
    }
    dataSource = [{
        key: '1',
        singleMoney: '11',
        oneDayMoney: '32',
        monthsMoney: '55',
        yearMoney: '111111',
        lifelongMoney: '33333',
        interval: '3',
        number: '12',
        penDay: '444',
        status: 'IN',
        Operator: '胡彦斌',
        OperatorTime: '2017-09-10',
    }, {
        key: '2',
        singleMoney: '1881',
        oneDayMoney: '3002',
        monthsMoney: '58885',
        yearMoney: '11155111',
        lifelongMoney: '3355333',
        interval: '53',
        number: '152',
        penDay: '444',
        status: 'IN',
        Operator: '啦啦啦啦斌',
        OperatorTime: '2017-09-30',
    }];

     columns = [{
        title: '单笔(金额)',
        dataIndex: 'singleMoney',
    }, {
        title: '单日(金额)',
        dataIndex: 'oneDayMoney',
    }, {
        title: '单月(金额)',
        dataIndex: 'monthsMoney',
    },{
        title:'年(金额)',
        dataIndex:'yearMoney',
    },{
        title:'终身(金额)',
        dataIndex:'lifelongMoney',
    },{
        title:'两笔间隔(秒)',
        dataIndex:'interval',
    },{
        title:'笔数(分钟)',
        dataIndex:'number',
    },{
        title:'笔/日',
        dataIndex:'penDay',
    },{
        title:'状态',
        dataIndex:'status',
    },{
        title:'操作人',
        dataIndex:'Operator',
    },{
        title:'操作时间',
        dataIndex:'OperatorTime',
    }];
    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 10},//控制字段大小
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},//控制标签大小
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        function onShowSizeChange(current, pageSize) {
            console.log(current, pageSize);
        }
        return(
            <div>
                <Form>
                    <h2 style={{textAlign:'center'}}>操作记录</h2>
                    <br/><br/>
                        <Row>
                            <Col span={3}>
                                <FormItem
                                    {...formItemLayout}
                                    style={{fontSize:15}}
                                >
                                    商户编号:
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...formItemLayout}
                                >
                                    {getFieldDecorator('merchantAttribute')(
                                        <p disabled={"true"} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Table bordered dataSource={this.dataSource} pagination={false} columns={this.columns} />
                        <br/><br/><br/>
                        <div style={{textAlign:'right'}}>
                            <Pagination
                                showSizeChanger onShowSizeChange={onShowSizeChange} total={this.state.total} onChange={this.onChange}
                            />
                        </div>
                        <br/><br/><br/>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{marginLeft:280}}>关闭</Button>
                        </FormItem>
                </Form>
            </div>
        );
    }
}