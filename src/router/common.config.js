import React from 'react';
import Bundle from './DynamicRoute';
import LimitManager from 'bundle-loader?lazy!../pages/limit/LimitManager';
import LimitDetails from 'bundle-loader?lazy!../pages/limit/LimitDetails';
import LimitUpdate from 'bundle-loader?lazy!../pages/limit/LimitUpdate';
import OperationRecord from 'bundle-loader?lazy!../pages/limit/OperationRecord';
import LimitModel from 'bundle-loader?lazy!../pages/limit/LimitModel';
import NewLimitModel from 'bundle-loader?lazy!../pages/limit/NewLimitModel';

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
        breadcrumbName: '限额添加',
        component: props => BundleCom(props, LimitUpdate)
    }, {
        path: '/limitdetails/:id',
        exact: true,
        breadcrumbName: '限额详情',
        component: (props) => BundleCom(props, LimitDetails),
    }, {
        path: '/operationrecord',
        exact: true,
        breadcrumbName: '操作记录',
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

