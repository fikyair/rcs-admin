import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import Router from 'react-router-dom/Router';
import {history} from './router/History';
import store from './store';
import routes  from './router/Routers';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';
import { setCurrentLoginUser }  from './common/permission'
import {initSysInfo} from "./utils/utils";

// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}
window.addEventListener('message',(e)=>{
  if(e.source!=window.parent) return;
  debugger;
  setCurrentLoginUser(JSON.parse(e.data));

})

initSysInfo()
ReactDom.render(
  <Provider store={store}>
    <Router history={history} >
      {routes}
    </Router>
  </Provider>
, document.getElementById('content'));
