import React from 'react'
import TraceComs from 'bundle-loader?lazy!../pages/TraceComs';
import LimitDetails from 'bundle-loader?lazy!../pages/LimitDetails';
import ServiceTree from 'bundle-loader?lazy!../pages/ServiceTree';
import Login from 'bundle-loader?lazy!../pages/login/Login';
import Page from 'bundle-loader?lazy!../pages/Pagination';
import Record from 'bundle-loader?lazy!../pages/cardbin/Record';
import NewAdded from 'bundle-loader?lazy!../pages/cardbin/NewAdded';
import Modify from 'bundle-loader?lazy!../pages/cardbin/Modify';
import HomePage from 'bundle-loader?lazy!../pages/HomePage';
import Bundle from './DynamicRoute';
import LimitManager from 'bundle-loader?lazy!../pages/cardbin/LimitManager';
import LimitModel from 'bundle-loader?lazy!../pages/limit/LimitModel';
import Address from 'bundle-loader?lazy!../components/Address'

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
        path: '/limitdetails',
        exact: true,
        component: (props) => BundleCom(props,LimitDetails),
    }, {
        path: '/trace',
        exact: true,
        component: (props) => BundleCom(props,TraceComs),
    }, {
        path: '/record',
        exact: true,
        component: (props) => BundleCom(props,Record),
    }, {
        path: '/limitManager',
        exact: true,
        component: (props) => BundleCom(props,LimitManager),
    },{
        path:'/newadded',
        exact:true,
        component: (props) => BundleCom(props,NewAdded),
    },{
        path:'/modify',
        exact:true,
        component: (props) => BundleCom(props,Modify),
    }
    , {
        path: '/Address',
        exact: true,
        component: (props) => BundleCom(props,Address),
    }, {
    path: '/Limitmodel',
    exact: true,
    component: (props) => BundleCom(props,LimitModel),
  }
]

