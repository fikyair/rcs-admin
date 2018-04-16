import React from 'react';
import '../../style/login.less';
import '../../style/footer.less';
import logo from '../../img/logo.png';
import { Form, Button, Input } from 'antd';
import pay from '../../img/pay.jpg';
import weixin from '../../img/wexin.jpg';
const FormItem = Form.Item;
import {Containerization} from '../../common/PublicComponent';
import {
    get_user_register
} from '../../../src/actions/platfrontAction';
@Containerization(state => ({
    registerData: state.PlatReducer.registerData,
}))
@Form.create()
export default class Register extends React.Component {

    state = {
        className: false,
        userName: 'none',
        info: '',
    }

    phoneCheck(e) {
        let val = e.target.value;
        if (/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(val)) {
            setTimeout(function () {
                this.setState({"info": ""});
            }.bind(this), 1000);
        } else {
            this.setState({"info": "请输入符合格式的手机号"});
        }
        this.setState({"val": val, userName: 'block',});
    }

    handleRegister () {
        this.props.form.validateFields((err, values) => {
            if(!err) {
                const formData = this.props.form.getFieldsValue();
                console.log("你提交的信息：",formData);
            }
        })
        //this.props.dispatch(get_user_register())
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <div className="m-content">
                    <div className="m-content_mid">
                        <div className="modal" id="modal" style={{display: 'block'}}>
                            <div className="modal-content signup" id="signup" style={{display: 'block'}}>
                                <div className="separator m_icon"></div>
                                <Form >
                                    <div>
                                        <FormItem>
                                            { getFieldDecorator('uNickname',{

                                            })(
                                                <div className="control-group">
                                                    <span className="m_icon pas"></span>
                                                    <input type="password" name="password1" id="sign_pas_two" placeholder="请填入昵称"
                                                           className="inp_txt"/>
                                                </div>
                                            )}

                                        </FormItem>
                                    </div>
                                    <div>
                                        <FormItem>
                                            { getFieldDecorator('uPhone', {
                                                initialValue: '',
                                                rules: [{
                                                    //required: true, message: '用户名必须填写☺'
                                                }]
                                            })(
                                                <div className="control-group" >
                                                    <span className="m_icon tel_icon"></span>
                                                    <input  text = "text" name="phone" onChange={(e) => this.phoneCheck(e)}
                                                            id="sign_name" placeholder="建议使用常用手机号" className="inp_txt"/>
                                                    <p htmlFor="sign_name" className="invalid"
                                                       style={{display: this.state.userName}}>{this.state.info}</p>
                                                </div>
                                            )}
                                        </FormItem>
                                    </div>
                                    <div>
                                        <FormItem>
                                            { getFieldDecorator('uPwd', {
                                                initialValue:'',
                                                rules: [{

                                                }]
                                            })(
                                                <div className="control-group">
                                                    <span className="m_icon pas"></span>
                                                    <input type="password" name="password" id="sign_pas" placeholder="请输入6-16位密码"
                                                           className="inp_txt"/>
                                                    <p htmlFor="sign_pas" className="invalid" style={{display: 'none'}}>
                                                        请输入6-16位密码</p>
                                                </div>
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="control-group clearfix">
                                        <Button htmlType="submit" value="注 册" onClick = { () => { this.handleRegister()} } className="org_btn" id="signup_button"/>
                                    </div>


                                    <div className="control-group clearfix tc bottom">
                                        已有账号？现在就 <a href="/login" id="toLogin" className="org">登录</a>
                                    </div>
                                </Form>
                            </div>
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
                                    <img src={logo} alt="愛家房屋官网图片" title="愛家房屋官网" width="140" height="28"/>
                                </a>
                                <span>© 2017 愛家房屋 京ICP备15009197号-1<br/>地址：北京市东城区朝阳门内大街8号朝阳首府2层212 </span>
                            </div>
                            <div className="web-belive">
                                <a href="//www.baidu.com/s?wd=%E7%B4%AB%E6%A2%A7%E6%A1%90%28%E5%8C%97%E4%BA%AC%29%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8@v"
                                   target="_blank"><img src="//s3.wutongwan.org/img/public/zxrz2016.jpeg"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
