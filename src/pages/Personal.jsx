import React from 'react';
import '../style/person.less';
import logo from '../img/logo.png';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';
import './style/personalissue.less';
import { Link } from 'react-router-dom';
import { Icon, message, Row, Col, Popconfirm, Card, Modal, Form, Input } from 'antd';
import moment from 'moment';
import {Axios} from "../utils/Axios";
import { Favor, Issue, Appoint, Order, Message } from '../components/PersonalItems';
const FormItem = Form.Item;
let  displayName;
if(localStorage.getItem("User_Authorization")!=null){
    const userInfo = localStorage.getItem("User_Authorization");
    const userInfoJSON = JSON.parse(userInfo);
    displayName = userInfoJSON.uName;
}else{
    displayName = '爱家客';
}
const userInfo = localStorage.getItem("User_Authorization");
const userInfoJSON = JSON.parse(userInfo);
const userId = userInfoJSON.uId;
const uName = userInfoJSON.uName;
@Form.create()
export default class Personal extends React.Component {

    state = {
        visible: false,
        personal: true,
        favor: false,
        issue: false,
        appoint: false,
        order: false,
        message: false,
        verify: false,
        verifyInfo: [],
        assumpitInfo: [],
        orderInfo:[],
        favInfo:[],
        remarkInfo:[],
        favByTimeInfo:[],
        sign:false,
        stateFlag:'是否签约',
        userId: '',
        flag: 'personal',
        img: 'ss',
        fCity: '',
        fName: '',
        fBuilding: '',
        fUnit: '',
        fHouse: '',
        fExpectprice: '',
        fOwnername: '',
        fOwnermobile: '',
        fVtime: '',
    }

    ordering = (e,fId) =>{
        const uId = userId;
        const orderData = {fId, uId}
        console.log("嗯哼fId:",orderData);
        Axios.post(`/order/orderinsert`,orderData).then((result) => {
            if(result.data.state == 200){
                message.success("恭喜您，下单成功，请到我的订单操作！")
                this.assOnOff(fId);
            }
            if(result.data.state == 999){
                message.warn("已经有此房屋的订单！")
            }
        })
    }

    componentDidMount () {
        //查询房屋审核信息
        Axios.post(`/verify/queryVerifyStatus/${userId}`).then((result) => {
             const { data } = result.data;
             this.setState({
                 verifyInfo: data,
             },() => {
                 console.log("审核信息：",this.state.verifyInfo);
             })
        })
        this.setState({
            userId : userId,
        })
        this.queryassInfo(userId);

        //查询本人订单信息
        const uId = userId;
        const orderquery = {uId};
        Axios.post(`/order/getAllOrders`,orderquery).then((result) => {
            const { data } = result.data;
            this.setState({
                orderInfo: data,
            },() => {
                console.log("订单信息：",this.state.orderInfo);
            })
        })

        //查询本人留言信息
        const remarkquery = { uName };
        Axios.post(`/remark/getAllRemark`,remarkquery).then((result) => {
            const { data } = result.data;
            this.setState({
                remarkInfo: data,
            },() => {
                console.log("留言信息：",this.state.remarkInfo);
            })
        })

        //查询收藏信息
        this.queryFav(userId);

        //查询最近收藏的房源
        const favByTimequery = {uId};
        Axios.post(`/fav/getFavByTime`,favByTimequery).then((result) => {
            const { data } = result.data;
            this.setState({
                favByTimeInfo: data,
            },() => {
                console.log("最新shoucang信息：",this.state.favByTimeInfo);
            })
        })
    }
    queryassInfo(userId){
        //查询约看信息
        Axios.get(`/assumpsit/getAssInfoByUid/${userId}`).then((result) => {
            const { data = [] } = result;
            this.setState({
                assumpitInfo: data,
            },()=>{
                console.log("约看信息==>",this.state.assumpitInfo);
            })
        })
    };

    queryFav(userId){
        const uId = userId;
        const favquery = {uId};
        Axios.post(`/fav/getAllFav`,favquery).then((result) => {
            const { data } = result.data;
            this.setState({
                favInfo: data,
            },() => {
                console.log("收藏信息：",this.state.favInfo);
            })
        })
    }
    assDelete (e,assId) {
        Axios.get(`/assumpsit/assdelete/${assId}`).then((result) => {
            console.log("result",result);
           this.queryassInfo(userId)
        })
     console.log("看这个：",assId);
    }

    favDelete (e, favId) {
        console.log("favId：",favId);
        const favData = { favId }
        Axios.post(`/fav/deleteFav`,favData).then((result) => {
            console.log("result",result);
            this.queryFav(userId);
        })
    }

    unSatisfy(e,fId){
      /*前提是一个房间，每个用户只能约看一次。。。发请求该数据库*/
       this.assOnOff(fId);
        message.info("您没有签约")
    }

    /*assOnOff,将点击签约和不签约之后置为灰色*/
    assOnOff(fId){
        const uId = userId;
        const OnOffData = { fId, uId };
        Axios.post(`/assumpsit/assOnOff`,OnOffData).then((result) => {
            console.log("result",result);
            this.queryassInfo(userId);
        })
    }

    onSubmitIssue = (e) => {
        const { fCity, fName, fBuilding, fUnit, fHouse, fExpectprice, fOwnername, fOwnermobile } = this.state;
        const uId = this.state.userId;
        const issueData = { fCity, fName, fBuilding, fUnit, fHouse, fExpectprice, fOwnername, fOwnermobile, uId };
        console.log("发布信息：",issueData);
        Axios.post(`/verify/addFlatVerify`, issueData).then((result) => {
           // console.log("返回信息",result.data);
        })
        message.success("您提交的房源信息已经提交审核，烦请等工作人员与您联系！");
        setTimeout(() => {
            window.location.href = "/personal";
        },2000);
        e.preventDefault()
    }

    //在显示房屋的时候需要判断是否已经签约了

    outContract () {
        //导出和同时将房屋状态改成“已入住”
    }

    //修改个人资料
    updateUserInfo =()=> {
        this.setState({
            visible: true,
        })
    }

    handleonCancel =(e)=>{
        this.setState({ visible: false });
    }

    outPdf () {
        Axios.post(`/order/outPdf`).then((result)=>{
            console.log("result ", result);
            if(result.status == 200 ){
                message.success("导出成功！请到桌面查看！")
            }else{
                message.error("导出错误！")
            }
        })
    }

    handleonOk =(e)=>{
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('表单信息: ', values);
                const uId = userId;
                const updateUserInfo = {uId, ...values};
                Axios.post(`/user/updateUserInfo`,updateUserInfo).then((result) =>{
                    console.log("ESWWWWW",result.data);
                    if(result.data.state == 200){
                        message.success("恭喜您，修改成功！")
                    }
                    if(result.data.state == 999){
                        message.warn("您的原密码不正确！")
                    }
                })


                this.setState({ visible: false });
            }
        });
    }
    left = () =>{
        if(this.state.personal){
            const favByTimeInfo = this.state.favByTimeInfo;
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
                                <a onClick={this.updateUserInfo}>修改个人资料<i></i></a>
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

                                {
                                    favByTimeInfo.map((v, k)=>{
                                            return(
                                                <li>
                                                <div key={k}>
                                                    <div className="img">
                                                        <Link to={`/rent/+flatdetails/${v.flat.fId}`}>
                                                            <img width="285" height="190"
                                                                 src={ v.flat.fPic}/>
                                                        </Link>
                                                    </div>
                                                    <div className="clearfix">
                                                        <p className="name fl">{ v.flat.fStreet+" "+v.flat.fType+" "+v.flat.fHabitable }</p>
                                                        <p className="price fr">¥{ v.flat.fPrice }/月</p>
                                                    </div>
                                                </div>
                                                </li>
                                            )
                                    })
                                }
                        </ul>
                    </div>
                    {/*我发布的房源*/}
                   {/* <div className="collection">
                        <h5>我发布的房源</h5>
                        <ul className="clearfix">
                            <li>
                                <Link to="/personal">
                                    <div className="img">
                                        <img width="285" height="190"
                                             src="http://aijia-flat-sh-1253646934.picsh.myqcloud.com/v800x600_ChAFD1qjq2iAJzjVAAJBuhFRSeI953.JPG"/>
                                    </div>
                                    <div className="clearfix">
                                        <p className="name fl">南开广开街2号线,1号线西南角蘭园3居室</p>
                                        <p className="price fr">¥2560/月</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>*/}
                </div>
            )
        }else if (this.state.favor) {
            const favInfo = this.state.favInfo;
            return (
                <div className="mainRight">
                    <div className="person clearfix">
                        <b>我的收藏</b>
                    </div>
                    <div className="person" >
                        <Row style = {{ marginBottom: 10, marginLeft: 10}}>
                            <Col span = {11}>
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
                        {
                            favInfo.map((v, k)=>{
                                const time = v.fCreatime.split(" ");
                                const favId = v.favId;
                                return (
                                    <Card key = {favId} style={{ width: '100%', marginRight: 5, background: '', bordered: 'false', marginBottom: 15}} bodyStyle={{ padding: 0 , display: 'inline-flex' }}>
                                        <div className="custom-image" style={{  padding: '10px 10px', }}>
                                            <Link to={`/rent/+flatdetails/${v.flat.fId}`}>

                                            <img alt="example" width="137px" height="91px"
                                                 src={ v.flat.fPic} />
                                            </Link>
                                        </div>
                                        <div className="txt_li">
                                            <p className="p1" style = {{lineHeight: 1.5}}>
                                                { v.flat.fStreet }
                                            </p>
                                            <p className="p2" style = {{lineHeight: 1.5}} >{ v.flat.fFloor }层 | { v.flat.fArea} 平方米 |{ v.flat.fType }</p>
                                        </div>
                                        <p style={{ marginTop: 12, marginLeft: 119 }}>{ v.flat.fPrice }元</p>
                                        <p style={{ marginTop: 12, marginLeft: 28 }}>{ v.flat.fStatus==1?'已签约':'未签约'}</p>
                                        <p style={{ marginTop: 12, marginLeft: 31 }}>{ time[0] }</p>
                                        <p style={{ marginTop: 12, marginLeft: 79 }}>
                                            <Popconfirm title="是否删除?" onConfirm={(e) => this.favDelete(e,favId)}>
                                                <a>删除</a>
                                            </Popconfirm>
                                        </p>
                                    </Card>
                                )
                            })
                        }

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
                                                       type="text" value={this.state.fBuilding}/>号楼&nbsp;&nbsp;&nbsp;&nbsp;
                                                <ul className="u-select-options hide" style={{display: 'none'}}></ul>
                                            </div>
                                            <div className="u-select u-select-build" >
                                                <input placeholder="单元号" name="fUnit" className="u-select-selected" type="text"
                                                       onChange={e=>this.setState({fUnit: e.target.value})}
                                                       value={this.state.fUnit}/>单元&nbsp;&nbsp;&nbsp;&nbsp;
                                                <ul className="u-select-options hide" style={{display: 'none'}}></ul>
                                            </div>
                                            <div className="u-select u-select-build" >
                                                <input placeholder="门牌号" name="fHouse" className="u-select-selected" type="text"
                                                       onChange={e=>this.setState({fHouse: e.target.value})}
                                                       value={ this.state.fHouse }/>室&nbsp;&nbsp;&nbsp;&nbsp;
                                                <ul className="u-select-options hide"style={{display: 'none'}}></ul>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>期望价格</dt>
                                        <dd>
                                            <input name="fExpectprice" value={ this.state.fExpectprice } type="text"
                                                   placeholder="请输入您期望出租的价格"
                                                   onChange={e=>this.setState({fExpectprice: e.target.value})}
                                                   style= {{width: 210}}/>
                                            <div className="unit">元/月</div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>称呼</dt>
                                        <dd>
                                            <input name="fOwnername" value={ this.state.fOwnername }
                                                   onChange={e=>this.setState({fOwnername: e.target.value})}
                                                   type="text"
                                                   placeholder="我们应该如何称呼您"
                                                   style= {{width: 210}}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>手机号码</dt>
                                        <dd>
                                            <input name="fOwnermobile" value={ this.state.fOwnermobile }
                                                   onChange={e=>this.setState({fOwnermobile: e.target.value})}
                                                   type="text"
                                                   placeholder="您的联系方式"
                                                   style= {{width: 210}}/>
                                        </dd>
                                    </dl>
                                    <input className="btn-submit" type="submit" onClick={this.onSubmitIssue}  value="提交委托"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.verify){
            const verifyInfo = this.state.verifyInfo;
            console.log("sddddddddd", verifyInfo);
            return (
                <div className="mainRight">
                    <div className="person clearfix">
                        <b>房屋发布审核结果</b>
                    </div>
                    <div className="person">
                        <Row style = {{ lineHeight: '28px', background: '#eee'}}>
                            <Col span = {10}>
                                <Col span = {12}>
                                    房源地址
                                </Col>
                                <Col span = {12} >
                                    期望价格
                                </Col>
                            </Col>
                            <Col span = {2}>
                                状态
                            </Col>
                            <Col span = {4}>
                                提交时间
                            </Col>
                            <Col span = {4}>
                                提交人
                            </Col>
                        </Row>
                        {
                            verifyInfo.map((data, k) =>{
                                return (
                                    <Row key = {k} >
                                        <Col span = {10}>
                                            <Col span = {12}>
                                                <Col span = { 20 } style = {{ marginTop: 43, lineHeight: 1.5}} >
                                                    {data.fCity+" "+ data.fName+" "+data.fBuilding+"号楼 "+data.fUnit+"单元 "+data.fHouse+"室 "}
                                                </Col>
                                            </Col>
                                            <Col span = {12} >
                                                <Col span = {24} style = {{ marginTop: 45 }} >
                                                    {data.fExpectprice+" 元"}
                                                </Col>
                                            </Col>
                                        </Col>
                                        <Col span = {2} style = {{ marginTop: 45 }} >
                                            {data.fStatus==1?'审核通过':'未审核'}
                                        </Col>
                                        <Col span = {4}>
                                            <Col span = {24} style = {{ marginTop: 45 }} >
                                                { data.fVtime == ''?'':moment(data.fVtime).format("YYYY-MM-DD") }
                                            </Col>
                                        </Col>
                                        <Col span = {4}>
                                            <Col span = {24} style = {{ marginTop: 45 }} >
                                                {data.fOwnername}
                                            </Col>
                                        </Col>
                                    </Row>
                                    )
                            })
                        }
                    </div>
                </div>
            )

        }else if (this.state.appoint){
            const assData = this.state.assumpitInfo.length==0?[]:this.state.assumpitInfo;
            console.log("===>>>", assData);
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
                               <Col span = {5}>
                                    预约时间
                               </Col>
                               <Col span = {3}>
                                    预约人
                               </Col>
                               <Col span = {4}>
                                    操作
                               </Col>
                           </Row>
                        {
                            assData.data.map((v, k) => {
                                const time = v.assStarttime.split("T");
                                let timeTemp = '';
                                let ky = '';
                                ky = time[1];
                                switch (ky) {
                                    case '0': timeTemp ='00:00-02:00'
                                        break;
                                    case '1': timeTemp ='02:00-04:00'
                                        break;
                                    case '2': timeTemp ='04:00-06:00'
                                        break;
                                    case '3': timeTemp ='06:00-08:00'
                                        break;
                                    case '4': timeTemp ='08:00-10:00'
                                        break;
                                    case '5': timeTemp ='10:00-12:00'
                                        break;
                                    case '6': timeTemp ='12:00-14:00'
                                        break;
                                    case '7': timeTemp ='14:00-16:00'
                                        break;
                                    case '8': timeTemp ='16:00-18:00'
                                        break;
                                    case '9': timeTemp ='18:00-20:00'
                                        break;
                                    case '10': timeTemp ='20:00-22-00'
                                        break;
                                    case '11': timeTemp ='22:00-24:00'
                                        break;
                                }
                                console.log("dsdsds"+timeTemp)
                                const assId = v.assId;
                                const fId = v.fId;
                                let asssign = false;
                                if( v.assOnOff == 0 || v.assStatus == 0){
                                        asssign = true;
                                }
                                /*后台管理员等到约看结束之后将assStatus=1，前台用户就可选择签约不签约，若不签约将assOnOff（默认为1）改为0，
                                签约的话，就生成订单信息*/
                               return(
                                   <Row key = {k}>
                                       <Col span = {10}>
                                           <Col span = {12}>
                                               <Col span = {24} style = {{ marginTop: 15 }} >
                                                   <Link to={`/rent/+flatdetails/${v.flat.fId}`}>
                                                       <img width="130" height="90"
                                                            src = { v.flat.fPic=''?'':v.flat.fPic}/>

                                                   </Link>
                                               </Col>
                                           </Col>
                                           <Col span = {12} >
                                               <Col span = {24} style = {{ marginTop: 45 }} >
                                                   { v.flat.fPrice=''?'':v.flat.fPrice}元
                                               </Col>
                                           </Col>
                                       </Col>
                                       <Col span = {2} style = {{ marginTop: 45 }} >
                                           { v.assStatus ==0?'未约看':'已约看'}
                                       </Col>
                                       <Col span = {5}>
                                           <Col span = {24} style = {{ marginTop: 45 }} >
                                               {

                                                   v.assStarttime ==''?'':time[0]+" "+timeTemp
                                               }
                                           </Col>
                                       </Col>
                                       <Col span = {3}>
                                           <Col span = {24} style = {{ marginTop: 45 }} >
                                               {v.userName=''?'':v.userName}
                                           </Col>
                                       </Col>
                                       <Col span = {4}>
                                           <Col span = {24} style = {{ marginTop: 45 }} key = {assId}>
                                               <Popconfirm title="是否删除?" onConfirm={(e) => this.assDelete(e,assId)}>
                                                   <a>删除</a>
                                               </Popconfirm>
                                               <span className="ant-divider" key = {fId}/>
                                               <Popconfirm title="是否签约?"
                                                           cancelText = '不签约'
                                                           okText = '签约'
                                                           onCancel={(e) => this.unSatisfy(e,fId)}
                                                           onConfirm={(e) => this.ordering(e,fId)}>
                                                   <a disabled={asssign}>是否签约</a>
                                               </Popconfirm>
                                           </Col>
                                       </Col>
                                   </Row>
                                   )
                            })
                        }
                    </div>
                </div>
            )
        }else if (this.state.order){
            const orderInfo = this.state.orderInfo;
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
                            <Col span = {5}>
                                下单时间
                            </Col>
                            <Col span = {3}>
                                下单人
                            </Col>
                            <Col span = {6}>
                                操作
                            </Col>
                        </Row>
                        {
                            orderInfo.map((v,k) =>{
                                let temp = v.oTime.split(".");
                                return (
                                    <Row key = { k }>
                                        <Col span = {10}>
                                            <Col span = {12}>
                                                <Col span = {24} style = {{ marginTop: 15 }} >
                                                    <Link to={`/rent/+flatdetails/${v.flat.fId}`}>
                                                        <img width="130" height="90"
                                                             src = { v.flat.fPic }/>
                                                    </Link>
                                                </Col>
                                            </Col>
                                            <Col span = {12} >
                                                <Col span = {24} style = {{ marginTop: 45 }} >
                                                    { v.flat.fPrice }元
                                                </Col>
                                            </Col>
                                        </Col>
                                        <Col span = {5}>
                                            <Col span = {24} style = {{ marginTop: 45 }} >
                                                { temp[0] }
                                            </Col>
                                        </Col>
                                        <Col span = {3}>
                                            <Col span = {24} style = {{ marginTop: 45 }} >
                                                { v.userName }
                                            </Col>
                                        </Col>
                                        <Col span = {6}>
                                            <Col span = {24} style = {{ marginTop: 45 }} >
                                                <Popconfirm title="是否导出合同?" onConfirm={() => this.outContract()}>
                                                    <a onClick={this.outPdf}>导出合同</a>
                                                </Popconfirm>
                                            </Col>
                                        </Col>
                                    </Row>
                                )
                            })

                        }

                    </div>
                </div>
            )
        }else {
            const remarkInfo = this.state.remarkInfo;
            return (

                <div className="mainRight">
                    <div className="person clearfix">
                        <b>我的留言</b>
                    </div>
                    <div className="person">
                        <Row style = {{ lineHeight: '28px', background: '#eee'}} >
                            <Col span = {10}>
                                <Col span = {12}>
                                    房屋信息
                                </Col>
                                <Col span = {12} >
                                    地址
                                </Col>
                            </Col>
                            {/*<Col span = {4}>*/}
                                {/*留言时间*/}
                            {/*</Col>*/}
                            <Col span = {4}>
                                留言人
                            </Col>
                            <Col span = {4}>
                                留言内容
                            </Col>
                        </Row>
                        {
                            remarkInfo.map((v, k)=>{
                                return(
                                    <Row >
                                        <Col span = {10}>
                                            <Col span = {12}>
                                                <Col span = {24} style = {{ marginTop: 15 }} >
                                                    <Link to={`/rent/+flatdetails/${v.flat.fId}`}>
                                                        <img width="130" height="90"
                                                             src = {v.flat.fPic}/>
                                                    </Link>
                                                </Col>
                                            </Col>
                                            <Col span = {12} >
                                                <Col span = {20} style = {{ marginTop: 43 ,lineHeight: 1.5}} >
                                                    { v.flat.fStreet}
                                                </Col>
                                            </Col>
                                        </Col>
                                        {/*<Col span = {4}>*/}
                                            {/*<Col span = {24} style = {{ marginTop: 45 }} >*/}
                                                {/*{ moment().format("YYYY-MM-DD")}*/}
                                            {/*</Col>*/}
                                        {/*</Col>*/}
                                        <Col span = {4}>
                                            <Col span = {24} style = {{ marginTop: 45 }} >
                                                { v.rSendname }
                                            </Col>
                                        </Col>
                                        <Col span = {6} style = {{ marginTop: 45 ,lineHeight: 1.5}}>
                                            { v.rInfo }
                                        </Col>
                                    </Row>
                                )
                            })
                        }

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
                verify: false,
                appoint: false,
                order: false,
                message: false,
            })
                break;
            case 'favor': this.setState({
                personal: false,
                favor: true,
                issue: false,
                verify: false,
                appoint: false,
                order: false,
                message: false,
            })
                break;
            case 'issue': this.setState({
                personal: false,
                favor: false,
                issue: true,
                verify: false,
                appoint: false,
                order: false,
                message: false,
            })
                break;
            case 'verify': this.setState({
                personal: false,
                favor: false,
                issue: false,
                verify: true,
                appoint: false,
                order: false,
                message: false,
            })
                break;
            case 'appoint': this.setState({
                personal: false,
                favor: false,
                issue: false,
                verify: false,
                appoint: true,
                order: false,
                message: false,
            })
                break;
            case 'order': this.setState({
                personal: false,
                favor: false,
                issue: false,
                verify: false,
                appoint: false,
                order: true,
                message: false,
            })
                break;
            case 'message': this.setState({
                personal: false,
                favor: false,
                issue: false,
                verify: false,
                appoint: false,
                order: false,
                message: true,
            })
                break;
            default: message.error("没有这个选项！")
        }
    }

    render() {
       const formLayout = {
           labelCol: {
               xs: {span: 12},
               sm: {span: 8},
           },
           wrapperCol: {
               xs: {span: 12},
               sm: {span: 8},
           },
        }
        const {getFieldDecorator} = this.props.form
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
                            <li className="myChange"onClick={()=>{this.itemClick('verify')}} ><b></b><Link to="/personal">房屋审核</Link></li>
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
                <Modal
                    visible={this.state.visible}
                    title="修改个人资料"
                    okText="ok"
                    onCancel={this.handleonCancel}
                    onOk={this.handleonOk}
                >
                    <Form >
                        <Row style={{marginTop: 40}}>
                            <Col span={24}>
                                <FormItem label="姓名:"
                                          {...formLayout}
                                >
                                    {getFieldDecorator('uName',{initialValue: userInfoJSON.uName,
                                        rules: [
                                            {
                                                required: true, message: '请填写姓名'
                                            }
                                        ]})(
                                        <Input style={{width: 180}} placeholder="姓名"/>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={24}>
                                <FormItem label="昵称:"
                                          {...formLayout}
                                >
                                    {getFieldDecorator('uNickname',{initialValue: userInfoJSON.uNickname,
                                        rules: [
                                            {
                                                required: true, message: '请填写昵称'
                                            }
                                        ]})(
                                        <Input style={{width: 180}} placeholder="昵称"/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={24}>
                                <FormItem label="原密码:"
                                          {...formLayout}
                                >
                                    {getFieldDecorator('uPwd',{initialValue: '',
                                        rules: [
                                            {
                                                required: true, message: '请填写原密码'
                                            }
                                        ]})(
                                        <Input style={{width: 180}} type="password" placeholder="原始密码"/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={24}>
                                <FormItem label="新密码:"
                                          {...formLayout}
                                >
                                    {getFieldDecorator('uPwdnew', {
                                        initialValue: '',
                                             rules: [
                                                        {
                                                            required: true, message: '请填写新密码'
                                                         }
                                                    ]
                                    })
                                    (
                                        <Input style={{width: 180}} type="password" placeholder="新密码"/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={24}>
                                <FormItem label="电话:"
                                          {...formLayout}
                                >
                                    {getFieldDecorator('uPhone',{initialValue: userInfoJSON.uPhone,
                                        rules: [
                                            {
                                                required: true, message: '请填写电话'
                                            }
                                        ]})(
                                        <Input style={{width: 180}} placeholder="联系电话"/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
            </div>
        )
    }
}

