import React from 'react';
import Bundle from './DynamicRoute';
import LimitManager from 'bundle-loader?lazy!../pages/personal/LimitManager';
import LimitDetails from 'bundle-loader?lazy!../pages/personal/LimitDetails';
import LimitUpdate from 'bundle-loader?lazy!../pages/personal/LimitUpdate';
import OperationRecord from 'bundle-loader?lazy!../pages/personal/OperationRecord';
import NewLimitModel from 'bundle-loader?lazy!../pages/personal/NewLimitModel';


const BundleCom = (props, loader) => {
    return (
        <Bundle load={loader}>
            {(Com) => <Com {...props}/>}
        </Bundle>
    )
}


export const merchantLimitRouter = [
    {
        path: '/merchantlimit',
        exact: true,
        component: (props) => BundleCom(props, LimitManager),
    }, {
        path: '/merchantlimit/+update/:id',
        exact: true,
        component: props => BundleCom(props, LimitUpdate)
    }, {
        path: '/merchantlimit/+details/:id',
        exact: true,
        component: (props) => BundleCom(props, LimitDetails),
    }, {
        path: '/merchantlimit/+operationrecoerd/:id',
        exact: true,
        component: (props) => BundleCom(props, OperationRecord),
    },{
        path: '/merchantlimit/+add/:id/:maincode',
        exact: true,
        component: props => BundleCom(props, NewLimitModel)
    },
]

