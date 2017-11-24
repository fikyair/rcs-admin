import React from 'react';
import {FetchAPI} from '../utils/fetch-middleware'
import {Table, Pagination, Row} from 'antd'

export default class Page extends React.Component {
    state = {
        pageNum: 1,
        pageSize:3,
        total: 0,
        dataSource: []
    }

    componentWillMount() {
        this.search()
    }
    columns = [{
        title: 'ID',
        dataIndex: 'idCard',
        key: 'idCard',
    }, {
        title: '姓名',
        dataIndex: 'teaName',
        key: 'teaName',
    }, {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
    }];


    search(args) {
        // const {form: {getFieldsValue}} = this.props.form
        const {pageNum, pageSize} = this.state
        let params = {
            pageNum,
            pageSize,
            ...args
        }

        FetchAPI(`/teacher?pageNum=${params.pageNum}&pageSize=${params.pageSize}`,'GET').then((data)=>{
            this.setState(
                {
                    dataSource:data.records,
                    total: data.total,
                    pageSize: data.size,
                    pageNum: data.current

                }
            )
            console.log('====>',data)
        }).catch((err)=>{
            console.log(err);
        })

    }

    onChange = (page) => {
        this.setState({
            pageNum: page,
        });
        this.search({
            pageNum: page
        })


    }

    render(){
        return (
            <div>
                <Table
                    pagination={false}
                    dataSource={this.state.dataSource}
                    columns={this.columns} />
                <div style={{marginTop: '20px'}}></div>
                <Row type="flex" justify="end">
                <Pagination
                    current={this.state.pageNum}
                    pageSize={this.state.pageSize}
                    onChange={this.onChange}
                    total={this.state.total} />
                </Row>

            </div>
        )
    }
}