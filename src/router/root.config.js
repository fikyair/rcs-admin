import React from 'react';
import Index from "bundle-loader?lazy!../pages/Index";
import Login from "bundle-loader?lazy!../pages/login/Login";
import Bundle from './DynamicRoute';
import NoMatch from "../pages/error/NoMatch";


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
        component: (props) => BundleCom(props, Index),
        breadcrumbName: '首页',
    }, {
        component: NoMatch,
    }
]