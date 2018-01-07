import React from 'react';
import '../style/platDetails.less';
import { Card} from 'antd';
import details from '../img/details.jpg';


export default class PlatDetails extends React.Component {

    render() {

        return (
            <div className = "wrapper" style={{marginTop: 50}}>
                <div className="room-detail" >
                    <div className="room-detail-left">
                        <div className="carousel-inner">
                            <div className=" " data-slide-number="0">
                                <img className="img-responsive" title="营口道 金街庭苑 主卧 朝西 C室" alt="营口道 金街庭苑 主卧 朝西 C室图片"
                                     width="600" height="450"
                                     src="http://public.wutongwan.org/public-20171220-Fj4IZAx9QuukYPDuVe0y_F1b8G3P-roomPcRent.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="room-detail-right">
                        <div className="room-name">
                            <h1>物资学院路 悦澜水岸家园 主卧 朝南 A室</h1>
                        </div>
                        <div className="room-title">
                            <span>独立阳台</span>
                            <span>独立淋浴</span>
                            <span>集中供暖</span>
                        </div>


                        <div className="room-price">
                            <div className="price-list moth">
                                <label>月租金</label>
                                <div className="room-price-sale">1760 <em>元/月</em></div>
                            </div>
                        </div>

                        <div className="room-list-box">
                            <div className="room-detail-box">
                                <div className="room-list">
                                    <label>面积：约19㎡（以现场勘察为准）</label>
                                </div>
                                <div className="room-list">
                                    <label>编号：14169-C</label>
                                </div>
                                <div className="room-list">
                                    <label>
                                        户型：1室1卫
                                        <b className="methodroom-rent">合</b>
                                    </label>
                                </div>
                                <div className="room-list">
                                    <label>付款：<a href="/zhuanti/20170821instalment" className="instalment" target="_blank">可支持分期月付</a>[不收中介费]</label>
                                </div>
                            </div>

                            <div className="room-detail-box   on ">
                                <div className="room-list">
                                    <label>朝向：南</label>
                                </div>
                                <div className="room-list">
                                    <label>楼层：18层</label>
                                </div>
                                <div className="room-list">
                                    <label>
                                        <em>区域：</em>
                                        <div className="detail-roombox" title="营口道 金街庭苑 主卧 朝西 C室">
                                            <a href="http://www.dankegongyu.com/room/tj?search_text=%E5%92%8C%E5%B9%B3%E5%8C%BA" className="room-detail-sq" target="_blank">和平区</a>
                                            <a href="http://www.dankegongyu.com/room/tj?search_text=%E8%90%A5%E5%8F%A3%E9%81%93" className="room-detail-sq" target="_blank">营口道</a>
                                            <a href="http://www.dankegongyu.com/room/tj?search_text=%E9%87%91%E8%A1%97%E5%BA%AD%E8%8B%91" className="room-detail-sq" target="_blank">金街庭苑</a>
                                        </div>
                                        <a href="javascript:void(0)" className="map-link-title">查看地图</a>
                                    </label>
                                </div>
                                <div className="room-list">

                                    <label title="距1号线,3号线营口道站600米">地铁：距1号线,3号线营口道站600米</label>
                                </div>
                            </div>
                        </div>
                        <div className="room-detail-user">
                            <div className="user-phone">
                                <span>电话预约</span>
                                <strong>400 - 818 - 5656</strong>
                                <em>服务时间：9:00 - 21:00（节假日照常）</em>
                            </div>
                            <div className="viewroom" data-toggle="modal" data-target="#myroom">我要看房</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}