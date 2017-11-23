import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import MenuComs from '../components/MenuComs';
import { InitComs } from  '../common/PublicComponent';
import { renderRoutes } from 'react-router-config';
import { root } from './router.config.js';
import BreadCrumbComs from '../components/BreadCrumbComs'

const routes = [
    {
        path: '/',
        component: ({route}) => (
            <div>
                {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
            </div>
        ),
        routes: [...root]
    }
]

export default (
  <div>
    <BrowserRouter basename={''} >
      <div>
          <InitComs />
          <MenuComs />
          <BreadCrumbComs />
          {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  </div>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLogin ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)



