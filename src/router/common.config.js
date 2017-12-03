import React from 'react';
import Bundle from './DynamicRoute';
import Login from 'bundle-loader?lazy!../pages/login/Login';
import LimitManager from 'bundle-loader?lazy!../pages/limit/LimitManager';
import LimitDetails from 'bundle-loader?lazy!../pages/limit/LimitDetails';
import LimitUpdate from 'bundle-loader?lazy!../pages/limit/LimitUpdate';
import OperationRecord from 'bundle-loader?lazy!../pages/limit/OperationRecord';
import LimitModel from 'bundle-loader?lazy!../pages/limit/LimitModel';
import NewLimitModel from 'bundle-loader?lazy!../pages/limit/NewLimitModel';

import LimitHome from 'bundle-loader?lazy!../pages/merchentlimit/LimitHome'
import MerchentLimitDetails from 'bundle-loader?lazy!../pages/merchentlimit/MerchentLimitDetails'
import MerchentOperationRecord from 'bundle-loader?lazy!../pages/merchentlimit/MerchentOperationRecord'
import MerchentLimitAdd from 'bundle-loader?lazy!../pages/merchentlimit/MerchentLimitAdd'
import MerchentLimitModify from 'bundle-loader?lazy!../pages/merchentlimit/MerchentLimitModify'


const BundleCom = (props, loader) => {
    return (
        <Bundle load={loader}>
            {(Com) => <Com {...props}/>}
        </Bundle>
    )
}

export const commontLimtRouter = [
   {
        path: '/limitManager',
        exact: true,
       breadcrumbName: '限额首页',
        component: (props) => BundleCom(props, LimitManager),
    }, {
        path: '/limitupdate/:id/:type',
        exact: true,
        component: props => BundleCom(props, LimitUpdate)
    }, {
        path: '/limitdetails/:id',
        exact: true,
        breadcrumbName: '限额详情',
        component: (props) => BundleCom(props, LimitDetails),
    }, {
        path: '/operationrecord',
        exact: true,
        component: (props) => BundleCom(props, OperationRecord),
    }, {
        path: '/limitmodel',
        exact: true,
        component: (props) => BundleCom(props, LimitModel),
    }, {
        path: '/newlimitmodel',
        breadcrumbName: '增加',
        exact: true,
        component: props => BundleCom(props, NewLimitModel)
    }
]

