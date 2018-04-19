import React from 'react';
import '../../style/login.less';
import '../../style/footer.less';
import logo from '../../img/logo.png';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import pay from '../../img/pay.jpg';
import weixin from '../../img/wexin.jpg';
import { Form, Button, Input } from 'antd';
import {Axios} from "../../utils/Axios";
const FormItem = Form.Item;

@Form.create()
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
        // if(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(val)){
        //     setTimeout(function(){
        //         this.setState({"info":""});
        //     }.bind(this),1000);
        // }else{
        //     this.setState({"info":"请输入正确的手机号!"});
        // }
        this.setState({"val":val , userName: 'block',});
    }
    loginClick(){
        this.props.form.validateFields((err, values) => {
            if(!err) {
                const formData = this.props.form.getFieldsValue();
                console.log("你提交的信息：",formData);
                Axios.post(`/user/userlogin`,formData).then((result) => {
                    console.log("登录返回的信息：",result.data);
                    if(result.data == null){
                      message.error("用户名不存在！");
                    }else {
                        if(result.data.uPwd == formData.uPwd) {
                            message.success("登录成功～")
                            //判断本地有user信息
                            localStorage.setItem("User_Authorization",JSON.stringify(result.data));
                            setTimeout(() => {
                                this.props.history.push('/personal');
                            },1000);
                        }else {
                            message.error("密码不正确！");
                        }
                    }
                })
            }
        })

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <div className="m-content">
                    <div className="m-content_mid">
                        <div className="modal-content logins" id="logins" style={{display: 'block'}}>
                            <div className="separator m_icon"></div>
                            <Form>
                                <div>
                                    <FormItem>
                                        { getFieldDecorator('uName',{
                                            rules: [{
                                                required: true, message: '用户名必须填写☺'
                                            }]
                                        })(
                                            <div className="control-group">
                                                <span className="m_icon user"></span>
                                                <input type="text" name="user_name" onChange={(e)=>this.phoneCheck(e)} id="user_name" placeholder="请输入用户名或手机号或邮箱"
                                                       className="inp_txt" tabIndex="1"/>
                                                <p htmlFor="user_name" className="invalid" style={{display: this.state.userName}}>{this.state.info}</p>
                                            </div>
                                        )}

                                    </FormItem>
                                </div>
                                <div>
                                    <FormItem>
                                        { getFieldDecorator('uPwd',{
                                            rules: [{
                                                required: true, message: '密码必须填写☺'
                                            }]
                                        })(
                                            <div className="control-group-withoutTop">
                                                <span className="m_icon pas"></span>
                                                <input type="password" name="user_pas" id="user_pas" placeholder="请输入密码"
                                                       className="inp_txt" tabIndex="2"/>
                                                <p htmlFor="user_pas" className="invalid" style={{display: 'none'}}></p>
                                            </div>

                                        )}
                                    </FormItem>
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
                                        <Button htmlType="submit" onClick={() => { this.loginClick()}} className="org_btn" id="login_button">
                                        登录
                                        </Button>
                                </div>

                                <div className="control-group clearfix">

                                </div>

                                <div className="control-group clearfix tc bottom">
                                    没有账号？现在就 <Link to="/register" className="org"
                                                id="toSignup">注册</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="wibsite-center">
                        <div className="footer-chain">爱家公寓连锁</div>
                        <div className="chain-box">
                            <label><a href="#">北京爱家公寓</a></label>
                            <label><a href="#">深圳爱家公寓</a></label>
                            <label><a href="#">上海爱家公寓</a></label>
                            <label><a href="#">杭州爱家公寓</a></label>
                            <label><a href="#">天津爱家公寓</a></label>
                            <label><a href="#">武汉爱家公寓</a></label>

                        </div>
                    </div>
                    <div className="website-help">
                        <div className="wibsite-center">
                            <div className="website-f-list">
                                <span>用户帮助</span>
                                <p><a href="#" target="_blank">入住指南</a></p>
                                <p><a href="#" target="_blank">生活常识</a></p>
                            </div>
                            <div className="website-f-list">
                                <span>商务合作</span>
                                <p><a href="#" target="_blank">商务合作</a></p>
                            </div>
                            <div className="website-f-list">
                                <span>公司信息</span>
                                <p><a href="#" target="_blank">关于爱家</a></p>
                                <p><a href="#" target="_blank">联系爱家</a></p>
                                <p><a href="#" target="_blank">加入爱家</a></p>
                            </div>
                            <div className="website-f-list">
                                <span>客服热线</span>
                                <p>400-818-5656</p>
                                <p>工作日 09:00-21:00</p>
                            </div>
                            <div className="website-f-right">
                                <div className="website-f-pic">
                                    <img src={pay} alt="下载爱家公寓APP"/>
                                    <p>加我支友</p>
                                </div>
                                <div className="website-f-pic">
                                    <img src={weixin} alt="关注爱家公寓官方微信"/>
                                    <p>好房随意挑，微信更方便</p>
                                </div>
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
