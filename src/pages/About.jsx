import React from 'react';
import '../style/about.less';
import {Card} from 'antd';
import logo from '../img/logo.png';
import {AboutAiJia, ConcatAiJia, JoinAiJia} from '../components/AboutItems';
import { Link } from 'react-router-dom';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';

export default class About extends React.Component {

    state = {
        about: true,
        concat: false,
        join: false,
        flag: 'about',
        changeA: true,
        changeB: false,
        changeC: false,
     }


    left = () => {
        if (this.state.about) {
            return (
                <AboutAiJia/>
            )
        } else if (this.state.concat) {
            return (
                <ConcatAiJia/>
            )

        }else {
            return(
                <JoinAiJia/>
            )
        }

    }

    itemClick = (flag) => {
        if(flag === 'about'){
            this.setState({about: true, concat: false, changeB: false, changeA: !this.state.changeA, changeC: false})
        }else if( flag === 'concat'){
            this.setState({about: false, concat: true, changeA: false, changeB: !this.state.changeB, changeC: false})
        }else {
            this.setState({about: false, concat: false, changeA: false, changeB: false ,changeC: !this.state.changeC})
        }

    }

    render() {
        return (
            <div>
                <div className="wrapper clearfix" style={{marginTop: 50}}>
                    <Card className="fl roomintro" noHovering={true}>
                        <div className="hp_usbox">
                            <ul>
                                <li className={this.state.changeA?'active': ''} onClick={()=>{this.itemClick('about')}}>
                                    <Link to='#' >关于爱家</Link>
                                </li>
                                <li className={this.state.changeB?'active': ''} onClick={()=>{this.itemClick('concat')}}>
                                    <Link to="#">联系爱家</Link>
                                </li>
                                <li className={this.state.changeC?'active': ''} onClick={()=>{this.itemClick('join')}}>
                                    <Link to="#">加入爱家</Link>
                                </li>
                            </ul>
                        </div>
                    </Card>

                    {this.left()}

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
                                    <img src = {pay} alt="下载爱家公寓APP"/>
                                    <p>加我支友</p>
                                </div>
                                <div className="website-f-pic">
                                    <img src = {weixin} alt="关注爱家公寓官方微信"/>
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
        );
    }
}