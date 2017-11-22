import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Bundle from './DynamicRoute';
import MenuComs from '../components/MenuComs';
import { InitComs } from  '../common/PublicComponent'
import { renderRoutes } from 'react-router-config'
import { root } from './router.config.js'

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
const BundleCom = (props,loader) => {
    return (
      <Bundle load={loader}>
        {(Com) => <Com {...props}/>}
      </Bundle>
    )
}



