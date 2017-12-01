import React from 'react';
import { Containerization, setTitle } from '../../common/PublicComponent';
import SelectComs, {Option} from '../../components/SelectComs';
import { Layout,Table,Button, Icon, Input, Modal} from 'antd';
import {Link,} from 'react-router-dom';

@setTitle('首页')
@Containerization()
export default class LimitManager extends React.Component{
    state = {
      options:null,
      loading: false,
      visible: false,
    }
    mockData = {
      selectsData:[
        {
          labelName:'限额类型',
          optionVal:[
            {value:'1',name:'交易限额'},
            {value:'2',name:'结算限额'},
            {value:'3',name:'全部'},
          ]
        },
        {
          labelName:'限额属性',
          optionVal:[
            {value:'1',name:'B端'},
            {value:'2',name:'C端'},
            {value:'3',name:'B-C端'},
            {value:'4',name:'全部'},
          ]
        },{
          labelName:'限额主体',
          optionVal:[
            {value:'1',name:'商户'},
            {value:'2',name:'结算人证件号'},
            {value:'3',name:'持卡人银行卡'},
            {value:'4',name:'用户openId'},
            {value:'5',name:'用户证件号'},
            {value:'6',name:'支付账户'},
            {value:'7',name:'全部'},
          ]
        },{
          labelName:'商户类型',
          optionVal:[
            {value:'1',name:'POS商户'},
            {value:'2',name:'MPOS商户'},
            {value:'3',name:'互联网商户'},
            {value:'4',name:'全部'},
          ]
        },
        {
          labelName:'限额状态',
          optionVal:[
            {value:'1',name:'启用'},
            {value:'2',name:'停用'},
            {value:'3',name:'全部'},
          ]
        }
      ],
      dataSource:[{
        key: '1',
        name: 'John Brown',
        single: 32,
        singleDay: 'New York No. 1 Lake Park',
        singleMonth:'',
        trades:'',
        one:'',
        year:'',
        lifeTime:'',
        interval:'',
        status:'',
        id:'xxxxxx',

      }, {
        key: '2',
        name: 'John Brown',
        single: 32,
        singleDay: 'New York No. 1 Lake Park',
        singleMonth:'',
        trades:'',
        one:'',
        year:'',
        lifeTime:'',
        interval:'',
        status:'',
        id:'xxxxxy',
      }, {
        key: '3',
        name: 'John Brown',
        single: 32,
        singleDay: 'New York No. 1 Lake Park',
        singleMonth:'',
        trades:'',
        one:'',
        year:'',
        lifeTime:'',
        interval:'',
        status:'',
        id:'xxxxxz',
      }],
      columns:[
        {
          title: '限额名称',
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => <Link to={`/limitdetails/${record.id}`} >{text}</Link>

        }, {
          title: '单笔(金额)',
          dataIndex: 'single',
          key: 'single',
        }, {
          title: '单日(金额)',
          dataIndex: 'singleDay',
          key: 'singleDay',
        },{
          title: '单月(金额)',
          dataIndex: 'singleMonth',
          key: 'singleMonth',
        },{
          title: '年(金额)',
          dataIndex: 'year',
          key: 'year',
        },{
          title: '终身(金额)',
          dataIndex: 'lifeTime',
          key: 'lifeTime',
        },{
          title: '两笔间隔(秒)',
          dataIndex: 'interval',
          key: 'interval',
        },{
          title: '笔数(分钟)',
          dataIndex: 'trades',
          key: 'trades',
        },{
          title: '笔/日',
          dataIndex: 'one',
          key: 'one',
        },{
          title: '状态',
          dataIndex: 'status',
          key: 'status',
        }, {
          title: '管理',
          key: 'action',
          render: (text, record) => (
            <span>
            <span className="ant-divider" />
            <Button onClick={()=>this.disableLimitRule(record.id)}>停用</Button>
              <span className="ant-divider" />
            <Button onClick={()=>this.props.history.push(`/limitupdate/${record.id}`)}>修改</Button>
             <span className="ant-divider" />
            <Button onClick={()=>this.props.history.push(`/operationrecord/${record.id}`)}>
              操作记录
             </Button>
            </span>
          ),
        }],
      modalSelects:[
        {
          labelName:'选择限额类型',
          optionVal:[
            {value:'1',name:'交易限额'},
            {value:'2',name:'结算限额'},
          ]
        },
        {
          labelName:'选择限额属性',
          optionVal:[
            {value:'1',name:'B端'},
            {value:'2',name:'C端'},
            {value:'3',name:'B-C端'},
          ]
        },{
          labelName:'选择商户主体',
          optionVal:[
            {value:'1',name:'商户'},
            {value:'2',name:'结算人证件号'},
          ]
        },{
          labelName:'选择商户类型',
          optionVal:[
            {value:'1',name:'POS商户'},
            {value:'2',name:'MPOS商户'},
            {value:'3',name:'互联网商户'},
          ]
        },
      ]
    }

    timer = null
    showModal = () => {
      this.setState({
       visible: true,
      });
    }

    handleOk = () => {
     this.setState({ loading: true });
     this.timer = setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);

     //TODO 提交商户主体和商户类型等数据，并跳转到添加页面
     this.props.history.push('/newlimitmodel')
    }

    componentWillUnmount(){
      clearTimeout(this.timer)
    }

    handleCancel = () => {
     this.setState({ visible: false });
    }

    disableLimitRule(){
      //TODO 停用限额规则
    }

    componentWillMount(){
    }

    render(){
        const {options, visible, loading} =this.state;
        const {
          selectsData = this.mockData.selectsData,
          columns = this.mockData.columns,
          dataSource = this.mockData.dataSource,
          modalSelects = this.mockData.modalSelects
        } = this.props;
        return (
          <Layout>
            <div>
            {
              selectsData.map((v,k)=>{
                return (<SelectComs key={k} labelName={v.labelName} defaultValue="请选择" style={{ width: 120 }} >
                    {
                      v.optionVal.map((i,j)=>{
                        return <Option key={j} value={i.value}>{i.name}</Option>
                      })
                    }
                  </SelectComs>
                )
              })
            }
          </div>
            <div>
              <Input addonBefore="限额名称" defaultValue="请输入限额名称" style={{width:'200px',margin:'10px'}}/>
              <Button icon="search" style={{margin:'10px',width:'100px'}}>查询</Button>
            </div>
            <div>
              <Button  style={{margin:'10px',width:'100px'}} onClick={this.showModal}>添加限额</Button>
              <Table columns={columns} dataSource={dataSource}/>
            </div>
            <Modal
              visible={visible}
              title="添加限额"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
                <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
                  下一步
                </Button>,
              ]}
            >
              {
                modalSelects.map((v,k)=>{
                  return (<SelectComs key={k} labelName={v.labelName} defaultValue="请选择" style={{ width: 120 }} >
                      {
                        v.optionVal.map((i,j)=>{
                          return <Option key={j} value={i.value}>{i.name}</Option>
                        })
                      }
                    </SelectComs>
                  )
                })
              }

            </Modal>
          </Layout>
        );
    }
}