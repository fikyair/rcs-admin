import { Menu,Button } from 'antd';
import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import '../style/navigation.less';
import logo from '../img/logo.png';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Navigation extends React.Component {
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
                    className='nav_channel danke_header'
                >
                    <div >
                        <div className="fr logo" onClick={() => this.props.history.push('/')}>
                            <img src={logo} alt="logo"  width="130" height="28"/>
                        </div>
                    </div>
                        {/*<div className="fl grline"></div>*/}
                    <Menu.Item key="index" style={{marginLeft: 300}}>
                        <Link to="/index" />首页
                    </Menu.Item>
                    <Menu.Item key="rent">
                        <Link to="/rent" />我要找房
                    </Menu.Item>
                    <Menu.Item key="about" style={{marginRight: 220}}>
                        <Link to="/about" />关于爱家
                    </Menu.Item>
                    <div className=" serphone">
                        <div className="phonetime">
                            客服热线：09:00 ~ 21:00
                        </div>
                        <div className="phonenum">
                            400-818-5656
                        </div>
                        <div className="fr user">
                            <Link to="/login"/>登录
                        </div>
                    </div>
                </Menu>
        );
    }
}
export  default  Navigation = withRouter(Navigation)