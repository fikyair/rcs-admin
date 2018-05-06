import React from 'react';
import '../style/platDetails.less';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';
import logo from '../img/logo.png';
import { Axios } from "../utils/Axios";
import moment from 'moment';
import { Form, DatePicker , Input, Button, Icon, message, Modal, Row,Select, Col} from 'antd';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const {TextArea} = Input;
const Option = Select.Option;
let flatTime=[],flatDate='',selectTime='-1',timeArr=[];
function  dealWithflatTime(){
    flatTime=[];
    for (let i = -1; i < 12; i++) {
        if(i===-1){
            flatTime.push(<Option value="-1">请选择时间段</Option>);
        }else{
            if(timeArr.indexOf(flatDate+'T'+i)>-1){
                flatTime.push(<Option value={i.toString()} disabled key={i.toString(36) + i}>{i*2}:00-{(i+1)*2}:00</Option>);
            }else{
                flatTime.push(<Option value={i.toString()} key={i.toString(36) + i}>{i*2}:00-{(i+1)*2}:00</Option>);
            }
         }
    }
    return flatTime;
}


@Form.create()
export default class PlatDetails extends React.Component {

    state = {
        flatDetailsData: [],
        loading: false,
        visible: false,
        assFlag: true,
        fId: '',
        uId: '',
        assStarttime: '',
        /*flatTime:[{val:'1',label:'00:00-02:00'},
            {val:'1',label:'02:00-04:00'},
            {val:'2',label:'04:00-06:00'},
            {val:'3',label:'06:00-08:00'},
            {val:'1',label:'08:00-10:00'},
            {val:'1',label:'10:00-12:00'},
            {val:'1',label:'12:00-14:00'},
            {val:'1',label:'14:00-16:00'}]*/
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
    getAllTimeByFid () {
        const { id: fId} = this.props.match.params;
        const userInfo = localStorage.getItem("User_Authorization");
        const userInfoJSON = JSON.parse(userInfo);
        const userId = userInfoJSON.uId;

        this.setState({
            uId: userId,
            fId: fId,
        })
        Axios.get(`/assumpsit/getAllTimeByFid/${fId}`).then((result) => {
            const { data = [] } = result===null?[]:result;
            timeArr = data;
            dealWithflatTime();
            this.setState({
                visible: true,
            })
            /*this.setState({
                flatDetailsData: data,
            },() => {
                console.log("房屋详情：",this.state.flatDetailsData);
            })*/
        })
    }
    handleFavorite () {
            if(localStorage.getItem("User_Authorization")==null){
                message.info("你还没有登录，请登录！")
                this.props.history.push('/login');
            }else {
                message.success("收藏成功！");
            }
    }

    handleBooking = () => {
        if(localStorage.getItem("User_Authorization")==null){
            message.info("你还没有登录，请登录！")
            this.props.history.push('/login');
        }else {

            this.getAllTimeByFid();
        }
    }

    //对话框的两个按钮
    handleOk = () => {
debugger
        const { uId, fId, assStarttime } = this.state;
        const insertdata = { uId, fId, assStarttime }
        this.setState({ loading: true });
        console.log("插入参数:",insertdata)
        Axios.post(`/assumpsit/assinsert`,insertdata).then((result) => {
            console.log("hahah:",result)
            setTimeout(() => {
                this.setState({ loading: false, visible: false });
                message.success("约看成功！请到个人中心查看！");
            }, 500);
        })
        this.setState({ loading: false });



    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleRemark () {
        if(localStorage.getItem("User_Authorization")==null){
            message.info("你还没有登录，请登录！")
            this.props.history.push('/login');
        }else {
            message.success("留言成功！请到个人中心查看！");
        }
    }


    //判断本时间段是否有人预约
    checkConfirm = (rule, value, callback) => {

        if (value.length!=0 && this.state.assFlag) {
            callback('抱歉，本时间段已有人预约！');
        } else {
            callback();
        }
    }


     disabledDate(current) {
        return current && current.valueOf() < Date.now();
    }
    onChangeDate = (value,dateString)=>{
        selectTime='-1';
        flatDate = dateString;
        this.setState({
            assStarttime: flatDate+'T'+selectTime,
        },()=>{
            console.log("addd",flatDate+'T'+selectTime);
        })
        dealWithflatTime();
    }
    handleChangeSelect = (value)=>{
        console.log(`selected ${value}`);
        selectTime = value;
        this.setState({
            assStarttime: flatDate+'T'+selectTime,
        },()=>{
            console.log("addd",flatDate+'T'+selectTime);
        })
        dealWithflatTime();
    }
    render() {
        // const flatDetailsData = this.state.flatDetailsData;
        // console.log("dsds",flatDetailsData[0].fPic);
        const data = this.state.flatDetailsData[0];
        const {getFieldDecorator} = this.props.form;
        //确认约看弹框
        const { visible, loading } = this.state;
        const dateFormat = 'YYYY-MM-DD HH';
        return (
            <div>
                <div style={{ margin:'0 5px 0 5px'}}>
                    <div data-show="true" className="ant-alert ant-alert-error ant-alert-no-icon">
                        <span className="ant-alert-message">
                            <span className="marquee">
                                 <span style={{ fontWeight: 'bold'}}>新闻消息：</span>
                            此房源即将售罄
                            </span>
                        </span>
                    </div>
                </div>
                <div className="wrapper" style={{marginTop: 50}}>
                    <div className="room-detail">
                        <div className="room-detail-left">
                            <div className="carousel-inner">
                                <div className=" " data-slide-number="0">
                                    <img className="img-responsive" title={ data?data.fName:'' } alt={ data?data.fName:'' }
                                         width="600" height="450"
                                         src={data?data.fPic:''}
                                    />
                                    <div style = {{marginTop: 10, fontSize: 14, fontWeight: 500, color: '#3dbcc6'}}>
                                        <span className="ant-divider"/>给房东留言： <Icon type="message" />
                                    </div>
                                        <Form>
                                            <FormItem
                                                style = {{marginTop: 10 }}
                                            >
                                                {
                                                    getFieldDecorator('fRemark',{
                                                        initialValue: '',
                                                    })(
                                                        <TextArea autosize={{ minRows: 2, maxRows: 18 }}
                                                                  placeholder = "想说点什么都可以写在这里..."
                                                                  style={{minWidth: '150px'}}/>
                                                    )
                                                }
                                            </FormItem>
                                            <Button htmlType = "submit" onClick={this.handleRemark}>留言</Button>
                                        </Form>
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
                                <Button type="danger" onClick={this.handleFavorite} className="user-phone">
                                    <span>我要收藏</span>
                                    <strong><Icon type="heart-o" /></strong>
                                    <em>服务时间：9:00 - 21:00（节假日照常）</em>
                                </Button>
                                <div className="viewroom" data-toggle="modal" onClick={this.handleBooking} data-target="#myroom">我要约看</div>
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
                <Modal
                    visible={visible}
                    title="确认约看信息"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" size="small" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="small" loading={loading} onClick={this.handleOk}>
                            约看
                        </Button>,
                    ]}
                >
                        <Row style = {{ padding: 20 ,fontSize: 13}}>
                            <Col span={24}>
                               <span style={{ fontWeight: 500,padding: 5, fontSize: 14 }}>房屋名称</span> ： { data?data.fName: '' }
                            </Col>
                            <Col span={24}>
                                <span style={{ fontWeight: 500, padding: 5, fontSize: 14 }}>地址</span>： { data?data.fStreet: '' }
                            </Col>
                            <Col span={24}>
                                <span style={{ fontWeight: 500, padding: 5, fontSize: 14 }}>价格</span>： { data?data.fPrice: '' }元
                            </Col><br/>
                            <Col span={24}>
                                <span style={{ fontWeight: 500, padding: 5, fontSize: 14 }}>请选择约看时间</span>：
                                <FormItem>
                                        {
                                        getFieldDecorator('ass_time', {
                                        rules: [{
                                            required: true, message: '请选择约看日期',
                                        },{
                                            validator: this.checkConfirm,
                                        }],
                                            //initialValue: '0'
                                    })  (
                                            <div>
                                                <DatePicker onChange={this.onChangeDate} />
                                                <Select defaultValue="-1" value={selectTime} style={{ width: 120 }} onChange={this.handleChangeSelect}>

                                                    {flatTime}
                                                </Select>
                                            </div>
                                        )
                                    }
                                </FormItem>
                            </Col>
                        </Row>
                </Modal>
            </div>
        )
    }
}