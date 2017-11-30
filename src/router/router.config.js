import React from 'react';
import Bundle from './DynamicRoute';
import LimitManager from 'bundle-loader?lazy!../pages/limit/LimitManager';
import LimitDetails from 'bundle-loader?lazy!../pages/limit/LimitDetails';
import OperationRecord from 'bundle-loader?lazy!../pages/limit/OperationRecord';

import Login from 'bundle-loader?lazy!../pages/login/Login';

import LimitModel from 'bundle-loader?lazy!../pages/limit/LimitModel';
import LimitHome from 'bundle-loader?lazy!../pages/merchentlimit/LimitHome'

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
    component: (props) => BundleCom(props,LimitManager),
  }, {
    path: '/login',
    exact: true,
    component: (props) => BundleCom(props,Login),
  }, {
    path: '/login/:id',
    exact: true,
    component: (props) => BundleCom(props,Login),
  }, {
    path: '/limitManager',
    exact: true,
    component: (props) => BundleCom(props,LimitManager),
  }, {
    path: '/limitdetails/:id',
    exact: true,
    component: (props) => BundleCom(props,LimitDetails),
  }, {
    path: '/operationrecord',
    exact: true,
    component: (props) => BundleCom(props,OperationRecord),
  }, {
    path: '/limitmodel',
    exact: true,
    component: (props) => BundleCom(props,LimitModel),
  }, {
    path: '/merchentlimithome',
    exact: true,
    component: (props) => BundleCom(props,LimitHome),
  }
]

