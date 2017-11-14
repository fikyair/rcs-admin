import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Bundle from './DynamicRoute';
import TraceComs from '../pages/TraceComs';
import HomePage from '../pages/HomePage';
import InstanceComs from '../pages/InstanceComs';
import ServiceTree from '../pages/ServiceTree';
import MenuComs from '../components/MenuComs';



export default (
  <div>
    <BrowserRouter basename={''} >
      <div>
          <MenuComs />
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/trace" component={TraceComs} />
          <Route path="/instance" component={InstanceComs} />
          <Route path="/servicetree" component={ServiceTree} />
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



