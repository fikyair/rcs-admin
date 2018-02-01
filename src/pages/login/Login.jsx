import React from 'react';
import '../../style/login.less';
import '../../style/footer.less';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    state={
        className: false,
        userName: 'none',
        info: '',
    }

    spanClick(){
        this.setState({className: !this.state.className})
    }
    phoneCheck(e){
        let val = e.target.value;
        if(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(val)){
            setTimeout(function(){
                this.setState({"info":""});
            }.bind(this),1000);
        }else{
            this.setState({"info":"请输入正确的手机号!"});
        }
        this.setState({"val":val , userName: 'block',});
    }

    render() {
        return (
            <div>
                <div className="m-content">
                    <div className="m-content_mid">
                        <div className="modal-content logins" id="logins" style={{display: 'block'}}>
                            <div className="separator m_icon"></div>

                            <div className="control-group">
                                <span className="m_icon user"></span>
                                <input type="text" name="user_name" onChange={(e)=>this.phoneCheck(e)} id="user_name" placeholder="请输入用户名或手机号或邮箱"
                                       className="inp_txt" tabIndex="1"/>
                                <p htmlFor="user_name" className="invalid" style={{display: this.state.userName}}>{this.state.info}</p>
                            </div>
                            <div className="control-group">
                                <span className="m_icon pas"></span>
                                <input type="password" name="user_pas" id="user_pas" placeholder="请输入6-16位密码"
                                       className="inp_txt" tabIndex="2"/>
                                <p htmlFor="user_pas" className="invalid" style={{display: 'none'}}></p>
                            </div>

                            <div className="control-group " id="captcha_tr" style={{display: 'none'}}>
                                <input type="hidden" id="is_captcha" value="0"/>


                                <div className="clearfix">
                                    <input type="text" name="verification" id="verification" placeholder="请输入验证码"
                                           className="inp_txt inp_yzm" tabIndex="3"/>
                                    <img src="" width="114" height="45" className="cur_pointer captcha_img"
                                         id="J-m-img"/>
                                    <span className="m_icon refurbish"></span>
                                </div>

                                <p htmlFor="verification" className="invalid" style={{display: 'none'}}></p>
                            </div>

                            <div className="control-group clearfix">
                                <p className="fl checkbox" id="within">
                                    <label htmlFor="within_a_week">
                                        <span className={this.state.className?'m_icon m_icon_active':'m_icon'} onClick={() => {this.spanClick()}} id="J-m-isSeven" data-isseven="0"></span>
                                        <input type="checkbox" id="within_a_week"/>一周内免登录
                                    </label>
                                </p>
                                <a href="#" className="fr org">忘记密码？</a>
                            </div>
                            <div className="control-group clearfix">

                                <Link to = "/personal"> <input type="button" value="登 录" className="org_btn" id="login_button"/> </Link>

                            </div>

                            <div className="control-group clearfix">

                            </div>

                            <div className="control-group clearfix tc bottom">
                                没有账号？现在就 <a href="/register" className="org"
                                            id="toSignup">注册</a>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="footer-new">
                    <div className="wrapper">
                        <div className="clear"></div>
                        <div className="foot-logo">
                            <div className="foot-logo-box">
                                <a href="//www.dankegongyu.com/" className="logo">
                                    <img src = {logo} alt="愛家房屋官网图片" title="愛家房屋官网" width="140" height="28"/>
                                </a>
                                <span>© 2017 愛家房屋 京ICP备15009197号-1<br/>地址：北京市东城区朝阳门内大街8号朝阳首府2层212 </span>
                            </div>
                            <div className="web-belive">
                                <a href="//www.baidu.com/s?wd=%E7%B4%AB%E6%A2%A7%E6%A1%90%28%E5%8C%97%E4%BA%AC%29%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8@v" target="_blank"><img src="//s3.wutongwan.org/img/public/zxrz2016.jpeg"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
