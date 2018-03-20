import React from 'react';
import Bundle from './DynamicRoute';
import Index from 'bundle-loader?lazy!../pages/Index';
import Rent from 'bundle-loader?lazy!../pages/Rent';
import About from 'bundle-loader?lazy!../pages/About';
import Login from 'bundle-loader?lazy!../pages/login/Login';
import Registe from 'bundle-loader?lazy!../pages/login/Registe';
import PlatDetails from 'bundle-loader?lazy!../pages/platDetails';
import Personal from 'bundle-loader?lazy!../pages/Personal';
import AdminIndex from "bundle-loader?lazy!../pages/admin/AdminIndex";
import NoMatch from "../pages/error/NoMatch";


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
    },{
        path: '/index/+index/:pName',
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
        component: (props) => BundleCom(props,Registe),
    },{
        path: '/platDetails',
        exact: true,
        component: (props) => BundleCom(props,PlatDetails),
    },{
        path: '/personal',
        exact: true,
        component: (props) => BundleCom(props, Personal),
    }
]


export const adminRouter = [
    {
        path: '/admin',
        exact: true,
        component: (props) => BundleCom(props,AdminIndex),
    }
]
