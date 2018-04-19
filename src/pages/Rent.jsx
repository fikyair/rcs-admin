import React from 'react';
import {Card} from 'antd';
import '../style/rent.less';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import '../style/footer.less';
import pay from '../img/pay.jpg';
import weixin from '../img/wexin.jpg';
import {Axios} from "../utils/Axios";

import $ from 'jquery';
import {Containerization} from '../common/PublicComponent';
import {
    get_city_by_cname,
    get_flat_by_sId,
    get_flat_all,
    get_combine_flat,
}from '../../src/actions/platfrontAction';
import {FetchAPI} from "../utils/fetch-middleware";

@Containerization(state => ({
    provinceData: state.PlatReducer.NavProvinceData,
    provinceDataByName: state.PlatReducer.NavProvinceDataByPName,
    cityDataByCName: state.PlatReducer.NavCityDataByCName,
    flatData: state.PlatReducer.flatDataByAny,
    flatAllDataInit: state.PlatReducer.flatAllData,
    combineFlatData: state.PlatReducer.dymFlatData,
}))
export default class Index extends React.Component {


    state = {
        display: false,
        checkedFlag: true,
        currentActive: null,
        currentActive1: null,
        currentActive2: null,
        currentActive3: null,
        currentActive4: null,
        priceCheckedFlag: true,
        typeCheckedFlag: true,
        habitableCheckedFlag: true,
        streetCheckedFlag: true,
        province: this.props.provinceData,
        streetsData: [],
        currentProvinceData: '',
        flatData: [],
        queryDataCom: {},

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
                name: '0~2000元', value: '1'
            }, {
                name: '2000~3500元', value: '2'
            }, {
                name: '3500~5000元', value: '3'
            }, {
                name: '5000~6500元', value: '4'
            },{
                name: '6500~8000元', value: '5'
            },{
                name: '8000~10000元', value: '6'
            }
        ],
        habitableData: [
            {
                name: '一居室', value: '1'
            },{
                name: '二居室', value: '2'
            },{
                name: '三居室', value: '3'
            },{
                name: '四居室', value: '4'
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
        //查询所有的房源信息
        this.props.dispatch(get_flat_all('北京市')).then(() => {
            this.setState({
                flatData: this.props.flatAllDataInit,
            })
        })
    }

    //动态查询房源信息
    combineSelect () {

        const data = this.state.queryDataCom;
        Axios.post(`/flat/combineselect`,data).then((result) => {
            console.log("现在的信息", result.data);
            const { data = [] } = result.data;
            //把查询到的房源信息绑定到也页面上
            this.setState({
                flatData: data,
            },() => {
                console.log("======>",this.state.flatData);
            })
        })
    }

    cityClick(e, k) {
        this.setState({display: true, currentActive: k, checkedFlag: false});
        let cName = e.target.innerText;
        //按cityName查询当前城市的所有街道信息
        this.props.dispatch(get_city_by_cname(cName)).then(()=>{
            let streetsData = [];
            this.props.cityDataByCName[0].streets.map((item) => {
                streetsData = streetsData.concat(item);
            })
            const { pId } = this.props.provinceDataByName[0];
            this.setState({
                streetsData: streetsData,
                currentProvinceData: pId,
            })
        })
    }

    //区域‘不限’按钮
    aLimitClick() {
        this.setState({checkedFlag: !this.state.checkedFlag, currentActive: null, display: false});
        const withLimitPosition = { ...this.state.queryDataCom, sId: '', cId: ''}
        this.setState({
            queryDataCom: withLimitPosition
        },() => {
            console.log("去掉区域入参", this.state.queryDataCom);
            this.combineSelect();
        })
    }

    //租金点击事件处理
    priceClick(e, j) {
        this.setState({currentActive1: j-1, priceCheckedFlag: false});
        const temp = e.target.innerText.substr(0,e.target.innerText.length-1).split("~");
        const pData = {fMinPrice: temp[0], fMaxPrice: temp[1] };
        console.log("pData",pData)
        let PQueryData = {...this.state.queryDataCom, ...pData };
        this.setState({
            queryDataCom: PQueryData,
        }, () => {
            console.log("加入租金入参：",this.state.queryDataCom);
            this.combineSelect();
        })

    }

    //租金‘不限’按钮
    aPriceClick() {
        this.setState({priceCheckedFlag: !this.state.priceCheckedFlag, currentActive1: null})
        const withLimitPrice = { ...this.state.queryDataCom, fMinPrice: '', fMaxPrice: '' }
        this.setState({
            queryDataCom: withLimitPrice
        },() => {
            console.log("去掉租金入参：", this.state.queryDataCom);
            this.combineSelect();
        })
    }

    //居室点击事件处理
    habitableClick(e, j) {
        this.setState({currentActive2: j-1, habitableCheckedFlag: false});
        const hData = {fHabitable: e.target.innerText}
        let HQueryData = {...this.state.queryDataCom, ...hData };
        this.setState({
            queryDataCom: HQueryData
        }, () => {
            console.log("加入居室入参：",this.state.queryDataCom);
            this.combineSelect();
        })


    }

    //居室‘不限’按钮
    aHabitableClick() {
        this.setState({habitableCheckedFlag: !this.state.habitableCheckedFlag, currentActive2: null})
        const withLimitHabitable = { ...this.state.queryDataCom, fHabitable: ''};
        this.setState({
            queryDataCom: withLimitHabitable
        }, () => {
            console.log("去掉居室入参：",this.state.queryDataCom);
            this.combineSelect();
        })
    }

    //类型点击查询处理
    typeClick(e, j) {
        this.setState({currentActive3: j-1, typeCheckedFlag: false});
        const tData = { fType: e.target.innerText}
        let TQueryData = { ...this.state.queryDataCom, ...tData };
        this.setState({
            queryDataCom: TQueryData
        },() => {
            console.log("加入房屋类型入参：",this.state.queryDataCom);
            this.combineSelect();
        })

    }

    //类型‘不限’按钮
    aTypeClick() {
        this.setState({typeCheckedFlag: !this.state.typeCheckedFlag, currentActive3: null});
        const withLimitType = { ...this.state.queryDataCom, fType: ''};
        this.setState({
            queryDataCom: withLimitType
        }, () => {
            console.log("去掉类型入参：",this.state.queryDataCom);
            this.combineSelect();
        })
    }

    //街道点击查询处理
    handleClickA (e, key, k) {
        console.log("读取位置信息====>",this.props.provinceDataByName)
        this.setState({
            currentActive4: k,
        })
        const sId = key;
        const streetQueryData = { sId : sId };
        const cityQueryData = { pId :  this.state.currentProvinceData };
        this.setState({
            queryDataCom: { ...this.state.queryDataCom, ...streetQueryData, ...cityQueryData},
        }, () => {
            console.log("按‘地域’查询的入参：",this.state.queryDataCom);
            this.combineSelect();
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
        //console.log("读取位置信息====>",this.props.provinceDataByName)
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
                                                return <a key={k}
                                                          onClick = {(e) => this.handleClickA(e, j.sId, k)}
                                                          className={this.state.currentActive4 == k ? 'sublist': ''}>{j.sName}</a>
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
                                                <a key={j} onClick={(e) => this.habitableClick(e, j+1)}
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
                                                <a key={j} onClick={(e) => this.priceClick(e, j+1)}
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
                                                <a key={j} onClick={(e) => this.typeClick(e, j+1)}
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
                                //取第一张房屋图片展示
                                const fUrl = data.fPic.split(' ');
                                const fType = data.fType.substr(0, data.fType.length-1);
                                return (
                                    <div className="r_lbx">
                                        <Link to ={`/rent/+flatdetails/${data.fId}`} className="rimg" ><img
                                            src={fUrl[0]}
                                            width="300" height="240" title={data.fName} alt={data.fName}/>
                                        </Link>
                                        <div className="r_lbx_cen">
                                            <div className="r_lbx_cena">
                                                <Link to ={`/rent/+flatdetails/${data.fId}`} >{data.fStreet} <span> { data.fName }</span></Link>
                                                <div className="r_lbx_cena">
                                                    地铁三号线
                                                </div>
                                            </div>
                                            <div className="r_lbx_cenb">

                                                {data.fArea}m² | {data.fFloor}楼
                                                | {data.fHabitable} | {data.fOrientation}
                                                &nbsp;&nbsp;<em>{fType}</em>
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
                                            <Link className="lk_more_rent" to ={`/rent/+flatdetails/${data.fId}`} >
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