import {Breadcrumb} from 'antd';
import React from 'react';
import {withRouter, Link} from 'react-router-dom';

@withRouter
export default class BreadCrumbComs extends React.Component {
    state = {
        routes: []
    }
    componentWillMount() {

        this.setPath()

    }
    componentWillReceiveProps(nextProps) {
        let name = ''
        let path = ''
        let routes = this.props.routes
        routes.map(data => {
            if (data.path !== '/') {
                let a = this.props.history.location.pathname.toString()
                let b = ''
                if (data.path.indexOf(':') > 0) {
                    b = data.path.split('/:')[0]
                }
                else {
                    b = data.path;
                }
                let flag = a.indexOf(b)
                if (flag >= 0) {
                    name = data.breadcrumbName
                    path = b
                }
            }

        })
        this.setPath(name, path)
    }

    setPath(name, path) {
        let flag = false
        let list = this.state.routes
        let i = 0
        let route = {
            path: this.props.history.location.pathname.toString().substring(1),
            breadcrumbName: name
        }
        if (list.length != 0) {
            list = list.map(data => {
                let a = data.path.indexOf(path.substring(1))
                a >= 0 ? flag = true : null
                return a >= 0 ? route : data
            })
            !flag ? list.push(route) : null
            this.setState({routes: list})
        } else {
            list.push(route)
            this.setState({routes: list})
        }
    }

    itemRender(route, params, routes, paths) {
        return <Link to={'/' + route.path}>{route.breadcrumbName}</Link>;
    }

    render() {
        return <Breadcrumb itemRender={this.itemRender} routes={this.state.routes}/>;

    }
}