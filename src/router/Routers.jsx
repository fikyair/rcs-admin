import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import MenuComs from '../components/MenuComs';
import {InitComs} from '../common/PublicComponent';
import {renderRoutes} from 'react-router-config';
import {commontLimtRouter, adminRouter} from './common.config.js';
import {root} from "./root.config.js"
import BreadCrumbComs from '../components/BreadCrumbComs'
import Navigation from "../components/Navigation";
import NoMatch from "../pages/error/NoMatch";

const routes = [
    {
        path: '/',
        component: ({route}) => (
            <div>

                {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
            </div>
        ),

        routes: [...commontLimtRouter]   //routes: [...commontLimtRouter,...root]  去掉了404匹配
    }
]

const flatRouters = [
    {
        path: '/',
        component: ({route}) => (
            <div>
                {renderRoutes(route.routes, {someProp: 'no no no'})}
            </div>
        ),
        routes: [ ...adminRouter]
    }
]

const data = [
    //  https://localhost:3200/ 未匹配
    "/index",
    "/rent",
    "/about",
    "/platDetails",
    "/personal",
    "/register",
    "/login",
]
export default (
    <div>
        <BrowserRouter basename={''}>
            <div>
                <InitComs/>
                {
                    data.map((v,k)=>{
                        return <Route key = {k} component={Navigation} path={v} />
                    })
                }
                {/*<MenuComs/>*/}
                {/*<BreadCrumbComs routes={commontLimtRouter.concat(merchantLimitRouter).concat(root)}/>*/}
                {renderRoutes(routes)}
                {renderRoutes(flatRouters)}
            </div>
        </BrowserRouter>
    </div>
)

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isLogin ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
        )
    )}/>
)



