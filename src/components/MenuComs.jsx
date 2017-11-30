import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class  extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="app">
                    <Link to="/limitManager"/>
                    <Icon type="app" />限额管理
                </Menu.Item>
                <Menu.Item key="trace">
                    <Link to="/limitdetails/xxxxxx"/>
                    <Icon type="trace" />限额详情
                </Menu.Item>
                <Menu.Item key="instance">
                    <Link to="/operationrecord"/>
                    <Icon type="instance" />查看操作记录页面
                </Menu.Item>
                <Menu.Item key="servicetree">
                    <Link to="/servicetree"/>
                    <Icon type="servicetree" />服务树
                </Menu.Item>
            </Menu>
        );
    }
}