import { Breadcrumb } from 'antd';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const breadcrumbNameMap = {
  '/limitManager': '限额管理',
  '/limitManager/add': '添加限额',
  '/limitManager/+update/:params': '修改限额',
  '/limitManager/+operationrecoerd/:params': '限额操作记录',
  '/limitManager/+details/:params': '限额详情',


  '/merchantlimit': '个性限额管理',
  '/merchantlimit/add': '个性限额设置',
  '/merchantlimit/+update/:params': '修改个性限额',
  '/merchantlimit/+operationrecoerd/:params': '个性限额操作记录',
  '/merchantlimit/+details/:params': '个性限额详情',
};

@withRouter
export default class BreadCrumbComs extends React.Component{
  state = {
    breadcrumbItems:null,
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.location.pathname !== this.props.location.pathname){
      this.setBreadCrumItem(nextProps);
    }
  }

  componentWillMount(){
    this.setBreadCrumItem(this.props);
  }

  setBreadCrumItem(props){
      debugger;
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((v, index) => {
        if(v.indexOf('+') >= 0 ){
            return null;
        } else if( index > 0 && pathSnippets[index-1].indexOf('+')>=0){
          const url1 = `/${pathSnippets.slice(0, index ).join('/')}/:params`;
          const url2 = `/${pathSnippets.slice(0, index+1 ).join('/')}`;
          return (
            <Breadcrumb.Item key={url2}>
                <Link to={url2}>
                  {breadcrumbNameMap[url1]}
                </Link>
            </Breadcrumb.Item>
          );
        } else {
          const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
          return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                  {breadcrumbNameMap[url]}
                </Link>
            </Breadcrumb.Item>
          );
        }


    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
          <Link to="/">首页</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    this.setState({breadcrumbItems:extraBreadcrumbItems})
  }

  render(){
    const { breadcrumbItems } = this.state;
    return (<Breadcrumb style={{padding: '10px'}}>
      { breadcrumbItems }
    </Breadcrumb>)
  }
}