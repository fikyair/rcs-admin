import { Menu,Carousel } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import '../style/navigation.less';
import logo from '../img/logo.png';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export  default class Navigation extends React.Component {
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
            <div>

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className='nav_channel danke_header'
                >
                    <Menu.Item key="mail" disabled={true}>
                        <div className="fr logo">
                            <img src={logo} alt="logo"  width="130" height="28"/>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="index" >
                        <Link to="/index" />首页
                    </Menu.Item>
                    <Menu.Item key="rent">
                        <Link to="/rent" />我要找房
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about" />关于爱家
                    </Menu.Item>
                    <div className="fr serphone">
                        <div className="phonetime">
                            客服热线：09:00 ~ 21:00
                        </div>
                        <div className="phonenum">
                            400-818-5656
                        </div>
                    </div>
                </Menu>
                {/*<div className="danke_header" id="topbar">*/}
                    {/*<div className="nav_warp">*/}
                        {/*<div className="fl logo">*/}
                            {/*<img src={logo} alt="logo"  width="130" height="28"/>*/}
                        {/*</div>*/}

                        {/*<div className="fl grline"></div>*/}
                        {/*<div className="fl dkcity">*/}
                            {/*<span id="dropdownMenu1" data-toggle="dropdown" aria-expanded="false"><i></i>北京</span>*/}
                            {/*<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">*/}
                                {/*<li><a href="javascript:void(0)" rel="bj">北京市</a></li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                        {/*<div className="fl "  id="home-menu">*/}

                        {/*</div>*/}
                        {/*<div className="fr serphone">*/}
                            {/*<div className="phonetime">*/}
                                {/*客服热线：09:00 ~ 21:00*/}
                            {/*</div>*/}
                            {/*<div className="phonenum">*/}
                                {/*400-818-5656*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="shadow"></div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
