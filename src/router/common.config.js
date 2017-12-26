import React from 'react';
import Bundle from './DynamicRoute';
import Index from 'bundle-loader?lazy!../pages/Index';
import Rent from 'bundle-loader?lazy!../pages/Rent';
import About from 'bundle-loader?lazy!../pages/About';
import Login from 'bundle-loader?lazy!../pages/login/Login';
import Register from 'bundle-loader?lazy!../pages/Login/Register'


const BundleCom = (props, loader) => {
    return (
        <Bundle load={loader}>
            {(Com) => <Com {...props}/>}
        </Bundle>
    )
}

export const commontLimtRouter = [
   {
        path: '/',
        exact: true,
        component: (props) => BundleCom(props,Index),
    },{
        path: '/index',
        exact: true,
        component: (props) => BundleCom(props,Index),
    },
    {
        path:'/rent',
        exact: true,
        component: (props) => BundleCom(props,Rent),
    },{
        path: '/about',
        exact: true,
        component: (props) => BundleCom(props,About),
    },{
        path: '/login',
        exact: true,
        component: (props) => BundleCom(props,Login),
    },{
        path: '/register',
        exact: true,
        component: (props) => BundleCom(props,Register),
    },
]

