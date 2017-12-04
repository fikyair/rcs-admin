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

export const merchantLimitRouter = [
    {
        path: '/limitManager/merchant',
        exact: true,
        breadcrumbName: '个性限额首页',
        component: (props) => BundleCom(props, LimitManager),
    }, {
        path: '/limitupdate/merchant/:id/:type',
        exact: true,
        breadcrumbName: '修改个性限额',

        component: props => BundleCom(props, LimitUpdate)
    }, {
        path: '/limitdetails/merchant/:id',
        exact: true,
        breadcrumbName: '个性限额详情',
        component: (props) => BundleCom(props, LimitDetails),
    }, {
        path: '/operationrecord/merchant',
        exact: true,
        breadcrumbName: '个性限额操作记录',
        component: (props) => BundleCom(props, OperationRecord),
    }, {
        path: '/limitmodel/merchant',
        exact: true,
        component: (props) => BundleCom(props, LimitModel),
    }, {
        path: '/newlimitmodel/merchant',
        exact: true,
        breadcrumbName: '新增个性限额',
        component: props => BundleCom(props, NewLimitModel)
    },
]

