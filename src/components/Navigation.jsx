import {Menu, Button, Select} from 'antd';
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../style/navigation.less';
import logo from '../img/logo.png';
import ads from '../img/ads.png';
import spri from '../img/spri.png';
import $ from 'jquery';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Option, OptGroup} = Select;

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
    ulClick(){
        let $Uarry = $("#uldrop a");
        $Uarry.click(function(){
            let r = $(this).text();
            $("#dropdownMenu1").text(r);
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
                    <div>
                        <div className="fr logo" onClick={() => this.props.history.push('/')}>
                            <img src={logo} alt="logo" width="130" height="28"/>
                        </div>
                    </div>
                    <div className="fl dkcity">
                            <span  data-toggle="dropdown" onClick={() => {this.ulClick()}} aria-expanded="true" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                               <img src={ads} />
                                <div id="dropdownMenu1"　>北京市</div>
                               <img src={spri} style={{marginLeft: 7}}/>
                            </span>
                        <ul id = "uldrop" className="dropdown-menu" >
                            <li><a style={{textDecoration: 'none'}} href="javascript:void(0)" rel="bj">北京市</a></li>
                            <li><a style={{textDecoration: 'none'}} href="javascript:void(0)" rel="sz">深圳市</a></li>
                            <li><a style={{textDecoration: 'none'}} href="javascript:void(0)" rel="sh">上海市</a></li>
                            <li><a style={{textDecoration: 'none'}} href="javascript:void(0)" rel="hz">杭州市</a></li>
                            <li><a style={{textDecoration: 'none'}} href="javascript:void(0)" rel="tj">天津市</a></li>
                            <li><a style={{textDecoration: 'none'}} href="javascript:void(0)" rel="wh">武汉市</a></li>
                        </ul>
                    </div>
                    {/*<div className="fl grline"></div>*/}
                    <Menu.Item key="index" style={{marginLeft: '15%'}}>
                        <Link to="/index"/>首页
                    </Menu.Item>
                    <Menu.Item key="rent">
                        <Link to="/rent"/>我要找房
                    </Menu.Item>
                    <Menu.Item key="about" style={{marginRight: '15%'}}>
                        <Link to="/about"/>关于爱家
                    </Menu.Item>
                    <div className="serphone">
                        <div className="phonetime">
                            客服热线：09:00 ~ 21:00
                        </div>
                        <div className="phonenum">
                            400-818-5656
                        </div>
                            <Link to="/login"><span className="fr user">登录</span></Link>
                    </div>
                </Menu>
            </div>
        );
    }
}

export default Navigation = withRouter(Navigation)