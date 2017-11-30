import React from 'react';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';

export default class EditableTable extends React.Component {
    state = {
        pageNum : 1,
        pageSize: 3,
        data: [],
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
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}
