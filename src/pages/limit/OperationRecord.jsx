import React from 'react';
import { Layout,Icon, Table} from 'antd';
import {Link } from 'react-router-dom';


import { Containerization, setTitle } from '../../common/PublicComponent';

@setTitle('操作记录')
@Containerization()
export default class OperationRecord extends React.Component{
  mockData = {
    dataSource:[
      {
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
        modyfyPerson:'JJJJJ',
        id:'xxxxxx',
        modyfyTime:'2014年11月3号',
        notes:'这是一次微笑',

      },
    ],
    columns:[{
      title: '限额名称',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`/limitdetails/${record.id}`} >{text}</Link>

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
    },{
      title:'修改人',
      dataIndex:'modyfyPerson',
      key:'modyfyPerson'
    },{
      title:'修改时间',
      dataIndex:'modyfyTime',
      key:'modyfyTime'
    },{
      title:'备注',
      dataIndex:'notes',
      key:'notes'
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
  render() {
    const { dataSource = this.mockData.dataSource,
      columns= this.mockData.columns
    } = this.props;
    return (
      <Layout>
          <Table columns={columns} dataSource={dataSource}/>
      </Layout>
    )
  }
}
