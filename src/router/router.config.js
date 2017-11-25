import React from 'react'
import TraceComs from 'bundle-loader?lazy!../pages/TraceComs';
import InstanceComs from 'bundle-loader?lazy!../pages/InstanceComs';
import ServiceTree from 'bundle-loader?lazy!../pages/ServiceTree';
import Login from 'bundle-loader?lazy!../pages/login/Login';
import Page from 'bundle-loader?lazy!../pages/Pagination';
import Record from 'bundle-loader?lazy!../pages/cardbin/Record';
import HomePage from 'bundle-loader?lazy!../pages/HomePage';
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
    path: '/',
    exact: true,
    component: (props) => BundleCom(props,HomePage),
  },
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
    }, {
        path: '/record',
        exact: true,
        component: (props) => BundleCom(props,Record),
    }
]

