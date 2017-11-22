import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asyncCookie,clearErrMsg } from '../actions';
import { Spin, Alert } from 'antd';



/*
 * 三类组件，公有组件无需用户权限，私有组件需要登陆状态，复用组件多条产品线复用。
 * 复用组件又分公有复用组件，和私有复用组件
 *
 * ***/


export class PublicComponent extends React.Component{

  static loginStatus;
  static userInfo;
  constructor(props, state){
    super(props, state);
      this.loginStatus = '';
      this.userInfo = '';
  }
}



export class ProtectedComponent extends React.Component{
  static loginStatus;
  static userInfo;
  constructor(props, state){
    super(props, state);
    this.loginStatus = isLogin();
    this.userInfo = getUserInfo();
    if(!this.loginStatus){
      this.props.history.push(`/page1`)
    }
  }
}


export const PublicContainer = (function(mapStateToProps,mapDispatchToProps,Component) {
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
});

export const Containerization = (mapStateToProps) =>(Component)=> {
  if(mapStateToProps ){
      return withRouter(connect(mapStateToProps)(Component))
  } else {
      return withRouter(Component);
  }

};

/*
* 高阶组件用于实现本地状态同步，数据初始化
* */
@Containerization((state)=>({
    loginToken:state.PromiseReducer.loginToken,
    requestStaus:state.PromiseReducer.requestStaus,
    errMsg:state.PromiseReducer.errMsg,

}))
export class InitComs extends React.Component{
  constructor(props){
    super(props);
    const token  = $.cookie('token');
    this.props.dispatch(asyncCookie({token:token}));

  }

  timer = null;

  componentWillReceiveProps(nextProps){
    if(nextProps.errMsg ){
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        this.clearErrMsg('');
      },10000)
    }
  }

  clearErrMsg(msg){
    this.props.dispatch(clearErrMsg(msg))
  }
  render(){
    const {requestStaus, errMsg } = this.props;
    //请求状态，网络请求错误提示
    return  (<div>
        {requestStaus? <Spin></Spin>:null}
        {
            errMsg?
          <Alert message={errMsg} type="error" /> :null
        }
        </div>)
  }

}