import React from 'react'
import TraceComs from 'bundle-loader?lazy!../pages/TraceComs';
import HomePage from 'bundle-loader?lazy!../pages/HomePage';
import InstanceComs from 'bundle-loader?lazy!../pages/InstanceComs';
import ServiceTree from 'bundle-loader?lazy!../pages/ServiceTree';
import Login from 'bundle-loader?lazy!../pages/login/Login';
import Page from 'bundle-loader?lazy!../pages/Pagination';
import MenuComs from 'bundle-loader?lazy!../components/MenuComs';
import {InitComs} from 'bundle-loader?lazy!../common/PublicComponent'
import {renderRoutes} from 'react-router-config'
import Bundle from './DynamicRoute';

const BundleCom = (props,loader) => {
    return (
        <Bundle load={loader}>
            {(Com) => <Com {...props}/>}
        </Bundle>
    )
}

export const root = [
    {
        path: '/login',
        exact: true,
        component: (props) => BundleCom(props,Login),
    },
    {
        path: '/login/:id',
        exact: true,
        component: (props) => BundleCom(props,Login),    },
    {
        path: '/page',
        exact: true,
        component: (props) => BundleCom(props,Page),
    }, {
        path: '/servicetree',
        exact: true,
        component: (props) => BundleCom(props,ServiceTree),
    }, {
        path: '/instance',
        exact: true,
        component: (props) => BundleCom(props,InstanceComs),
    }, {
        path: '/trace',
        exact: true,
        component: (props) => BundleCom(props,TraceComs),
    }
]

