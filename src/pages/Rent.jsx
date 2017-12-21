import React from 'react';
import {Card} from 'antd';
import '../style/rent.less';

export default class Index extends React.Component {

    state = {
        display: false,
        checkedFlag: true,
        currentActive:null,
    }

    mockData = {
        cityData: [
            {
                name: '东城区', value: "11"
            },
            {
                name: '朝阳区', value: "12"
            },{
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
        ]
    }

    cityClick(k){
        this.setState({display: true,currentActive:k, checkedFlag: false});
    }
    limitClick(){
        this.setState({checkedFlag: !this.state.checkedFlag, currentActive: null, display: false});
    }
    render() {
        const city = this.mockData.cityData;
        const street = this.mockData.streetData;

        return (
            <div>
                <Card className="wrapper" style={{marginTop: 50}} noHovering={true}>
                    <div className="filter_options">
                        <dl className="dl_lst">
                            <dt>区域：</dt>
                            <dd>
                                <div className="option_list">
                                    <a onClick={() => this.limitClick()} className={this.state.checkedFlag?'onlist':''}>不限</a>
                                    {
                                        city.map((data,k) => {
                                            return(
                                            <a key={k} onClick={(e)=>this.cityClick(k)} className ={this.state.currentActive == k?'onlist':''}>{data.name}</a>

                                            )
                                        })
                                    }

                                </div>
                                <div className="sub_option_list" style={this.state.display?{display: 'block'}:　{display: 'none'}}>
                                    {
                                        street.map((data,k) => {
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
                                    <a href="#" className="onlist">不限</a>
                                    <a href="#" className="">
                                        2000元以下
                                    </a>
                                    <a href="#" className="">
                                        2000~2500元
                                    </a>
                                    <a href="#" className="">
                                        2500~3000元
                                    </a>
                                    <a href="#" className="">
                                        3000~3500元
                                    </a>
                                    <a href="#" className="">
                                        3500元以上
                                    </a>
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


                </Card>
            </div>
        )
    }
}