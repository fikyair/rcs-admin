import React from 'react';
import {Card} from 'antd';
import '../style/rent.less';
import logo from '../img/logo.png';
import '../style/footer.less';


export default class Index extends React.Component {

    state = {
        display: false,
        checkedFlag: true,
        currentActive: null,
        currentActive1: null,
        priceCheckedFlag: true,


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
        platData: [
            {
                url: 'http://public.wutongwan.org/public-20171214-Fqv1N_pbx3GsIkaY1IZDRMkvvdi4?imageView2/1/w/380/h/285',
                address: '物资学院路 悦澜水岸家园 主卧 朝南 A室',
                ground: '地铁６号线',
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
                ground: '地铁4号线',
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
                ground: '地铁 1号线,八通线',
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

    cityClick(k) {
        this.setState({display: true, currentActive: k, checkedFlag: false});
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

    render() {
        const city = this.mockData.cityData;
        const street = this.mockData.streetData;
        const price = this.mockData.priceData;
        const platData = this.mockData.platData;

        return (
            <div>
                <Card className="wrapper" style={{marginTop: 50}} noHovering={true}>
                    <div className="filter_options">
                        <dl className="dl_lst">
                            <dt>区域：</dt>
                            <dd>
                                <div className="option_list">
                                    <a onClick={() => this.aLimitClick()}
                                       className={this.state.checkedFlag ? 'onlist' : ''}>不限</a>
                                    {
                                        city.map((data, k) => {
                                            console.log(data)
                                            return (
                                                <a key={k} onClick={(e) => this.cityClick(k)}
                                                   className={this.state.currentActive == k ? 'onlist' : ''}>{data.name}</a>

                                            )
                                        })
                                    }
                                </div>
                                <div className="sub_option_list"
                                     style={this.state.display ? {display: 'block'} : {display: 'none'}}>
                                    {
                                        street.map((data, k) => {
                                            return (
                                                <a key={k} href="#" className="">{data.name}</a>
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

                        <dl className="dl_lst last" style={{display: 'none'}}>
                            <dt>居室：</dt>
                            <dd>
                                <div className="option_list">
                                    <a href="#" className="onlist">不限</a>
                                    <a href="#" className="">一居室</a>
                                    <a href="#" className="">两户合租</a>
                                    <a href="#" className="">三户合租</a>
                                    <a href="#" className="">四户及以上合租</a>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </Card>
                <Card className="roomlist wrapper" noHovering={true}>
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
                            platData.map((data, k) => {
                                console.log(data.platDetails.area)
                                return (
                                    <div className="r_lbx">
                                        <a href="#" className="rimg" target="_blank"><img
                                            src={data.url}
                                            width="300" height="240" title="远洋悦山水" alt="远洋悦山水图片"/>

                                        </a>
                                        <div className="r_lbx_cen">
                                            <div className="r_lbx_cena">
                                                <a href="#" target="_blank">{data.address}</a>
                                                <div className="r_lbx_cena">
                                                    {data.ground}
                                                </div>
                                            </div>
                                            <div className="r_lbx_cenb">

                                                {data.platDetails.area} | {data.platDetails.floor}
                                                | {data.platDetails.habitable} | {data.platDetails.orientation}
                                                <em>整</em>
                                            </div>
                                            <div className="r_lbx_cenc">

                                                <span>{data.spDetails.toilet}</span>
                                                <span>{data.spDetails.shower}</span>
                                                <span>{data.spDetails.heating}</span>
                                            </div>
                                        </div>
                                        <div className="r_lbx_money">
                                            <div className="r_lbx_moneya" style={{textAlign: 'center', paddingTop: 30}}>
                                                <span className="ty_b" style={{fontSize: 40}}>{data.price}</span>&nbsp;
                                                元/月
                                            </div>
                                            <a className="lk_more" href="#" target="_blank">
                                                查看房间详情
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Card>
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