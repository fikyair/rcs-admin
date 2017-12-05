import React from 'react';
import {Containerization, setTitle} from '../../common/PublicComponent';
import SelectComs, {Option} from '../../components/SelectComs';
import {Layout, Table, Button, Card, Icon, Input, Modal, Form, Menu, Dropdown} from 'antd';
import {Link} from 'react-router-dom';
import InputComs from "../../components/InputComs";

const FormItem = Form.Item;
@setTitle('首页')
@Containerization()
@Form.create()
export default class LimitManager extends React.Component {
    state = {
        options: null,
        loading: false,
        visible: false,
        removeVisible: false,
    }
    mockData = {
        selectsData: [
            {
                labelName: '限额类型',
                optionVal: [
                    {value: '1', name: '交易限额'},
                    {value: '2', name: '结算限额'},
                    {value: '3', name: '全部'},
                ],
                key: 'limitType',
            },
            {
                labelName: '限额属性',
                optionVal: [
                    {value: '1', name: 'B端'},
                    {value: '2', name: 'C端'},
                    {value: '3', name: 'B-C端'},
                    {value: '4', name: '全部'},
                ],
                key: 'limitProperty',
            }, {
                labelName: '限额主体',
                optionVal: [
                    {value: '1', name: '商户'},
                    {value: '2', name: '结算人证件号'},
                    {value: '3', name: '持卡人银行卡'},
                    {value: '4', name: '用户openId'},
                    {value: '5', name: '用户证件号'},
                    {value: '6', name: '支付账户'},
                    {value: '7', name: '全部'},
                ],
                key: 'limitBody',
            }, {
                labelName: '商户类型',
                optionVal: [
                    {value: '1', name: 'POS商户'},
                    {value: '2', name: 'MPOS商户'},
                    {value: '3', name: '互联网商户'},
                    {value: '4', name: '全部'},
                ],
                key: 'tradeType',
            },

        ],
        dataSource: [{
            key: '1',
            name: 'John Brown',
            single: 32,
            singleDay: 'New York No. 1 Lake Park',
            singleMonth: '',
            trades: '',
            one: '',
            year: '',
            lifeTime: '',
            interval: '',
            status: '',
            id: 'xxxxxx',

        }, {
            key: '2',
            name: 'John Brown',
            single: 32,
            singleDay: 'New York No. 1 Lake Park',
            singleMonth: '',
            trades: '',
            one: '',
            year: '',
            lifeTime: '',
            interval: '',
            status: '',
            id: 'xxxxxy',
        }, {
            key: '3',
            name: 'John Brown',
            single: 32,
            singleDay: 'New York No. 1 Lake Park',
            singleMonth: '',
            trades: '',
            one: '',
            year: '',
            lifeTime: '',
            interval: '',
            status: '',
            id: 'xxxxxz',
        }],
        columns: [
            {
                title: '商户编号',
                dataIndex: 'name',
                key: 'name',
                render: (text, record) => <Link to={`/merchantlimit/+details/${record.id}`}>{text}</Link>

            }, {
                title: '单笔(金额)',
                dataIndex: 'single',
                key: 'single',
            }, {
                title: '单日(金额)',
                dataIndex: 'singleDay',
                key: 'singleDay',
            }, {
                title: '单月(金额)',
                dataIndex: 'singleMonth',
                key: 'singleMonth',
            }, {
                title: '年(金额)',
                dataIndex: 'year',
                key: 'year',
            }, {
                title: '终身(金额)',
                dataIndex: 'lifeTime',
                key: 'lifeTime',
            }, {
                title: '两笔间隔(秒)',
                dataIndex: 'interval',
                key: 'interval',
            }, {
                title: '笔数(分钟)',
                dataIndex: 'trades',
                key: 'trades',
            }, {
                title: '笔/日',
                dataIndex: 'one',
                key: 'one',
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            }, {
                title: '管理',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Link to={`/merchantlimit/+update/${record.id}`}>修改</Link>
                        <span className="ant-divider"/>
            <a onClick={() => this.delete(record.id)}>删除</a>
                        <span className="ant-divider"/>
             <Link to={`/merchantlimit/+operationrecoerd/${record.id}`} >操作记录</Link>
            </span>
                ),
            }],
        modalSelects: [
            {
                labelName: '选择限额类型',
                optionVal: [
                    {value: '1', name: '交易限额'},
                    {value: '2', name: '结算限额'},
                ]
            },
            {
                labelName: '选择限额属性',
                optionVal: [
                    {value: '1', name: 'B端'},
                    {value: '2', name: 'C端'},
                    {value: '3', name: 'B-C端'},
                ]
            }, {
                labelName: '选择商户主体',
                optionVal: [
                    {value: '1', name: '商户'},
                    {value: '2', name: '结算人证件号'},
                ]
            }, {
                labelName: '选择商户类型',
                optionVal: [
                    {value: '1', name: 'POS商户'},
                    {value: '2', name: 'MPOS商户'},
                    {value: '3', name: '互联网商户'},
                ]
            },
        ]
    }

    componentWillMount() {


    }

    menu = record => (
        <Menu>
            <Menu.Item key='1'>

                <Link to={`/limitManager/+update/${record.id}`}>修&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;改</Link>

            </Menu.Item>
            <Menu.Item>
                <Link to={`/operationrecord/${record.id}`}>操作记录 </Link>
            </Menu.Item>
        </Menu>
    );


    timer = null

    handleAddOk = () => {
        this.setState({loading: true});
        this.timer = setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 3000);

        //TODO 提交商户主体和商户类型等数据，并跳转到添加页面
        this.props.history.push('/limitManager/add')
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    handleAddCancel = () => {
        this.setState({visible: false});
    }


    handleRemoveCancel = () => {
        this.setState({removeVisible: false})
    }

    handleRemoveOk = () => {
        this.setState({removeVisible: false})

        //TODO 删除限额规则
    }

    handleSearch = () => {
        //TODO 搜索
    }

    delete(id) {

    }

    edit(id) {
        this.props.history.push(`/merchantlimit/+update/${id}`)
    }

    showRecord(id) {
        this.props.history.push(`/merchantlimit/+operationrecoerd/${id}`)
    }

    render() {
        const {options, visible, loading, removeVisible} = this.state;
        const {
            selectsData = this.mockData.selectsData,
            columns = this.mockData.columns,
            dataSource = this.mockData.dataSource,
            modalSelects = this.mockData.modalSelects
        } = this.props;
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form layout='inline' className="container" onSubmit={this.handleSearch}>
                    <div className="select">
                        {
                            selectsData.map((v, k) => {
                                return <FormItem key={k} style={{paddingLeft:4}}>
                                    {
                                        getFieldDecorator(v.key, {
                                            rule: [],
                                        })(
                                            <SelectComs labelName={v.labelName} placeholder="请选择"
                                                        className="selects-style">
                                                {
                                                    v.optionVal.map((i, j) => {
                                                        return <Option key={j} value={i.value}>{i.name}</Option>
                                                    })
                                                }
                                            </SelectComs>
                                        )
                                    }
                                </FormItem>

                            })
                        }
                        <InputComs className='input-style' labelName="商户编号" placeholder="请选择"/>
                    </div>
                    <div className="selBtn">
                        <Button className="btn" htmlType='submit' icon="search" type='primary' style={{marginLeft:1102}}
                                onClick={this.handleSearch()}>查询</Button>
                    </div>
                </Form>
                <Card noHovering={true} title="限额列表" className="limitable" style={{marginTop: 25}} bodyStyle={{padding: '0px',}}>
                    <Table
                    columns={columns}
                    dataSource={dataSource}
                    className="btl"
                    /></Card>

                <Modal
                    visible={visible}
                    title="添加限额"
                    onOk={this.handleAddOk}
                    onCancel={this.handleAddCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleAddCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleAddOk}>
                            下一步
                        </Button>,
                    ]}
                >
                    {
                        modalSelects.map((v, k) => {
                            return (<SelectComs key={k} labelName={v.labelName} defaultValue="请选择" style={{width: 120}}>
                                    {
                                        v.optionVal.map((i, j) => {
                                            return <Option key={j} value={i.value}>{i.name}</Option>
                                        })
                                    }
                                </SelectComs>
                            )
                        })
                    }

                </Modal>
                <Modal
                    visible={removeVisible}
                    title="删除限额"
                    onOk={this.handleRemoveOk}
                    onCancel={this.handleRemoveCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleRemoveCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" loading={loading}
                                onClick={this.handleRemoveOk}>
                            确认
                        </Button>,
                    ]}
                >
                    确定删除{'fsdfsdfdsf'}限额

                </Modal>
            </div>
        );
    }
}