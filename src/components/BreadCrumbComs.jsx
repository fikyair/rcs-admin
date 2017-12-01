import { Breadcrumb } from 'antd';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const breadcrumbNameMap = {
  '/limitdetails': '限额详情',
  '/limitManager': '限额管理',
  '/limitManager/add': '添加限额',
  '/limitManager/update': '修改限额',
  '/limitManager/operationrecoerd': '限额操作记录',
  '/limitManager/personalityset': '设置给性限额',
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
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {breadcrumbNameMap[url]}
          </Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to="/">首页</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    this.setState({breadcrumbItems:breadcrumbItems})
  }

  render(){
    const { breadcrumbItems } = this.state;
    return (<Breadcrumb style={{padding: '10px'}}>
      { breadcrumbItems }
    </Breadcrumb>)
  }
}