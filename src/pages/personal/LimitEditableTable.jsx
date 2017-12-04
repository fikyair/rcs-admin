import React from 'react';
import { Table, Pagination } from 'antd';
const datamock=[{
    key: '1',
    singleLimit: '12000',
    dayAmountLimit: '1325',
    monthAmountLimit: '4532',
    yearAmountLimit: '781501',
    lifeAmountLimit: '12452',
    twoIntervals: '450',
    strokeCount: '500',
    stroke: '12330',
    state: '1',
    operational: '王永飞',
    operationTime: '2017-11-29 12:30:12'
}];
function showTotal(total) {
    return `Total ${total} items`;
}
export default class EditableTable extends React.Component {
    state = {
        pageNum : 1,
        pageSize: 3,
        total: 0,
        data: [],
        key: '1',
    };
    constructor(props) {
        super(props);
        this.columns = [{
            title: '单笔(金额)',
            dataIndex: 'singleLimit',
        }, {
            title: '单日(金额)',
            dataIndex: 'dayAmountLimit',
        },  {
            title: '单月(金额)',
            dataIndex: 'monthAmountLimit',
        },{
            title: '年(金额)',
            dataIndex: 'yearAmountLimit',
        },{
            title: '终身(金额)',
            dataIndex: 'lifeAmountLimit',
        },{
            title: '两笔间隔(秒)',
            dataIndex: 'twoIntervals',
        },{
            title: '笔数/分钟',
            dataIndex: 'strokeCount',
        },{
            title: '笔/日',
            dataIndex: 'stroke',
        },{
            title: '状态',
            dataIndex: 'state',
        },{
            title: '操作人',
            dataIndex: 'operational'
        },{
            title: '操作时间',
            dataIndex: 'operationTime',
        }];


    }

    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Table bordered dataSource={datamock}  pagination={false} columns={columns} />

                <div style={{textAlign: 'left',marginTop: 20}}>
                    <Pagination size="large" total={50} showSizeChanger showQuickJumper />
                </div>
            </div>
        );
    }
}
