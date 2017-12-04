import React from 'react'
import LimitManager from "bundle-loader?lazy!../pages/limit/LimitManager";
import Login from "bundle-loader?lazy!../pages/login/Login";
import Bundle from './DynamicRoute';
import NoMatch from "../pages/NoMatch";


const BundleCom = (props, loader) => {
    return (
        <Bundle load={loader}>
            {(Com) => <Com {...props}/>}
        </Bundle>
    )
}

export const root = [
    {
        path: '/',
        exact: true,
        component: (props) => BundleCom(props, LimitManager),
        breadcrumbName: '首页',
    }, {
        path: '/login',
        exact: true,
        breadcrumbName: '登陆',
        component: (props) => BundleCom(props, Login),
    }, {
        path: '/login/:id',
        breadcrumbName: '登陆',
        exact: true,
        component: (props) => BundleCom(props, Login),
    },{
        component: NoMatch,
    }]