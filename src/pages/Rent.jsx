import React from 'react';
import {Card} from 'antd';
import BreadCrumbComs from "../components/BreadCrumbComs";
import '../style/rent.less';

export default class Index extends React.Component {


    render() {
        return (
            <div>
                    <Card className = "wrapper" style={{marginTop: 50}}>
                        <div className="filter_options">
                            <dl className="dl_lst">
                                <dt>区域：</dt>
                                <dd>

                                    <div className="option_list">
                                        <a href="#" className="onlist">不限</a>

                                        <a href="#" className="">东城区</a>
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
                <Card className="roomlist wrapper">
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