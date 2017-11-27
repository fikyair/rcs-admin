import React from 'react';
import { Table, Pagination} from 'antd';
import {FetchAPI} from '../../utils/fetch-middleware';
import {Link} from 'react-router-dom'

// const EditableCell = ({ editable, value, onChange }) => (
//     <div>
//         {editable
//             ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
//             : value
//         }
//     </div>
// );
export default class Modify extends React.Component{
    state={
        data : [],
        pageNum: '1',
        pageSize: '3',
        total: '0'
    }
    search(args) {
        console.log('222')
        const {pageNum,pageSize} = this.state;
        const params = {
            pageNum,
            pageSize,
            ...args,
        }

        FetchAPI(`/teacher?pageNum=${params.pageNum}&pageSize=${params.pageSize}`, 'GET').then((data) => {
            this.setState({
                pageNum: data.current,
                total:data.total,
                pageSize: data.size,
                data: data.records
            })
            console.log(data)
        })

    }

    columns = [{
        title: '教师编号',
        dataIndex: 'tnumber',
    }, {
        title: '教师姓名',
        dataIndex: 'teaName',
    }, {
        title: '性别',
        dataIndex: 'sex',
    },{
        title:'年龄',
        dataIndex:'age',
    },{
        title:'身份证号码',
        dataIndex:'idCard',
    },{
        title:'工资',
        dataIndex:'salary',
    },{
        title:'状态',
        dataIndex:'status',
    },{
        title:'备注',
        dataIndex:'remark',
    },{
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
            console.log('=====>',record)
            return (
                <div className="editable-row-operations">
                    {/*<Link to="/">修改</Link>*/}
                    <span onClick={()=>this.edit(record)}>
                        修改
                    </span>
                </div>
            );
        },
    }];

    edit(obj) {
        this.props.history.push('/edit',{some:obj})
    }
    componentWillMount(){
        const {data} = this.state
        // for (let i = 0; i < 100; i++) {
        //
        //     data.push({
        //         key: i.toString(),
        //         name: `Edrward ${i}`,
        //         age: 32,
        //         address: `London Park no. ${i}`,
        //     });
        // }
        this.search();
        // this.setState({data:data})
    }
    onChange = (page) =>{
        alert(page)
        this.setState({pageNum:page})
        this.search({
            pageNum: page
        })
    }
    render() {
        return (
            <div>
                <Table bordered dataSource={this.state.data} pagination={false} columns={this.columns} />
                <div>
                    <Pagination current={this.state.pageNum} pageSize={this.state.pageSize} total={this.state.total} onChange={this.onChange} />
                </div>
            </div>
        );
    }
}