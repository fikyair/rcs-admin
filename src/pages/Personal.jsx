import React from 'react';
import '../style/person.less';
import logo from '../img/logo.png';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';
import './style/personalissue.less';
import { Link } from 'react-router-dom';
import { Icon, message, Row, Col, Popconfirm, Card } from 'antd';
import moment from 'moment';
import { Favor, Issue, Appoint, Order, Message } from '../components/PersonalItems';

let  displayName;
if(localStorage.getItem("User_Authorization")!=null){
    const userInfo = localStorage.getItem("User_Authorization");
    const userInfoJSON = JSON.parse(userInfo);
    displayName = userInfoJSON.uName;
}else{
    displayName = '爱家客';
}
export default class Personal extends React.Component {

    state = {
        personal: true,
        favor: false,
        issue: false,
        appoint: false,
        order: false,
        message: false,
        flag: 'personal',
        img: 'ss'
    }

    ordering = () =>{
        console.log("嗯哼")
    }

    left = () =>{
        if(this.state.personal){
            return (
                <div className="mainRight"  style = {{ display: this.state.welcomeMainRight}}>
                    <div className="person clearfix">
                        <div className="photo fl">
                            <img src="http://pic.ziroom.com.cn/static/images/girl.png"
                                 onerror="this.src='http://i.ziroom.com/static/2014/images/gjnone.png'"/>
                        </div>
                        <div className="information fl">
                            <p className="p1">您好，
                                <span>
                                    <a href="#">
                                        { displayName }
                                    </a>
                                </span>
                            </p>
                            <p className="p2">
                                {/*<a href="#">修改个人资料<i></i></a>*/}
                            </p>
                            <p className="p3">
                                {/*<span className="active">已绑定手机号</span>*/}
                                {/*<i className="phone active"></i>*/}
                                {/*<span>未绑定邮箱</span>*/}
                                {/*<i className="email "></i>*/}
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
            )
        }else if (this.state.favor) {
            return (
                <div className="mainRight">
                    <div className="person clearfix">
                        <b>我的收藏</b>
                    </div>
                    <div className="person" >
                        <Row style = {{ marginBottom: 10, marginLeft: 10}}>
                            <Col span = {14}>
                                    房源信息
                            </Col>
                            <Col span = {2} >
                                    价格
                            </Col>
                            <Col span = {2}>
                                状态
                            </Col>
                            <Col span = {4}>
                                收藏时间
                            </Col>
                            <Col span = {2}>
                                操作
                            </Col>
                        </Row>
                        <Card style={{ width: '100%', marginRight: 5, background: '', bordered: 'false', marginBottom: 15}} bodyStyle={{ padding: 0 , display: 'inline-flex' }}>
                            <div className="custom-image" style={{  padding: '10px 10px', }}>
                                <img alt="example" width="137px" height="91px" src="http://aijia-flat-sh-1253646934.picsh.myqcloud.com/v800x600_ChAFD1qjq2iAJzjVAAJBuhFRSeI953.JPG" />
                            </div>
                            <div className="txt_li">
                                <p className="p1">
                                    南开广开街2号线,1号线西南角蘭园3居室
                                </p>
                                <p className="p2">29/34层 | 11.6 平方米 |合租</p>
                            </div>
                            <p style={{ marginTop: 12, marginLeft: 119 }}>2500元</p>
                            <p style={{ marginTop: 12, marginLeft: 28 }}>已入住</p>
                            <p style={{ marginTop: 12, marginLeft: 31 }}>2018-4-26</p>
                            <p style={{ marginTop: 12, marginLeft: 79 }}>删除</p>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.issue){
            return (
                <div className="mainRight">
                    <div className="person clearfix">
                        <b>发布房屋</b>
                    </div>
                    <div className="person">
                        <div className="m-form">
                            <div className="box-l m-entry">
                                <form  >
                                    <dl className="compact">
                                        <dt>小区所在城市</dt>
                                        <dd>
                                            <input className="sugInput" name="fCity" value={this.state.fCity} onChange={e=>this.setState({fCity:e.target.value})} type="text"  placeholder="请输入所在城市"/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>小区</dt>
                                        <dd className="wrap-sug">
                                            <div className="u-sug" id="u-sug">
                                                <input className="sugInput" name="fName" value={this.state.fName} onChange={e=>this.setState({fName:e.target.value})} type="text"  placeholder="请输入小区名"/>
                                                <ul style={{display: 'none'}}></ul>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>房屋地址</dt>
                                        <dd>
                                            <div className="u-select u-select-build">
                                                <input placeholder="楼栋号" name="fBuilding" className="u-select-selected"
                                                       onChange={e=>this.setState({fBuilding: e.target.value})}
                                                       type="text" value={this.state.fBuilding}/>
                                                <ul className="u-select-options hide" style={{display: 'none'}}></ul>
                                            </div>
                                            <div className="u-select u-select-build" >
                                                <input placeholder="单元号" name="fUnit" className="u-select-selected" type="text"
                                                       onChange={e=>this.setState({fUnit: e.target.value})}
                                                       value={this.state.fUnit}/>
                                                <ul className="u-select-options hide" style={{display: 'none'}}></ul>
                                            </div>
                                            <div className="u-select u-select-build" >
                                                <input placeholder="门牌号" name="fHouse" className="u-select-selected" type="text"
                                                       onChange={e=>this.setState({fHouse: e.target.value})}
                                                       value={ this.state.fHouse }/>
                                                <ul className="u-select-options hide"style={{display: 'none'}}></ul>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>期望价格</dt>
                                        <dd>
                                            <input name="fExpectPrice" value={ this.state.fExpectPrice } type="text"
                                                   placeholder="请输入您期望出租的价格"
                                                   onChange={e=>this.setState({fExpectPrice: e.target.value})}
                                                   style= {{width: 210}}/>
                                            <div className="unit">元/月</div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>称呼</dt>
                                        <dd>
                                            <input name="fOwnerName" value={ this.state.fOwnerName }
                                                   onChange={e=>this.setState({fOwnerName: e.target.value})}
                                                   type="text"
                                                   placeholder="我们应该如何称呼您"
                                                   style= {{width: 210}}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>手机号码</dt>
                                        <dd>
                                            <input name="fOwnerMobile" value={ this.state.fOwnerMobile }
                                                   onChange={e=>this.setState({fOwnerMobile: e.target.value})}
                                                   type="text"
                                                   placeholder="您的联系方式"
                                                   style= {{width: 210}}/>
                                        </dd>
                                    </dl>
                                    <input className="btn-submit" type="submit" onClick={this.onSubmit}  value="提交委托"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.appoint){
            return (
                <div className="mainRight">
                    <div className="person clearfix">
                        <b>我的约看</b>
                    </div>
                    <div className="person">
                           <Row style = {{ lineHeight: '28px', background: '#eee'}}>
                               <Col span = {10}>
                                   <Col span = {12}>
                                       房屋信息
                                   </Col>
                                   <Col span = {12} >
                                       价格
                                   </Col>
                               </Col>
                               <Col span = {2}>
                                   状态
                               </Col>
                               <Col span = {4}>
                                    预约时间
                               </Col>
                               <Col span = {4}>
                                    预约人
                               </Col>
                               <Col span = {4}>
                                    操作
                               </Col>
                           </Row>
                        <Row >
                            <Col span = {10}>
                                <Col span = {12}>
                                    <Col span = {24} style = {{ marginTop: 15 }} >
                                        <img width="130" height="90" src = "http://aijia-flat-sh-1253646934.picsh.myqcloud.com/v800x600_ChAFD1qjq2iAJzjVAAJBuhFRSeI953.JPG"/>
                                    </Col>
                                </Col>
                                <Col span = {12} >
                                    <Col span = {24} style = {{ marginTop: 45 }} >
                                        2630元
                                    </Col>
                                </Col>
                            </Col>
                            <Col span = {2} style = {{ marginTop: 45 }} >
                                未约看
                            </Col>
                            <Col span = {4}>
                                <Col span = {24} style = {{ marginTop: 45 }} >
                                    { moment().format("YYYY-MM-DD")}
                                </Col>
                            </Col>
                            <Col span = {4}>
                                <Col span = {24} style = {{ marginTop: 45 }} >
                                    薛时鸣
                                </Col>
                            </Col>
                            <Col span = {4}>
                                <Col span = {24} style = {{ marginTop: 45 }} >
                                    <Popconfirm title="是否删除?" onConfirm={() => this.ordering()}>
                                        <a>删除</a>
                                    </Popconfirm>
                                    <span className="ant-divider"/>
                                    <Popconfirm title="是否签约?" onConfirm={() => this.ordering()}>
                                        <a>我要签约</a>
                                    </Popconfirm>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        }else if (this.state.order){
            return (
                <div className="mainRight">
                    <div className="person clearfix">
                        <b>我的订单</b>
                    </div>
                    <div className="person">
                        <Row style = {{ lineHeight: '28px', background: '#eee'}} >
                            <Col span = {10}>
                                <Col span = {12}>
                                    房屋信息
                                </Col>
                                <Col span = {12} >
                                    价格
                                </Col>
                            </Col>
                            <Col span = {4}>
                                下单时间
                            </Col>
                            <Col span = {4}>
                                下单人
                            </Col>
                            <Col span = {6}>
                                操作
                            </Col>
                        </Row>
                        <Row >
                            <Col span = {10}>
                                <Col span = {12}>
                                    <Col span = {24} style = {{ marginTop: 15 }} >
                                        <img width="130" height="90" src = "http://aijia-flat-sh-1253646934.picsh.myqcloud.com/v800x600_ChAFD1qjq2iAJzjVAAJBuhFRSeI953.JPG"/>
                                    </Col>
                                </Col>
                                <Col span = {12} >
                                    <Col span = {24} style = {{ marginTop: 45 }} >
                                        2630元
                                    </Col>
                                </Col>
                            </Col>
                            <Col span = {4}>
                                <Col span = {24} style = {{ marginTop: 45 }} >
                                    { moment().format("YYYY-MM-DD")}
                                </Col>
                            </Col>
                            <Col span = {4}>
                                <Col span = {24} style = {{ marginTop: 45 }} >
                                    薛时鸣
                                </Col>
                            </Col>
                            <Col span = {6}>
                                <Col span = {24} style = {{ marginTop: 45 }} >
                                    <Popconfirm title="是否导出合同?" onConfirm={() => this.ordering()}>
                                        <a>导出合同</a>
                                    </Popconfirm>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="mainRight">
                    <div className="person clearfix">
                        <b>我的留言</b>
                    </div>
                </div>
            )
        }
    }
    itemClick =(flag)=> {
        switch (flag){
            case 'personal': this.setState({
                personal: true,
                favor: false,
                issue: false,
                appoint: false,
                order: false,
                message: false,
            })
                break;
            case 'favor': this.setState({
                personal: false,
                favor: true,
                issue: false,
                appoint: false,
                order: false,
                message: false,
            })
                break;
            case 'issue': this.setState({
                personal: false,
                favor: false,
                issue: true,
                appoint: false,
                order: false,
                message: false,
            })
                break;
            case 'appoint': this.setState({
                personal: false,
                favor: false,
                issue: false,
                appoint: true,
                order: false,
                message: false,
            })
                break;
            case 'order': this.setState({
                personal: false,
                favor: false,
                issue: false,
                appoint: false,
                order: true,
                message: false,
            })
                break;
            case 'message': this.setState({
                personal: false,
                favor: false,
                issue: false,
                appoint: false,
                order: false,
                message: true,
            })
                break;
            default: message.error("没有这个选项！")
        }
    }

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
                            <li className="myStore" onClick={()=>{this.itemClick('personal')}}><Icon type="user" className="personallib"/><Link to="/personal">个人中心</Link></li>
                            <li className="myStore" onClick={()=>{this.itemClick('favor')}}><b></b><Link to="/personal">我的收藏</Link></li>
                            <li className="myChange"onClick={()=>{this.itemClick('issue')}} ><b></b><Link to="/personal">发布房屋</Link></li>
                            <li className="myLook" onClick={()=>{this.itemClick('appoint')}}><b></b><Link to="/personal">我的约看</Link></li>
                            <li className="myContract" onClick={()=>{this.itemClick('order')}}><b></b><Link to="/personal">我的订单</Link></li>
                            <li className="myTousu" onClick={()=>{this.itemClick('message')}}><b className="libmy"></b><Link to="/personal">我的留言</Link></li>
                        </ul>
                    </div>

                    { this.left()}
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

