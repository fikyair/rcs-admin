import {Breadcrumb} from 'antd';
import React from 'react';
import {withRouter, Link} from 'react-router-dom';

const breadcrumbNameMap = {
    // 普通限额
    '/limitManager': '限额管理',
    '/limitManager/limitdetails': '限额详情',
    '/limitManager/newlimitmodel': '添加限额',
    '/limitManager/limitupdate': '修改限额',
    '/limitManager/operationrecord': '限额操作记录',
    '/limitManager/personalityset': '设置给性限额',

    // 商户限额

};

@withRouter
export default class BreadCrumbComs extends React.Component {
    state= {
        routes: [{
            path: 'limitManager',
            breadcrumbName: '首页'
        }]
    }
    /*state = {
        breadcrumbItems: null,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setBreadCrumItem(nextProps);
        }
    }

    componentWillMount() {
        this.setBreadCrumItem(this.props);
    }

    setBreadCrumItem(props) {
        debugger
        const {params} = props.match
        const {location} = props;
        const pathSnippets = location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {breadcrumbNameMap[url]}
                    </Link>
                </Breadcrumb.Item>
            );
        });
        const breadcrumbItems = [(
            <Breadcrumb.Item key="home">
                <Link to="/">首页</Link>
            </Breadcrumb.Item>
        )].concat(extraBreadcrumbItems);
        this.setState({breadcrumbItems: breadcrumbItems})
    }

    render() {
        const {breadcrumbItems} = this.state;
        return (<Breadcrumb style={{padding: '10px'}} params={this.props.params}>
            {breadcrumbItems}
        </Breadcrumb>)
    }*/

     componentWillMount() {
     }

    componentWillReceiveProps(nextProps) {
        this.setPath()
    }

    setPath(){
        let route = {
            path: this.props.history.location.pathname.toString().substring(1),
            breadcrumbName: this.props.history.location.pathname
        }
       this.state.routes.push(route)
        this.setState({routes:this.state.routes})
    }

    itemRender(route, params, routes, paths) {
        debugger
        const last = routes.indexOf(route) === routes.length - 1;
        console.log(params)
        return  <Link to={'/'+route.path}>{route.breadcrumbName}</Link>;
    }

    render() {
        return <Breadcrumb itemRender={this.itemRender}  routes={this.state.routes}/>;

    }
}