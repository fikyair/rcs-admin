import React from 'react';
import '../style/person.less';
import logo from '../img/logo.png';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';
export default class Personal extends React.Component {

    render() {
        return (
            <div>
                <div className="clearfix area mainCon">
                    <div
                        style={{
                            height: '50px',
                            background: 'rgba(255,244,225,.3)',
                            border: '1px solid rgba(255,160,1,.3)',
                            textAlign: 'center',
                            fontSize: '14px',
                            color: '#999',
                            lineHeight: '50px',
                            marginBottom: '10px'
                        }}>
                        <span style={{color: '#999', margin: '0 4px'}}>亲爱的爱家客您好，您感兴趣的房子要售罄了～</span>
                    </div>
                    <div className="slideLeft">
                        <ul>
                            <li className="myStore"><b></b><a href="#">我的收藏</a></li>
                            <li className="myLook"><b></b><a href="#">发布房屋</a></li>
                            <li className="myContract"><b></b><a href="#">我的订单</a></li>
                            <li className="myChange"><b></b><a href="#">我的留言</a></li>
                        </ul>
                    </div>
                    <div className="mainRight">
                        <div className="person clearfix">
                            <div className="photo fl">
                                <img src="http://pic.ziroom.com.cn/static/images/girl.png"
                                     onerror="this.src='http://i.ziroom.com/static/2014/images/gjnone.png'"/>
                            </div>
                            <div className="information fl">
                                <p className="p1">下午好，
                                    <span>
                                    <a href="http://passport.ziroom.com/index.php?r=user/index">
                                        爱家客
                                    </a>
                                </span>
                                </p>
                                <p className="p2">
                                    <a href="http://passport.ziroom.com/index.php?r=user/index">修改个人资料<i></i></a>
                                </p>
                                <p className="p3">
                                    <span className="active">已绑定手机号</span>
                                    <i className="phone active"></i>
                                    <span>未绑定邮箱</span>
                                    <i className="email "></i>
                                </p>
                            </div>
                            <div className="line fr"></div>
                        </div>

                        <div className="collection">
                            <h5>最近收藏</h5>
                            <ul className="clearfix">
                                <li>
                                    <a href="http://www.ziroom.com/z/vr/60815029">
                                        <div className="img">
                                            <img width="285" height="190"
                                                 src="http://pic.ziroom.com/house_images/g2/M00/ED/EC/ChAFfVpXVsmAfbUeAAzILUhLTBI245.jpg"/>
                                        </div>
                                        <div className="clearfix">
                                            <p className="name fl">东城安定门2号线,8号线鼓楼大街安德里北街25号院3居室-南卧</p>
                                            <p className="price fr">¥3290/月</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
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
        )
    }
}

