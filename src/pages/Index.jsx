import React from 'react';
import {Carousel, Row, Input, Button, Col, Card, Select, Form} from 'antd';
import '../style/style.less';
import nav1 from '../img/nav1.gif';
import nav2 from '../img/nav2.jpg';
import nav3 from '../img/nav3.jpg';
import nav4 from '../img/nav4.jpg';
import logo from '../img/logo.png';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';
const FormItem = Form.Item;
import {Containerization} from '../common/PublicComponent';
import {
    get_flat_all,
}from '../../src/actions/platfrontAction';
import {Axios} from "../utils/Axios";
@Containerization(state => ({
    flatAllDataInit: state.PlatReducer.flatAllData,
}))
@Form.create()
export default class Index extends React.Component {

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    state = {
        flatData: [],
    }


    componentWillMount (){
        //查询所有的房源信息
        this.props.dispatch(get_flat_all('北京市')).then(() => {

            if(this.props.flatAllDataInit != null){
                let arr = [];
                for ( let i = 0; i <= 2; i++){
                    arr = arr.concat(this.props.flatAllDataInit[i]);
                }
                console.log("推荐的三个房屋：", arr);
                this.setState({
                    flatData: arr,
                })
            }
        })
    }

    mockData = {
        houseData: [{
            img: 'http://public.wutongwan.org/public-20171219-FgaTYh9h4OXiFf7JT12aAeomUM3O?imageView2/1/w/380/h/285',
            "address" : '大望路 东区国际公寓 主卧 朝西南 A室',
            ground: '地铁 1号线,八通线',
            platDetails: {
                area: '约54㎡',
                floor: '18楼',
                habitable: '１室１卫',
                orientation: '朝南',
                type: '整租',
            },
            price: '3940',

        }, {
            img: 'http://public.wutongwan.org/public-20170122-Fty1bFXa4ZGNtxk2kF66wOHk0VMq?imageView2/1/w/380/h/285',
            address: '金台路 公园5号 主卧 朝东南 A室',
            ground: '地铁 6号线,14号线,八通线',
            platDetails: {
                area: '约54㎡',
                floor: '18楼',
                habitable: '１室１卫',
                orientation: '朝南',
                type: '整租',
            },
            price: '4730',
        },{
            img: 'http://public.wutongwan.org/public-20171219-Fq30Y-oNU2Hw2iN6GXUk_IzXK3M4?imageView2/1/w/380/h/285',
            address: '双井 广渠路48号院 主卧 朝南 B室',
            ground: '地铁 10号线,八通线',
            platDetails: {
                area: '约14㎡',
                floor: '18楼',
                habitable: '１室１卫',
                orientation: '朝南',
                type: '整租',
            },
            price: '3330',
        }]
    }
    puzzySearch () {
        this.props.form.validateFields((err, values) => {
            if(!err&&values.fStreet!= '') {
                const formData = this.props.form.getFieldsValue();
                console.log("模糊查询的信息==>", values);
                Axios.post(`/flat/fuzzysearch`,values).then((result) => {
                    console.log("模糊查询返回的信息：",result.data);
                    const { data } = result.data;
                    this.setState({
                        flatData: data,
                    })
                })
            }
        })
    }
    render() {
        const houseData = this.state.flatData;
        const {getFieldDecorator} = this.props.form;
        const formLayout = {
            labelCol: {
                xs: {span: 12},
                sm: {span: 10},
            },
            wrapperCol: {
                xs: {span: 12},
                sm: {span: 6},
            },
        }
        return (
            <div>
                <Carousel autoplay>
                    <div><img src={nav1} width={'100%'} height={332}/></div>
                    <div><img src={nav2} width={'100%'} height={332}/></div>
                    <div><img src={nav3} width={'100%'} height={332}/></div>
                    <div><img src={nav4} width={'100%'} height={332}/></div>
                </Carousel>
                <Form>
                            <FormItem
                                className = "g-center"
                               // label = { <span style={{marginTop: 50, fontSize: 18, color: '#4bb4bb', fontWeight: 500}}>价格</span>}
                                style = {{marginTop: 50 }}
                            >
                                {
                                    getFieldDecorator('fStreet',{
                                        initialValue: ''
                                    })(
                                        <div className={"g-center"}>
                                            <div className="sear_menu">
                                                <input type="text" placeholder = "例如：东城区、崇文门、广渠门" className="sear_input" name="search_text"/>
                                                <button type="submit" onClick={() => {this.puzzySearch()}} className="search_btn">搜索</button>
                                            </div>
                                        </div>
                                    )
                                }
                            </FormItem>
                </Form>

                <div className="col_row line">
                    <h1 className="title_sec gred3">
                        爱家精选房源
                    </h1>
                    <p className="gred9 g-center">爱家公寓致力于为都市白领创造高品质租住生活</p>
                    <div className='g-center'>
                        <Button style={{margin: 7}}>特惠房源</Button>
                        <Button style={{margin: 7}}>租户推荐</Button>
                        <Button style={{margin: 7}}>特大空间</Button>
                    </div>
                </div>
                <div style={{maxWidth: 1190, margin: '0 auto'}}>
                    <Row>
                            {
                                houseData.map((data, k) => {
                                    return (
                                        <Col span={8}>
                                        <Card key={k} style={{width: 380}} bodyStyle={{padding: 0}} noHovering={true}>
                                            <img alt="example" width="100%" src={data.fPic}/>
                                            <div className="room_ti">
                                                <a href="#">{data.fStreet}</a>
                                            </div>
                                            <div className="roo_ads">
                                                <div className="roo_ads fl">
                                                    {data.fFloor}楼 / {data.fArea}㎡ / {data.fShower==1&&data.fToilet==1?'独立卫浴':'无独立卫浴'}
                                                </div>
                                                <div className="room_money fr">
                                                    {data.fPrice}<span>元/月</span>
                                                </div>
                                            </div>
                                        </Card>
                                        </Col>
                                    )
                                })
                            }
                    </Row>
                </div>
                {/*<div className="lk_more">*/}
                    {/*<a href="/rent">更多房源</a>*/}
                {/*</div>*/}
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
                                    <img src = {logo} alt="愛家房屋官网图片" title="愛家房屋官网" width="140" height="28"/>
                                </a>
                                <span>© 2017 愛家房屋 京ICP备15009197号-1<br/>地址：北京市东城区朝阳门内大街8号朝阳首府2层212 </span>
                            </div>
                            <div className="web-belive">
                                <a href="#" target="_blank"><img src="//s3.wutongwan.org/img/public/zxrz2016.jpeg"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
