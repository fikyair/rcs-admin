import React from 'react';
import {Carousel, Row,Input, Button, Col, Card,Select} from 'antd';
import '../style/style.less';
import nav1 from '../img/nav1.gif';
import nav2 from '../img/nav2.jpg';
import nav3 from '../img/nav3.jpg';
import nav4 from '../img/nav4.jpg';
import plat1 from '../img/plat1.jpg';
import plat2 from '../img/plat2.jpg';
import plat3 from '../img/plat3.jpg';
const Option = Select.Option;
const {Meta} = Card;

export default class Index extends React.Component{

     handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div><img src={nav1} width={'100%'} height={332}/></div>
                    <div><img src={nav2} width={'100%'} height={332}/></div>
                    <div><img src={nav3} width={'100%'} height={332}/></div>
                    <div><img src={nav4} width={'100%'} height={332}/></div>
                </Carousel>

                <div className="g-center">
                    <Select defaultValue="销售" style={{ width: 95, marginRight: 50,marginTop:50 }} onChange={this.handleChange}>
                        <Option value="price">销售</Option>
                        <Option value="area">租赁</Option>
                    </Select>
                    <Select defaultValue="地域" style={{ width: 95, marginRight: 50,marginTop:50 }} onChange={this.handleChange}>
                        <Option value="price">价格</Option>
                        <Option value="area">地域</Option>
                    </Select>
                    <div className="sear_menu">
                        <input type="text" className="sear_input" name="search_text"
                               placeholder="例如: 3D全景、10号线、四惠、天通苑等"/>
                        <button type="submit" className="search_btn">搜索</button>
                    </div>
                </div>
                <div className="col_row">
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
                <div style={{marginLeft: 40}}>
                    <Row>
                        <Col span={8}>
                            <Card style={{width: 380}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src={plat1}/>
                                </div>
                                <div className="custom-card">
                                    <h3>大望路 东区国际公寓 主卧 朝北 C室</h3>
                                    <p>地铁 1号线,八通线 / 约20平米 / 独立阳台</p>
                                    <p>3070元/月</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>

                            <Card style={{width: 380}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src={plat2}/>
                                </div>
                                <div className="custom-card">
                                    <h3>大望路 东区国际公寓 主卧 朝西南 A室</h3>
                                    <p>地铁 1号线,八通线 / 约22平米 / 独卫</p>
                                    <p>3940元/月</p>
                                </div>
                            </Card>
                         </Col>
                            <Col span={8}>

                                <Card style={{width: 380}} bodyStyle={{padding: 0}}>
                                    <div className="custom-image">
                                        <img alt="example" width="100%" src={plat3}/>
                                    </div>
                                    <div className="custom-card">
                                        <h3>双井 广渠路48号院 主卧 朝南 B室</h3>
                                        <p> 地铁 10号线 / 约14平米</p>
                                        <p>3300元/月</p>
                                    </div>
                                </Card>
                            </Col>
                    </Row>
                </div>
            </div>
    );

    }

    }