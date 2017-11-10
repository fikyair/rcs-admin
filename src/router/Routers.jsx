import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Bundle from './DynamicRoute';
import Page1 from 'bundle-loader?lazy!../pages/Page2';
import Page2 from 'bundle-loader?lazy!../pages/Page1';
import MenuComs from '../components/MenuComs';



export default (
  <div>
    <BrowserRouter basename={'app'} >
      <div>
          <MenuComs />
          <Route path="/" exact={true} component={(props)=>BundleCom(props, Page1)} />
        <Route path="/page1" component={(props)=>BundleCom(props, Page1)} />
        <Route path="/page2" component={(props)=>BundleCom(props, Page2)} />
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



