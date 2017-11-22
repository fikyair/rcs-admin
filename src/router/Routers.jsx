import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Bundle from './DynamicRoute';
import TraceComs from '../pages/TraceComs';
import HomePage from '../pages/HomePage';
import InstanceComs from '../pages/InstanceComs';
import ServiceTree from '../pages/ServiceTree';
import Login from '../pages/login/Login';
import Page from '../pages/Pagination';
import MenuComs from '../components/MenuComs';
import { InitComs } from  '../common/PublicComponent'

export default (
  <div>
    <BrowserRouter basename={''} >
      <div>
          <InitComs />
          <MenuComs />
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/trace" component={TraceComs} />
          <Route path="/instance" component={InstanceComs} />
          <Route path="/servicetree" component={ServiceTree} />
          <Route path="/login" component={Login} />
          <Route path="/page" component={Page} />
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



