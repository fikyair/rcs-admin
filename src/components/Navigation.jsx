import React from 'react';
import {Containerization} from '../common/PublicComponent';
import {Menu, Button, Select} from 'antd';
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
@Containerization(state => ({
    provinceData: state.PlatReducer.NavProvinceData,
    provinceDataByName: state.PlatReducer.NavProvinceDataByPName,
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
                //console.log("按pName：===》",this.props.provinceDataByName)
        })
    }

    componentWillMount() {
        this.props.dispatch(get_province_by_pname('北京市')).then(() => {

        })
    }

    render() {
        const positionData = this.props.provinceData;

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