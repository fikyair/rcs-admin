import React from 'react';
import { Table, Layout } from 'antd'
import {Containerization, setTitle} from '../common/PublicComponent';

@setTitle('限额详情页')
@Containerization()
export default class LimitDetails extends React.Component {
    mockData = {
      dataSource:[
        {
          key: '1',
          name: '交易限额',
          value:'结算限额',
        }, {
          key: '2',
          name: "限额属性",
          value:'B端',
        }, {
          key:'5',
          name: '商户类型',
          value: '836商户',
        }, {
          key: '3',
          name: '账户类型',
          value:'对私-法人',
        },{
          key:'4',
          name:'卡介质',
          value:'IC卡'
        },
      ],
      columns:[{

          title: '',
          dataIndex: 'name',
          key: 'name',
      },{

        title: '',
        dataIndex: 'value',
        key: 'value',
      }]
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

