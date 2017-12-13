import React from 'react';
import {Containerization, setTitle} from '../../common/PublicComponent';
import {Table, Button, Card, Input, Modal, Form, Row, Col, Pagination} from 'antd';
import {Link} from 'react-router-dom';
import {
    getBussinessType,
    detelePersionalLimit,
    queryConsumptionType,
    queryOnlineType,
    queryOnlinePayType,
    queryList,
    SetPersonalPageNum
} from '../../actions/limitActions';
import MapSelectComs from '../../components/MapSelectComs'

const FormItem = Form.Item;
@setTitle('首页')
@Containerization(state => ({
    selectsData: state.LimitReducer.selectsData,
    detelesuccess: state.PersonalReducer.detelesuccess,
    consumptionTypeData: state.PersonalReducer.consumptionTypeData,
    onlineData: state.PersonalReducer.onlineData,
    onlinePayData: state.PersonalReducer.onlinePayData,
    homeListData: state.PersonalReducer.homeListData,
    personalPageNum: state.PersonalReducer.personalPageNum
}))
@Form.create()
export default class LimitManager extends React.Component {
    state = {
        options: null,
        loading: false,
        visible: false,
        removeVisible: false,
        merchantId: '',
        total: 0,
        pageNum: 1,
        pageSize: 10,
        mainPartValue: ''

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
                type: 'select'
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
                type: 'select'
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
                type: 'select'
            }, {
                labelName: '商户类型',
                optionVal: [
                    {value: '1', name: 'POS商户'},
                    {value: '2', name: 'MPOS商户'},
                    {value: '3', name: '互联网商户'},
                    {value: '4', name: '全部'},
                ],
                type: 'select',
                key: 'tradeType',
            }, {
                labelName: '商户编号',
                type: 'input',
                key: 'limitName',
                rules: [{required: true, message: 'Please input your E-mail!'}, {max: 3, message: '超长'}],
                // body: {style:{marginTop: 100}}
                // body: {addonBefore: "金额", addonAfter: "元",},
                body: {style: {width: 120}}
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
                dataIndex: 'mainPartValue',
                key: 'mainPartValue',
                render: (text, record) => <Link to={`/merchantlimit/+details/${record.id}`}>{text}</Link>

            }, {
                title: '单笔(金额)',
                dataIndex: 'singleAmountLimit',
                key: 'singleAmountLimit',
            }, {
                title: '单日(金额)',
                dataIndex: 'dayAmountLimit',
                key: 'dayAmountLimit',
            }, {
                title: '单月(金额)',
                dataIndex: 'monthAmountLimit',
                key: 'monthAmountLimit',
            }, {
                title: '年(金额)',
                dataIndex: 'yearAmountLimit',
                key: 'yearAmountLimit',
            }, {
                title: '终身(金额)',
                dataIndex: 'lifeAmountLimit',
                key: 'lifeAmountLimit',
            }, {
                title: '两笔间隔(秒)',
                dataIndex: 'intervalSecondsLimit',
                key: 'intervalSecondsLimit',
            }, {
                title: '笔数(分钟)',
                dataIndex: 'countEveryMin',
                key: 'countEveryMin',
            }, {
                title: '笔/日',
                dataIndex: 'dayCountLimit',
                key: 'dayCountLimit',
            }, {
                title: '管理',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Link to={`/merchantlimit/+update/${record.id}`}>修改</Link>
                        <span className="ant-divider"/>
            <a onClick={() => this.delete(record)}>删除</a>
                        <span className="ant-divider"/>
             <Link to={`/merchantlimit/+operationrecoerd/${record.id}`}>操作记录</Link>
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
        this.props.dispatch(getBussinessType());
        // this.props.dispatch(getBodyProperty());
        this.props.dispatch(queryConsumptionType())
        this.props.dispatch(queryOnlineType())
        this.props.dispatch(queryOnlinePayType())
        const {pageSize, pageNum} = this.state

        let params = {
            size: pageSize,
            current:this.props.personalPageNum,
        }

        this.props.dispatch(queryList(params)).then(() => {
            const {total, current, size} = this.props.homeListData
            this.setState({total: total, pageNum: current, pageSize: size})
            //const data = this.props.homeListData.records

        })
    }

    timer = null

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    handleRemoveCancel = () => {
        this.setState({removeVisible: false})
    }

    handleRemoveOk = () => {
        this.setState({removeVisible: false})
        let id = this.state.merchantId
        this.props.dispatch(detelePersionalLimit(id)).then(() => {
            this.props.dispatch(getBussinessType());
            this.props.dispatch(queryConsumptionType())
            this.props.dispatch(queryOnlineType())
            this.props.dispatch(queryOnlinePayType())
            const {pageSize, pageNum} = this.state
            let params = {
                pageSize,
                pageNum,
            }
            this.props.dispatch(queryList(params)).then(() => {
                const {total, current, size} = this.props.homeListData
                this.setState({total: total, pageNum: current, pageSize: size})
            })
        })
    }

    handleSearch = (args) => {
        //TODO 搜索
        
        const formData = this.formData.props.form.getFieldsValue()
        const data = this.props.form.getFieldsValue()
        const {pageSize, pageNum} = this.state
        let params = {
            size:pageSize,
            current:pageNum,
            ...args,
            ...formData,
            ...data,
        }

        this.props.dispatch(queryList(params)).then(() => {
            const {total, current, size} = this.props.homeListData
            this.setState({total: total, pageNum: current, pageSize: size})
        })

    }

    delete(record) {
        this.setState({removeVisible: true})

        this.setState({merchantId: record.id, mainPartValue: record.mainPartValue})
    }

    changePage = (page) => {
        this.props.dispatch(SetPersonalPageNum(page))
        this.handleSearch({current: page})
    }
    onShowSizeChange=(current, size) =>{
        debugger;
        this.handleSearch({current:current, size:size})
    }
    render() {
        const {loading, removeVisible} = this.state;
        const {
            selectsData = [],
            homeListData = [],
            onlineData,
            onlinePayData,
            consumptionTypeData,
            columns = this.mockData.columns,
        } = this.props;
        const layout = {
            xs: 6,
            sm: 15,
            md: 22
        }
        const {getFieldDecorator} = this.props.form;
        const {limitType} = selectsData;
        const data = {limitType, tranCd: consumptionTypeData, olPayType: onlineData, olPayWay: onlinePayData,}
        homeListData.records = homeListData.records && homeListData.records.map(v=> {
            if(v['countLimitMinuteValue']>0 && v['countLimitCountValue']>0){
                v['countEveryMin'] = `${v['countLimitCountValue']}/${v['countLimitMinuteValue']}`
            } else {
                v['countEveryMin'] = '无'
            }
            for(let p in v){
                if(v[p]<= 0){
                    v[p] = '无'
                }
            }
            return v
        })
        
        return (
            <div>
                <Form layout='inline' className="container" onSubmit={this.handleSearch}>
                    <div className="select">
                        <MapSelectComs selectedAll={true} initial={true} style={{}}
                                       wrappedComponentRef={(inst) => this.formData = inst}
                                       data={data}/>

                    </div>
                    <Row>
                        <Col {...layout} style={{marginLeft: 6}}>
                            <div className="selBtn" style={{textAlign: 'right'}}>
                                <FormItem style={{margin: "10px", float: 'left'}}
                                          label={(<div className="label-class">商户编号</div>)}>
                                    {
                                        getFieldDecorator('mainPartValue', {})(
                                            <Input placeholder="请输入"/>
                                        )
                                    }
                                </FormItem>
                                <Button className="btn" type='primary' icon="search"
                                        onClick={() => this.handleSearch()}>查询</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
                <Card noHovering={true} title="限额列表" className="limitable" style={{marginTop: 25}}
                      bodyStyle={{padding: '0px',}}>
                    <Table
                        columns={columns}
                        dataSource={homeListData.records}
                        className="btl"
                        pagination={false}/>
                    <div style={{margin: 29, textAlign: 'right'}}>
                        <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} current={this.state.pageNum} pageSize={this.state.pageSize} total={this.state.total}
                                    onChange={this.changePage}/>
                    </div>
                </Card>
                <Modal
                    visible={removeVisible}
                    title="删除限额"
                    onCancel={this.handleRemoveCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleRemoveCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" loading={loading}
                                onClick={this.handleRemoveOk}>
                            确认
                        </Button>,
                    ]}
                >
                    是否删除商户&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{fontSize: 19}}>{this.state.mainPartValue}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;限额？

                </Modal>
            </div>
        );
    }
}