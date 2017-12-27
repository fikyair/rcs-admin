import React from 'react';
import '../../style/login.less';
import '../../style/footer.less';
import logo from '../../img/logo.png';


export default class Register extends React.Component {

    state={
        className: false,
        userName: 'none',
        info: '',
    }

    phoneCheck(e){
        let val = e.target.value;
        if(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(val)){
            setTimeout(function(){
                this.setState({"info":""});
            }.bind(this),1000);
        }else{
            this.setState({"info":"请输入符合格式的手机号或邮箱"});
        }
        this.setState({"val": val , userName: 'block',});
    }
    render() {
        return (
                <div>
                <div className="m-content">
                    <div className="m-content_mid">
                        <div className="modal" id="modal" style={{display: 'block'}}>
                            <div className="modal-content signup" id="signup" style={{display: 'block'}} >
                                <div className="separator m_icon"></div>
                                <form action="/api/index.php?r=user/register" method="post" id="m-j-sign_Form">

                                    <div className="control-group">
                                        <span className="m_icon tel_icon"></span>
                                        <input type="text" name="phone" onChange={(e)=>this.phoneCheck(e)} id="sign_name" placeholder="建议使用常用手机号" className="inp_txt"/>
                                            <p htmlFor="sign_name" className="invalid"  style={{display: this.state.userName}}>{this.state.info}</p>
                                    </div>
                                    <div className="control-group">
                                        <span className="m_icon pas"></span>
                                        <input type="password" name="password" id="sign_pas" placeholder="请输入6-16位密码" className="inp_txt"/>
                                            <p htmlFor="sign_pas" className="invalid" style={{display: 'none'}}>请输入6-16位密码</p>

                                    </div>

                                    <div className="control-group">
                                        <span className="m_icon pas"></span>
                                        <input type="password" name="password1" id="sign_pas_two" placeholder="请确认密码" className="inp_txt"/>
                                            <p htmlFor="sign_pas_two" className="invalid" style={{display: 'none'}}>请确认密码一致且符合格式</p>

                                    </div>
                                    <div className="control-group clearfix">
                                        <input type="button" value="注 册" className="org_btn" id="signup_button"/>
                                    </div>


                                    <div className="control-group clearfix tc bottom">
                                        已有账号？现在就 <a href="/login" id="toLogin" className="org">登录</a>
                                    </div>
                                </form>
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
