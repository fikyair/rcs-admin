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
        component: (props) => BundleCom(props, LimitManager),
    }, {
        path: '/limitManager/+update/:id',
        exact: true,
        component: props => BundleCom(props, LimitUpdate)
    }, {
        path: '/limitdetails/:id',
        exact: true,
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
        path: '/limitManager/add',
        exact: true,
        component: props => BundleCom(props, NewLimitModel)
    }
]

