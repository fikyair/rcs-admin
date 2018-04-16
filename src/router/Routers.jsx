import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import MenuComs from '../components/MenuComs';
import {InitComs} from '../common/PublicComponent';
import {renderRoutes} from 'react-router-config';
import {commontLimtRouter} from './common.config.js';
import {root} from "./root.config.js"
import BreadCrumbComs from '../components/BreadCrumbComs'
import Navigation from "../components/Navigation";

const routes = [
    {
        path: '/',
        component: ({route}) => (
            <div>
                {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
            </div>
        ),
        routes: [...commontLimtRouter, ...root]
    }
]

export default (
    <div>
        <BrowserRouter basename={''}>
            <div>
                <InitComs/>
                {/*<MenuComs/>*/}
                {/*<BreadCrumbComs routes={commontLimtRouter.concat(merchantLimitRouter).concat(root)}/>*/}

                <Navigation/>
                {renderRoutes(routes)}
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



