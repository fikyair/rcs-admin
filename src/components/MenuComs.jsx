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
                    <Link to="/"/>
                    <Icon type="app" />首页
                </Menu.Item>
                <Menu.Item key="trace">
                    <Link to="/trace"/>
                    <Icon type="trace" />跟踪
                </Menu.Item>
                <Menu.Item key="instance">
                    <Link to="/instance"/>
                    <Icon type="instance" />实例概览
                </Menu.Item>
                <Menu.Item key="servicetree">
                    <Link to="/servicetree"/>
                    <Icon type="servicetree" />服务树
                </Menu.Item>
            </Menu>
        );
    }
}