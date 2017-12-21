import { Breadcrumb, Card } from 'antd';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const breadcrumbNameMap = {
  '/rent': '我要租房',
  '/limitManager': '限额管理',
  '/limitManager/add': '添加限额',
  '/limitManager/+update/:params': '修改限额',
  '/limitManager/+operationrecord/:params': '限额操作记录',
  '/limitManager/+details/:params': '限额详情',
};

@withRouter
export default class BreadCrumbComs extends React.Component{
  state = {
    breadcrumbItems:null,
    docTitle:'',
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

    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((v, index) => {
        if(v.indexOf('+') >= 0 ){
            return null;
        } else if( index > 0 && pathSnippets[index-1].indexOf('+')>=0){
          const url1 = `/${pathSnippets.slice(0, index ).join('/')}/:params`;
          const url2 = `/${pathSnippets.slice(0, index+1 ).join('/')}`;
          return (
            <Breadcrumb.Item key={url2} name={breadcrumbNameMap[url1]}>
                <Link to={url2}>
                  {breadcrumbNameMap[url1]}
                </Link>
            </Breadcrumb.Item>
          );
        } else {
          const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
          return (
            <Breadcrumb.Item key={url} name={breadcrumbNameMap[url]}>
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

    if(extraBreadcrumbItems.length >0){
      this.setState({breadcrumbItems:extraBreadcrumbItems,docTitle:extraBreadcrumbItems[extraBreadcrumbItems.length-1].props.name})
    }
  }

  render(){
    const { breadcrumbItems, docTitle } = this.state;
    return (
      <div style={{marginBottom: '10px'}} bodyStyle={{padding:'10px',marginBottom:'10px'}}>
        <Breadcrumb >
           { breadcrumbItems }
        </Breadcrumb>
      </div>)
  }
}