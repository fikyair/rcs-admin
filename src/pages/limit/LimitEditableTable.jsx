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
            title: '卡bin序号',
            dataIndex: 'cardBinNo',
            width: '30%',
        }, {
            title: '单笔限额',
            dataIndex: 'singleAmountLimit',
        }, {
            title: '日限额',
            dataIndex: 'dayAmountLimit',
        }, {
            title: '月限额',
            dataIndex: 'dayAmountLimit',
        },{
            title: '年限额',
            dataIndex: 'dayAmountLimit',
        },
            {
            title: '操 作',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];


    }
    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
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
