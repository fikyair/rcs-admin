import React from 'react'
import LimitManager from "bundle-loader?lazy!../pages/limit/LimitManager";
import Login from "bundle-loader?lazy!../pages/login/Login";
import Bundle from './DynamicRoute';


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
    }, {
        path: '/login',
        exact: true,
        component: (props) => BundleCom(props, Login),
    }, {
        path: '/login/:id',
        exact: true,
        component: (props) => BundleCom(props, Login),
    },]