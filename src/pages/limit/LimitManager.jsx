import React from 'react';
import {Containerization, setTitle} from '../../common/PublicComponent';
import {Layout, Table, Button, Card, Icon, Input, Modal, Form, Menu, Dropdown, Pagination,Row,Col} from 'antd';
import {Link} from 'react-router-dom';
import MapSelectComs from '../../components/MapSelectComs';
import { getModels, getBodyProperty, getBussinessType, getMerchtType, getMainPart} from '../../actions/limitActions';

const FormItem = Form.Item;
@setTitle('首页')
@Containerization(state=>({
  selectsData:state.LimitReducer.selectsData,
  bussinessType:state.LimitReducer.bussinessType,
  cardType:state.LimitReducer.cardType,
  bodyProperty:state.LimitReducer.bodyProperty,
  mainAccount:state.LimitReducer.mainAccount,
    modelsData: state.LimitReducer.modelsData
}))
@Form.create()
export default class LimitManager extends React.Component {
    state = {
        pageNum: 1,
        pageSize: 3,
        total: 0,
        options: null,
        loading: false,
        visible: false,
        removeVisible: false,
        isMerchant: false,
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
                labelName: '限额名称',
                type: 'input',
                key: 'merchantCode',
                rules: [{required: true, message: 'Please input your E-mail!'}, {max: 3, message: '超长'}],
                // body: {style:{marginTop: 100}}
                // body: {addonBefore: "金额", addonAfter: "元",},
                body :{style:{width:120}}
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
                title: '限额名称',
                dataIndex: 'modelName',
                key: 'modelName',
                render: (text, record) => <Link to={`/limitManager/+details/${record.id}`}>{text}</Link>

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
                dataIndex: 'countLimitCountValue',
                key: 'countLimitCountValue',
            }, {
                title: '笔/日',
                dataIndex: 'dayCountLimit',
                key: 'dayCountLimit',
            },{
                title: '管理',
                key: 'action',
                render: (text, record) => (
                    <span>
            <Link to={`/limitManager/+update/${record.id}`}>修改</Link>
              <span className="ant-divider"/>
            <Link to={`/merchantlimit/+add/${record.id}`}>个性设置</Link>
                        <span className="ant-divider"/>
             <Dropdown overlay={this.menu(record)}>
                <a>
                    更多操作<Icon type="down"/>
                </a>
             </Dropdown>
            </span>
                ),
            }],
        modalSelects: [
            {
                labelName: '选择限额类型',
                optionVal: [
                    {value: '1', name: '交易限额'},
                    {value: '2', name: '结算限额'},
                ],
                key: 'limitType',
                type: 'select',
            },
            {
                labelName: '选择限额属性',
                optionVal: [
                    {value: '1', name: 'B端'},
                    {value: '2', name: 'C端'},
                    {value: '3', name: 'B-C端'},
                ],
                key: 'limitProperty',
                type: 'select',

            }, {
                labelName: '选择商户主体',
                optionVal: [
                    {value: '1', name: '商户'},
                    {value: '2', name: '结算人证件号'},
                ],
                key: 'limitBody',
                type: 'select',

            }, {
                labelName: '选择商户类型',
                optionVal: [
                    {value: '1', name: 'POS商户'},
                    {value: '2', name: 'MPOS商户'},
                    {value: '3', name: '互联网商户'},
                ],
                key: 'merchType',
                type: 'select',
            },
        ]
    }

    componentWillMount() {
        //页面发起数据请求
      this.props.dispatch(getBussinessType());
      this.props.dispatch(getBodyProperty());
      this.props.dispatch(getMerchtType({propertyEnum:'MERCH_TYPE'}));
      //this.props.dispatch(getMainAccount({mainPartTypeEnum:'B'}));
        const {pageNum, pageSize} = this.state
        let params = {
            pageNum,
            pageSize,
        };
        this.props.dispatch(getModels({...params}))
    }
    menu = record => (
        <Menu>

            <Menu.Item>
                <Link to={`/limitManager/+operationrecord/${record.id}`}>操作记录 </Link>
            </Menu.Item>
            <Menu.Item key='1'>
                <a onClick={()=>{this.disableLimitRule(record.id)}}>删除</a>
            </Menu.Item>

        </Menu>
    );


    timer = null
    showAddModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleAddOk = () => {
        this.addFormData.props.form.validateFields((err, values) => {
          if (!err) {
            this.setState({loading: true});
            this.timer = setTimeout(() => {
              this.setState({loading: false, visible: false});
            }, 3000);

            //TODO 提交商户主体和商户类型等数据，并跳转到添加页面
            this.props.history.push('/limitManager/add')

          }
        });

    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    handleAddCancel = () => {
        this.setState({visible: false});
    }

    disableLimitRule() {
        this.setState({removeVisible: true})
    }

    handleRemoveCancel = () => {
        this.setState({removeVisible: false})
    }

    handleRemoveOk = () => {
        this.setState({removeVisible: false})

        //TODO 删除限额规则
    }

    handleSearch = (args) => {
        //TODO 搜索
        let getFieldsValue = this.formData.props.form.getFieldsValue();
        const modelName = this.props.form.getFieldValue('modelName')
        const {pageNum, pageSize} = this.state
        let params = {
            ...getFieldsValue,
          modelName,
            pageNum,
            pageSize,
            ...args,
        };
        //调用接口
      this.props.dispatch(getModels({...params})).then(data=>{
          console.log('====>',data)
      })
    }

    changePage = (page) =>{
        this.handleSearch({pageNum: page})
    }

    render() {
        debugger;
        const {options, visible, loading, removeVisible, isMerchant} = this.state;
        const {
            selectsData,
            selectsData2,
            modelsData,
            columns = this.mockData.columns,
            dataSource = this.mockData.dataSource,
            modalSelects = this.mockData.modalSelects
        } = this.props;
        const {getFieldDecorator} = this.props.form;
        const layout = {
            xs: 6,
            sm: 15,
            md :22
        }
        return (
            <div>
                <Form layout='inline' className="container" onSubmit={this.handleSearch}>
                    <div className="select">
                        <MapSelectComs  selectedAll={true} initial={true} wrappedComponentRef={(inst) => this.formData = inst} data={selectsData}/>
                    </div>
                    <Row>

                        <Col {...layout} style={{marginLeft:6}}>

                        <div className="selBtn" style={{textAlign:'right'}}>
                            <FormItem style={{margin:"10px",float:'left'}} label={(<div className="label-class">限额名称</div>)}>
                          {
                            getFieldDecorator('modelName',{})(
                              <Input placeholder="请输入" />
                            )
                          }
                            </FormItem>
                            <Button className="btn" type='primary' icon="search"
                                    onClick={() => this.handleSearch()}>查询</Button>
                        </div>
                    </Col>
                    </Row>
                </Form>
                <Button className="addBtn" onClick={this.showAddModal} type="primary" ghost>添加限额</Button>

                <Card noHovering="true" className="limitable" title="限额列表" bodyStyle={{padding: '0px',}}><Table className="btl"
                                                                                              columns={columns}
                                                                                              dataSource={
                                                                                                  modelsData.records

                                                                                              }
                                                                                              pagination={false}/>
                    <div style={{margin: 29, textAlign: 'right'}}>
                        <Pagination current={this.state.pageNum} pageSize={this.state.pageSize} total={this.state.total}
                                    onChange={this.changePage}/>
                    </div>

                </Card>

              {
                  visible?<Modal
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
                      <Form layout='inline'>
                          <MapSelectComs wrappedComponentRef={(inst) => this.addFormData = inst} matchIs={true} data={selectsData} ref="modalSelects"/>
                      </Form>
                </Modal>
                :null
              }
                <Modal
                    visible={removeVisible}
                    title="删除限额"
                    bodyStyle={{backgroundColor:'red'}}
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