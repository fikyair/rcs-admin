import React from 'react';
import { Containerization, setTitle } from '../common/PublicComponent';
import SelectComs, {Option} from '../components/SelectComs';
import { Layout,Table,Button, Icon} from 'antd';
import {Link, withRouter} from 'react-router-dom';

@setTitle('首页')
@withRouter
@Containerization()
export default class HomePage extends React.Component{
    state = {
      options:null
    }
    mockData = {
      selectsData:[
        {
          labelName:'限额类型',
          optionVal:[
            {value:'1',name:'交易限额'},
            {value:'2',name:'结算限额'}
          ]
        },
        {
          labelName:'限额属性',
          optionVal:[
            {value:'1',name:'B端'},
            {value:'2',name:'C端'},
            {value:'3',name:'B-C端'},
          ]
        },
        {
          labelName:'交易类型',
          optionVal:[
            {value:'1',name:'线下交易'},
            {value:'2',name:'线上交易'},
            {value:'3',name:'扫码交易'},
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
        minutes:'',
        year:'',
        lifeTime:'',
        interval:'',

      }, {
        key: '2',
        name: 'John Brown',
        single: 32,
        singleDay: 'New York No. 1 Lake Park',
        singleMonth:'',
        trades:'',
        minutes:'',
        year:'',
        lifeTime:'',
        interval:'',
      }, {
        key: '3',
        name: 'John Brown',
        single: 32,
        singleDay: 'New York No. 1 Lake Park',
        singleMonth:'',
        trades:'',
        minutes:'',
        year:'',
        lifeTime:'',
        interval:'',
      }],
      columns:[
        {
          title: '限额名称',
          dataIndex: 'name',
          key: 'name',
          render: text => <a href="#">{text}</a>,
        }, {
          title: '单笔',
          dataIndex: 'single',
          key: 'single',
        }, {
          title: '单日',
          dataIndex: 'singleDay',
          key: 'singleDay',
        },{
          title: '单月',
          dataIndex: 'singleMonth',
          key: 'singleMonth',
        },{
          title: '笔数',
          dataIndex: 'trades',
          key: 'trades',
        } ,{
          title: '分钟',
          dataIndex: 'minutes',
          key: 'minutes',
        },{
          title: '年',
          dataIndex: 'year',
          key: 'year',
        },{
          title: '终身',
          dataIndex: 'lifeTime',
          key: 'lifeTime',
        },{
          title: '两笔间隔',
          dataIndex: 'interval',
          key: 'interval',
        }, {
          title: '管理',
          key: 'action',
          render: (text, record) => (
            <span>
            <span className="ant-divider" />
            <Link to="/">修改</Link>
             <span className="ant-divider" />
            <Link to="/" className="ant-dropdown-link">
              操作记录 <Icon type="down" />
             </Link>
            </span>
          ),
        }],
    }
    componentWillMount(){
    }
    render(){
        const {options} =this.state;
        const {
          selectsData = this.mockData.selectsData,
          columns = this.mockData.columns,
          dataSource = this.mockData.dataSource,
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
            <Button icon="search">查询</Button>

            </div>
            <div>
              <Table columns={columns} dataSource={dataSource}/>
            </div>
          </Layout>
        );
    }
}