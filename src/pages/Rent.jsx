import React from 'react';
import {Card} from 'antd';
import '../style/rent.less';

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
                value: 'platImage',
                url: 'http://public.wutongwan.org/public-20171214-Fqv1N_pbx3GsIkaY1IZDRMkvvdi4?imageView2/1/w/380/h/285',
            }, {
                name: '物资学院路 悦澜水岸家园 主卧 朝南 A室', value: 'address',
            }, {
                name: '地铁 6号线', value: 'underground',
            }, {
                platDetails: [{
                    name: '约54㎡', value: 'area', area: '约54㎡'
                }, {
                    name: '18楼', value: 'floor',
                }, {
                    name: '１室１卫', value: 'habitable',
                }, {
                    name: '朝南', value: 'orientation',
                }, {
                    name: '整租', value: 'type',
                }]
            }, {
                spDetails: [{
                    name: '独立卫生间', value: 'toilet',
                }, {
                    name: '独立淋浴', value: 'shower',
                }, {
                    name: '供暖', value: 'heating'
                }]
            }, {}, {
                name: '3660', value: 'price',
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
        debugger
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
                                            console.log("sss", data);
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
                                return (
                                    <div className="r_lbx">
                                        <a href="#" className="rimg" target="_blank"><img
                                            src="http://public.wutongwan.org/public-20171214-Fqv1N_pbx3GsIkaY1IZDRMkvvdi4?imageView2/1/w/380/h/285"
                                            width="300" height="240" title="远洋悦山水" alt="远洋悦山水图片"/>

                                        </a>
                                        <div className="r_lbx_cen">
                                            <div className="r_lbx_cena">
                                                <a href="#" target="_blank"></a>
                                                <div className="r_lbx_cena">
                                                    地铁 6号线
                                                </div>
                                            </div>
                                            <div className="r_lbx_cenb">

                                                约54㎡  | 18楼
                                                | 1室1卫 | 朝南
                                                <em>整</em>
                                            </div>
                                            <div className="r_lbx_cenc">

                                                <span>独立卫生间</span>
                                                <span>独立淋浴</span>
                                                <span>集中供暖</span>
                                            </div>
                                        </div>
                                        <div className="r_lbx_money">
                                            <div className="r_lbx_moneya" style={{textAlign: 'center', paddingTop: 30}}>
                                                <span className="ty_b" style={{fontSize: 40}}>3660</span>&nbsp;元/月
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
            </div>
        )
    }
}