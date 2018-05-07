import React from 'react';
import {Containerization} from '../common/PublicComponent';
import {Menu, Button,Icon, Select} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import '../style/navigation.less';
import logo from '../img/logo.png';
import ads from '../img/ads.png';
import spri from '../img/spri.png';
import $ from 'jquery';
import {
    get_province_all,
    get_province_by_pname,
} from '../../src/actions/platfrontAction';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Option, OptGroup} = Select;

import {
    get_flat_all,
}from '../../src/actions/platfrontAction';
@Containerization(state => ({
    provinceData: state.PlatReducer.NavProvinceData,
    provinceDataByName: state.PlatReducer.NavProvinceDataByPName,
    flatAllDataInit: state.PlatReducer.flatAllData,
}))
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

    ulClick() {
        this.props.dispatch(get_province_all()).then(() => {
            console.log(">>>位置信息",this.props.provinceData);
            let $Uarry = $("#uldrop li");
            $Uarry.click(function () {
                let r = $(this).text();
                $("#dropdownMenu1").text(r);
            });
        });

    }
    handleLinkClick() {
       // const { pName } = this.props.match.params;
        const pName = $("#dropdownMenu1").text();
      //  console.log("当前位置：====》",$("#dropdownMenu1").text())
        this.props.dispatch(get_province_by_pname(pName)).then(() => {
        })
        // //查询所有的房源信息
        // this.props.dispatch(get_flat_all(pName)).then((result) => {
        //     console.log("本市，所有房源信息",result.data)
        //     debugger
        //     this.props.dispatch({type: 'API_GET_FLAT_ALL', data: result.data })
        // })
    }

    logout =()=> {
        this.props.history.push('/login');
        localStorage.clear();
    }

    componentWillMount() {
        this.props.dispatch(get_province_by_pname('北京市')).then(() => {

        })
    }

    render() {
        const positionData = this.props.provinceData;
        let loginName = '';
        if(localStorage.getItem("User_Authorization")!=null){
            const userInfo = localStorage.getItem("User_Authorization");
            const userInfoJSON = JSON.parse(userInfo);
            loginName = userInfoJSON.uName;
        }else{
            loginName = '登录';
        }

        return (

            <div>
                <div className="danke_hd_menu" id="hd_menu">

                    {
                        loginName == '登录'?
                            <div className="wibsite-center">
                                <div className="danke-login fl">
                                    <span className="welcome-text">欢迎来到爱家房屋</span>
                                    请<Link className="sign-btn js-sign-btn login" to="/login">登录</Link>
                                </div>
                            </div>:
                            <div className="wibsite-center">

                                <div className="danke-login fl">
                                    Hi， <span className="name">{loginName}</span>
                                    <span className="sign-btn js-sign-btn logout" onClick={ this.logout }>注销</span>
                                </div>
                                <ul className="hd_menu fr">
                                    <li className="type-center"><Link className="hd-sprite-ab" to="/personal">个人中心</Link></li>
                                    <li className="type-app line">
                                        <a className="hd-sprite-ab" href="#">电脑版</a>
                                        <div className="scan-code">
                                            <img src="//public.wutongwan.org/public-20180103-FloDHvXgSwGp4ugxhIa1gMuuE81T" alt="APP二维码"/>
                                            <span className="text gred9">扫码下载App</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    }
                </div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className='nav_channel danke_header'
                >
                    <div>
                        <div className="fr logo" onClick={() => this.props.history.push('/index')}>
                            <img style={{ marginTop: 8 }} src={logo} alt="logo" width="130" height="30"/>
                        </div>
                    </div>
                    <div className="fl dkcity">
                            <span data-toggle="dropdown" onClick={() => {
                                this.ulClick()
                            }} aria-expanded="true"
                                  style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                               <img src={ads}/>
                                <div id="dropdownMenu1">北京市</div>
                               <img src={spri} style={{marginLeft: 7}}/>
                            </span>
                        <ul id="uldrop" className="dropdown-menu">
                            {
                                positionData.map((data,k)=>{
                                    return(
                                       //  /index/+index/${data.pName}
                                        <li><a
                                                  k = {k}
                                                  style={{textDecoration: 'none'}}
                                                  rel="bj"
                                                  onClick = {()=>{this.handleLinkClick()}}
                                                  >{data.pName}</a></li>
                                    )
                                })
                            }

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
                            预约热线：09:00 ~ 21:00
                        </div>
                        <div className="phonenum">
                            400-818-5656
                        </div>

                    </div>
                </Menu>
            </div>
        );
    }
}

export default Navigation = withRouter(Navigation)

/*
* <span className="welcome-text">欢迎来到蛋壳公寓</span>
                            {
                                loginName == '登录'?(<Link to = '/login'>请<span className="sign-btn js-sign-btn login"> 登录</span></Link>):
                                    <Menu mode="horizontal" onClick={this.logout} className="sign-btn js-sign-btn login menu-fl">
                                        <SubMenu title={<span><Icon type="user" />{loginName}</span>}>
                                            <Menu.Item key="personal">个人中心</Menu.Item>
                                            <Menu.Item key="logout">注销</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                            }

* */