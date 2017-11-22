import React, {Component} from 'react';
import {Form} from 'antd';
import PaginationComponent from '../components/PaginationComponent';

@Form.create()
export default class UserList extends Component {
    state = {
        pageNum: 1,
        pageSize: 20,
        gettingUsers: false,
        users: [],
        total: 0,
        statusLoading: {},
        queryLoading: false,
    }

    search = (args) => {
        const {form: {getFieldsValue}} = this.props;
        const {pageNum, pageSize} = this.state;
        let params = {
            ...getFieldsValue(),
            pageNum,
            pageSize,
            ...args,
        };
        //　此处调用接口
        // fetch.get('/user/list', params).then(data => {
        //     console.log(data.list);
        //     this.setState({
        //         pageNum: data.pageNum,
        //         pageSize: data.pageSize,
        //         total: data.total,
        //         users: data.list,
        //     });
        // }).finally(() => {
        //     this.setState({
        //         gettingUsers: false,
        //         queryLoading: false,
        //     });
        // });
    }

    handlePageNumChange = (pageNum) => {
        this.setState({
            pageNum,
        });
        this.search({
            pageNum,
        });
    }
    handlePageSizeChange = pageSize => {
        this.setState({
            pageNum: 1,
            pageSize,
        });
        this.search({
            pageNum: 1,
            pageSize,
        });
    }

    componentWillMount() {
    }

    componentDidMount() {
        // 页面渲染完成，进行一次查询
        this.search();
    }

    render() {
        const {
            total,
            pageNum,
            pageSize,
        } = this.state;
        return (
            <div>

                <PaginationComponent
                    pageSize={pageSize}
                    pageNum={pageNum}
                    total={total}
                    onPageNumChange={this.handlePageNumChange}
                    onPageSizeChange={this.handlePageSizeChange}
                />
            </div>
        );
    }
}

