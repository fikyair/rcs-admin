import React from 'react';
import {Card} from 'antd';
import '../style/rent.less';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';
import $ from 'jquery';
import {Containerization} from '../common/PublicComponent';
import {
    get_city_by_cname,
    get_flat_by_sId,
    get_flat_all,
}from '../../src/actions/platfrontAction';
import {FetchAPI} from "../utils/fetch-middleware";

@Containerization(state => ({
    provinceData: state.PlatReducer.NavProvinceData,
    provinceDataByName: state.PlatReducer.NavProvinceDataByPName,
    cityDataByCName: state.PlatReducer.NavCityDataByCName,
    flatData: state.PlatReducer.flatDataByAny,
    flatAllDataInit: state.PlatReducer.flatAllData,
}))
export default class Index extends React.Component {


    state = {
        display: false,
        checkedFlag: true,
        currentActive: null,
        currentActive1: null,
        currentActive2: null,
        currentActive3: null,
        priceCheckedFlag: true,
        typeCheckedFlag: true,
        habitableCheckedFlag: true,
        province: this.props.provinceData,
        streetsData: [],
        flatData: [],
        querData: {},

    }

    mockData = {
        cityData: [
            {
                name: '东城区', value: "11"
            },
            {
                name: '朝阳区', value: "12"
            }, {
                name: '西城区', value: '13'
            },
        ],
        streetData: [
            {
                name: '宜山路', value: "1101"
            },
            {
                name: '漕宝路', value: "1102"
            }, {
                name: '龙漕路', value: "1103"
            }, {
                name: '桂林路', value: "1104"
            }, {
                name: '上海体育场', value: "1105"
            }, {
                name: '徐家汇', value: "1106"
            }, {
                name: '虹漕路', value: "1107"
            }, {
                name: '上海游泳馆', value: "1108"
            },
        ],
        priceData: [
            {
                name: '2000元以下', value: '1'
            }, {
                name: '2000~2500元', value: '2'
            }, {
                name: '3000~3500元', value: '3'
            }, {
                name: ' 3500元以上', value: '4'
            }
        ],
        habitableData: [
            {
                name: '一居室', value: '1'
            },{
                name: '两户合租', value: '2'
            },{
                name: '三户合租', value: '3'
            },{
                name: '四户及以上', value: '4'
            }
        ],
        typeData: [
            {
                name: '整租', value: '1'
            } ,{
                name: '合租', value: '2'
            }
        ],
        platData: [
            {
                url: 'http://public.wutongwan.org/public-20171214-Fqv1N_pbx3GsIkaY1IZDRMkvvdi4?imageView2/1/w/380/h/285',
                address: '物资学院路 悦澜水岸家园 主卧 朝南 A室',
                ground: '五星',
                platDetails: {
                    area: '约54㎡',
                    floor: '18楼',
                    habitable: '１室１卫',
                    orientation: '朝南',
                    type: '整租',
                },
                spDetails: {
                    toilet: '独立卫生间',
                    shower: '独立淋浴',
                    heating: '集中供暖',
                },
                price: '3660',
            }, {
                url: 'http://public.wutongwan.org/public-20171211-Fkp3yxzx8iE29vZluvXCFAOaiVEz?imageView2/1/w/380/h/285',
                address: '马家堡 亚林西1区 主卧 朝南 B室',
                ground: '四星',
                platDetails: {
                    area: '约12㎡',
                    floor: '23楼',
                    habitable: '2室１卫',
                    orientation: '朝南',
                    type: '合',
                },
                spDetails: {
                    toilet: '独立卫生间',
                    shower: '独立阳台',
                    heating: '集中供暖',
                },
                price: '3040',
            }, {
                url: 'http://public.wutongwan.org/public-20171213-FhbbTF18lB-Me0GrRPwjVFUbfSAs?imageView2/1/w/380/h/285',
                address: '四惠 都会华庭 主卧 朝南 B室',
                ground: '五星',
                platDetails: {
                    area: '约18㎡ ',
                    floor: '6楼',
                    habitable: '3室1卫',
                    orientation: '朝南',
                    type: '合',
                },
                spDetails: {
                    toilet: '独立卫生间',
                    shower: '独立阳台',
                    heating: '自采暖',
                },
                price: '2590',
            }
        ]
    }

    componentWillMount (){
        this.props.dispatch(get_flat_all()).then(() => {
            //console.log("==初始化=>",this.props.flatAllDataInit);
            this.setState({
                flatData: this.props.flatAllDataInit,
            })
        })
    }
    cityClick(e, k) {
        this.setState({display: true, currentActive: k, checkedFlag: false});
        let cName = e.target.innerText;
        this.props.dispatch(get_city_by_cname(cName)).then(()=>{
            console.log("==点击城市之后=>",this.props.cityDataByCName);
            let streetsData = [];
            this.props.cityDataByCName[0].streets.map((item) => {
                streetsData = streetsData.concat(item);
            })
            this.setState({
                streetsData: streetsData,
            })
        })
        console.log("===>", e.target.innerText)
    }

    aLimitClick() {
        this.setState({checkedFlag: !this.state.checkedFlag, currentActive: null, display: false});
    }

    priceClick(j) {
        this.setState({currentActive1: j, priceCheckedFlag: false});
    }

    aPriceClick() {
        this.setState({priceCheckedFlag: !this.state.priceCheckedFlag, currentActive1: null})
    }

    habitableClick(j) {
        this.setState({currentActive2: j, habitableCheckedFlag: false});
    }
    aHabitableClick() {
        this.setState({habitableCheckedFlag: !this.state.habitableCheckedFlag, currentActive2: null})
    }
    typeClick(j) {
        this.setState({currentActive3: j, typeCheckedFlag: false});
    }
    aTypeClick() {
        this.setState({typeCheckedFlag: !this.state.typeCheckedFlag, currentActive3: null})
    }

    handleClickA (e, key) {

        const sId = key;
        // FetchAPI(`/flat/queryBysId/${sId}`,'GET').then((result) => {
        //     console.log("房源信息：",result)
        //     debugger
        //     let { data = [] } = result;
        //     this.setState({
        //         querData: { sId : sId},
        //         flatData:  data,
        //     })
        // })
        this.props.dispatch(get_flat_by_sId(sId)).then(() => {
            console.log("房屋信息",this.props.flatData);
                let { flatData = [] } = this.props;
                this.setState({
                    querData: { sId : sId},
                    flatData:  flatData,
                })

        })
    }

    render() {
        const city = this.props.provinceDataByName;
        const street = this.props.cityDataByCName;
        const price = this.mockData.priceData;
        const flatData = this.state.flatData;
        console.log("flatData",flatData)
        const habitable = this.mockData.habitableData;
        const type = this.mockData.typeData;
        console.log("读取位置信息====>",this.props.provinceDataByName)
        return (
            <div>
                <Card className="wrapper" style={{marginTop: 50}} noHovering={true}>
                    <div className="filter_options">
                        <dl className="dl_lst">
                            <dt>区域：</dt>
                            <dd>
                                <div id = "optionList" className="option_list">
                                    <a onClick={() => this.aLimitClick()}
                                     className={this.state.checkedFlag ? 'onlist' : ''}>不限</a>
                                    {
                                        city.map((i)=>{
                                            return i.cities.map((j, k) => {
                                                return  <a id = "alist" key={k} onClick={(e) => this.cityClick(e,k)}
                                                           className={this.state.currentActive == k ? 'onlist' : ''}>{j.cName}</a>

                                            })
                                        })
                                    }
                                </div>
                                <div id = "subList" className="sub_option_list"
                                     style={this.state.display ? {display: 'block'} : {display: 'none'}}>
                                    {
                                        street.map((v) => {
                                            return v.streets.map((j, k) => {
                                                return <a key={j.sId}
                                                          onClick = {(e) => this.handleClickA(e, j.sId)}
                                                          className="">{j.sName}</a>
                                            })
                                        })
                                    }
                                </div>
                            </dd>
                        </dl>

                        <dl className="dl_lst">
                            <dt>居室：</dt>
                            <dd>
                                <div className="option_list">
                                    <a onClick={() => {
                                        this.aHabitableClick()
                                    }} className={this.state.habitableCheckedFlag ? 'onlist' : ''}>不限</a>
                                    {
                                        habitable.map((data, j) => {
                                            return (
                                                <a key={j} onClick={(e) => this.habitableClick(j)}
                                                   className={this.state.currentActive2 == j ? 'onlist' : ''}>{data.name}</a>
                                            )
                                        })
                                    }
                                </div>
                            </dd>
                        </dl>

                        <dl className="dl_lst">
                            <dt>租金：</dt>
                            <dd>
                                <div className="option_list">
                                    <a onClick={() => {
                                        this.aPriceClick()
                                    }} className={this.state.priceCheckedFlag ? 'onlist' : ''}>不限</a>
                                    {
                                        price.map((data, j) => {
                                            return (
                                                <a key={j} onClick={(e) => this.priceClick(j)}
                                                   className={this.state.currentActive1 == j ? 'onlist' : ''}>{data.name}</a>
                                            )
                                        })
                                    }
                                </div>
                            </dd>
                        </dl>
                        <dl className="dl_lst">
                            <dt>类型：</dt>
                            <dd>
                                <div className="option_list">
                                    <a onClick={() => {
                                        this.aTypeClick()
                                    }} className={this.state.typeCheckedFlag ? 'onlist' : ''}>不限</a>
                                    {
                                        type.map((data, j) => {
                                            return (
                                                <a key={j} onClick={(e) => this.typeClick(j)}
                                                   className={this.state.currentActive3 == j ? 'onlist' : ''}>{data.name}</a>
                                            )
                                        })
                                    }
                                </div>
                            </dd>
                        </dl>


                    </div>
                </Card>
                <Card className="roomlist wrapper" style={{marginTop: 20}} noHovering={true}>
                    <div className="r_ls">

                        <a href="#" className="ck_on">默认</a>
                        <a href="#" className=" ck_up">
                            价格<i></i>
                        </a>
                        <a href="#" className=" ck_up">
                            面积<i></i>
                        </a>
                    </div>
                    <div className="r_ls_box">
                        {
                            flatData.map((data, k) => {
                               // console.log(data.platDetails.area)
                                return (
                                    <div className="r_lbx">
                                        <Link to="/platDetails" className="rimg" target="_blank"><img
                                            src={data.fPic}
                                            width="300" height="240" title={data.fName} alt={data.fName}/>
                                        </Link>
                                        <div className="r_lbx_cen">
                                            <div className="r_lbx_cena">
                                                <Link to="/platDetails" target="_blank">{data.fStreet} <span> { data.fName }</span></Link>
                                                <div className="r_lbx_cena">
                                                    地铁三号线
                                                </div>
                                            </div>
                                            <div className="r_lbx_cenb">

                                                {data.fArea}m² | {data.fFloor}楼
                                                | {data.fHabitable} | {data.fOrientation}
                                                &nbsp;&nbsp;<em>{data.fType}</em>
                                            </div>
                                            <div className="r_lbx_cenc">

                                                <span>{data.fShower==1&&data.fToilet==1?'独立卫浴':'无独立卫浴'}</span>
                                                <span>{data.fHeating==1?'集中供暖':'无集中供暖'}</span>
                                            </div>
                                        </div>
                                        <div className="r_lbx_money">
                                            <div className="r_lbx_moneya" style={{textAlign: 'center', paddingTop: 30}}>
                                                <span className="ty_b"
                                                      style={{fontSize: 40}}>{data.fPrice}</span>&nbsp;
                                                元/月
                                            </div>
                                            <Link className="lk_more_rent" to="/platDetails" target="_blank">
                                                查看房间详情
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Card>
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
                                <a href="//www.baidu.com/s?wd=%E7%B4%AB%E6%A2%A7%E6%A1%90%28%E5%8C%97%E4%BA%AC%29%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8@v" target="_blank"><img src="//s3.wutongwan.org/img/public/zxrz2016.jpeg"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}