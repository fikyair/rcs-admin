import React from 'react';
import '../style/about.less';
import {Card} from 'antd';

export default class Index extends React.Component{



    render(){
        return(
                <div className="wrapper clearfix" style={{marginTop: 50}} >
                    <Card className="fl roomintro" noHovering={true}   >
                        <div className="hp_usbox">
                            <ul>
                                <li className="active">
                                    <a href="#">关于爱家</a>
                                </li>
                                <li className="">
                                    <a href="#">联系爱家</a>
                                </li>
                                <li className="">
                                    <a href="#">加入爱家</a>
                                </li>
                            </ul>
                        </div>
                    </Card>
                    <div className="fr roomcenter">
                        <div className="hp_title">
                            <div className="hp_t_h">
                                <h1>关于蛋壳</h1>
                            </div>
                            <span className="hp_t_line"></span>
                        </div>
                        <div className="hp_txtbox">
                            <p>
                                我们不建造房子，<br/>
                                但我们改造房间。<br/>
                                但我们改造房间。<br/>
                                但我们给您五星级睡眠。<br/>
                            </p>
                                <p>
                                    我们不是星巴克，<br/>
                                    但我们为您提供高速免费Wifi。<br/>
                                    我们不开发房地产，<br/>
                                    但我们提供私人定制的居住空间。<br/>
                                    我们不是房产中介公司，<br/>
                                    我们是互联网公司 ~ 爱家房屋。<br/>
                                </p>
                                <p>
                                    爱家房屋是紫梧桐（北京）资产管理有限公司旗下的高端白领公寓品牌，专注于为白领打造高品质租住生活，并以精致的装修、品牌家居家电配置、优质的服务快速赢得了租客的青睐。公司于2015年1月在北京成立，正式进入O2O租房市场，并迅速成为互联网租房行业的一匹黑马！
                                </p>
                                <p>
                                    <strong>爱家房屋不是中介</strong>，不是传统意义上的房屋租赁公司，爱家房屋是互联网公司，是资产管理公司。依托于“互联网+房产+金融”的发展模式，爱家房屋已获得A+轮融资，注资千万级美元。
                                </p>
                                <p>
                                    目前，公司已从创始初期的11人迅速发展到现在的400多人，业务已从北京拓展到深圳、上海等地。团队成员大多是有互联网从业经验的高端人才，涉及技术、市场、销售、运营等多个领域。人才聚而发展始，公司正以强劲的发展态势迅速崛起！
                                </p>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footcontainer">
                            <div className="fl contai">
                                <a href="tel:400-018-8090" className="m_keep" id="click_bottom_tel"><i></i><span className="telphoneview">客服热线：400-018-8090</span><span className="telphonepcview">客服热线：400-818-5656</span></a>
                                <a href="#">关于蛋壳</a><span>·</span>
                                <a href="#">联系蛋壳</a><span>·</span>
                                <a href="#">加入蛋壳</a><span>·</span>
                                <span>关注我们</span>
                            </div>
                            <div className="fr copyt">
                                © 2016 蛋壳公寓 京ICP备15009197号
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}