import React from 'react';
import Bundle from './DynamicRoute';
import LimitManager from 'bundle-loader?lazy!../pages/limit/LimitManager';
import Index from 'bundle-loader?lazy!../pages/Index';
import Rent from 'bundle-loader?lazy!../pages/Rent';
import About from 'bundle-loader?lazy!../pages/About';



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
    },{
        path: '/index',
        exact: true,
        component: (props) => BundleCom(props,Index),
    },{
        path:'/rent',
        exact: true,
        component: (props) => BundleCom(props,Rent),
    },{
        path: '/about',
        exact: true,
        component: (props) => BundleCom(props,About),
    },




    /* {
        path: '/limitManager/+update/:id',
        exact: true,
        component: props => BundleCom(props, LimitUpdate)
    }, {
        path: '/limitManager/+details/:id',
        exact: true,
        component: (props) => BundleCom(props, LimitDetails),
    }, {
        path: '/limitManager/+operationrecord/:id',
        exact: true,
        component: (props) => BundleCom(props, OperationRecord),
    }, {
        path: '/limitManager/add',
        exact: true,
        component: props => BundleCom(props, NewLimitModel)
    }*/
]

