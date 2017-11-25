import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import Router from 'react-router-dom/Router';
import { history } from './router/History';
import store from './store';
import routes  from './router/Routers';
/*
* whatwg 是fetch API的统一版本，在不支持fetch的浏览器中处理兼容问题，同时引入轻量的promise库
* */
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import {initSysInfo} from "./utils/utils";

import { setCurrentLoginUser,checkPermission }  from './common/permission';

// To add to window, 定义全局变量
if (!window.Promise) {
    window.Promise = Promise;
    window.checkPermission = checkPermission;
}

/*
* 与统一门户集成，监听同步信息
* */

window.addEventListener('message',(e)=>{
  if(e.source!=window.parent) return;
  debugger;
  setCurrentLoginUser(JSON.parse(e.data));
});

initSysInfo()
ReactDom.render(
  <Provider store={store}>
    <Router history={history} >
      {routes}
    </Router>
  </Provider>
, document.getElementById('content'));
