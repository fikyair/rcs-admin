import React from 'react';
import '../style/platDetails.less';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';
import logo from '../img/logo.png';
import { Axios } from "../utils/Axios";


export default class PlatDetails extends React.Component {

    state = {
        flatDetailsData: []
    }

    componentWillMount () {
        const { id: flatId} = this.props.match.params;
        console.log("ssss",flatId);
        Axios.get(`/flat/flatbyid/${flatId}`).then((result) => {
            const { data = [] } = result.data;
            this.setState({
                flatDetailsData: data,
            },() => {
                console.log("房屋详情：",this.state.flatDetailsData);
            })
        })
    }



    render() {
        // const flatDetailsData = this.state.flatDetailsData;
        // console.log("dsds",flatDetailsData[0].fPic);
        const data = this.state.flatDetailsData[0];

        return (
            <div>
                <div className="wrapper" style={{marginTop: 50}}>
                    <div className="room-detail">
                        <div className="room-detail-left">
                            <div className="carousel-inner">
                                <div className=" " data-slide-number="0">
                                    <img className="img-responsive" title={ data?data.fName:'' } alt={ data?data.fName:'' }
                                         width="600" height="450"
                                         src={data?data.fPic:''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="room-detail-right">
                            <div className="room-name">
                                <h1>{ data?data.fName:'' }
                                    <span> { data?data.fOrientation:''} </span>
                                </h1>
                            </div>
                            <div className="room-title">
                                <span>{data?(data.fShower==1&&data.fToilet==1?'独立卫浴':'无独立卫浴'):''}</span>
                                <span>{data?(data.fHeating==1?'集中供暖':''):''}</span>
                            </div>
                            <div className="room-price">
                                <div className="price-list moth">
                                    <label>月租金</label>
                                    <div className="room-price-sale">{ data?data.fPrice:'' }<em>元/月</em></div>
                                </div>
                            </div>

                            <div className="room-list-box">
                                <div className="room-detail-box">
                                    <div className="room-list">
                                        <label>面积：约{ data?data.fArea:''}㎡（以现场勘察为准）</label>
                                    </div>
                                    <div className="room-list">
                                        <label>编号：{ data?data.fId:''}</label>
                                    </div>
                                    <div className="room-list">
                                        <label>
                                            户型：{ data?data.fHabitable:''}
                                            <b className="methodroom-rent">{ data?data.fType.substr(0,data.fType.length-1):''}</b>
                                        </label>
                                    </div>
                                    <div className="room-list">
                                        <label>房龄：{ data?data.fAge:''}年</label>
                                    </div>
                                </div>

                                <div className="room-detail-box   on ">
                                    <div className="room-list">
                                        <label>朝向：{ data?data.fOrientation:''}</label>
                                    </div>
                                    <div className="room-list">
                                        <label>楼层：{ data?data.fFloor:''}层</label>
                                    </div>
                                    <div className="room-list">
                                        <label>
                                            <em>区域：{ data?data.fStreet:''}</em>
                                        </label>
                                    </div>
                                    <div className="room-list">

                                        <label >房屋描述：{ data?data.fDetails:''}</label>
                                    </div>
                                    <div className="room-list">

                                        <label >对住户的要求：{ data?data.fRequire:''}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="room-detail-user">
                                <div className="user-phone">
                                    <span>电话预约</span>
                                    <strong>400 - 818 - 5656</strong>
                                    <em>服务时间：9:00 - 21:00（节假日照常）</em>
                                </div>
                                <div className="viewroom" data-toggle="modal" data-target="#myroom">我要看房</div>
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