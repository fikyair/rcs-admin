import React from 'react';
import {Carousel, Row, Input, Button, Col, Card, Select} from 'antd';
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

export default class Index extends React.Component {

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    mockData = {
        houseData: [{
            img: 'http://public.wutongwan.org/public-20171219-FgaTYh9h4OXiFf7JT12aAeomUM3O?imageView2/1/w/380/h/285',
            address: '大望路 东区国际公寓 主卧 朝西南 A室',
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

    render() {
        const houseData = this.mockData.houseData;

        return (
            <div>
                <Carousel autoplay>
                    <div><img src={nav1} width={'100%'} height={332}/></div>
                    <div><img src={nav2} width={'100%'} height={332}/></div>
                    <div><img src={nav3} width={'100%'} height={332}/></div>
                    <div><img src={nav4} width={'100%'} height={332}/></div>
                </Carousel>
                <div className="g-center">
                    <Select defaultValue="销售" style={{width: 95, marginRight: 50, marginTop: 50}}
                            onChange={this.handleChange}>
                        <Option value="price">销售</Option>
                        <Option value="area">租赁</Option>
                    </Select>
                    <Select defaultValue="地域" style={{width: 95, marginRight: 50, marginTop: 50}}
                            onChange={this.handleChange}>
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
                        <Col span={8} style={{float: 'left'}}>
                            {
                                houseData.map((data, k) => {
                                    return (
                                        <Card style={{width: 380}} bodyStyle={{padding: 0}}>
                                            <img alt="example" width="100%" src={data.img}/>
                                            <div className="room_ti">
                                                <a href="#">{data.address}</a>
                                            </div>
                                            <div className="roo_ads">
                                                <div className="roo_ads fl">
                                                    {data.ground} / {data.platDetails.area} / 独卫
                                                </div>
                                                <div className="room_money fr">
                                                    {data.price}<span>元/月</span>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })
                            }
                        </Col>

                    </Row>
                </div>
            </div>
        );

    }

}


{/*<div className="mainbox clear blocklook">*/
}
{/*<div id="oneTabContent">*/
}
{/*<div className="room_pro " id="rooms_特惠房源">*/
}
{/*<div className="room_pro_box">*/
}
{/*<a href="#">*/
}
{/*<img alt="example" width="100%" src={plat1}/>*/
}
{/*</a>*/
}
{/*<div className="room_ti">*/
}
{/*<a href="#">大望路 东区国际公寓 主卧 朝西南 A室</a>*/
}
{/*</div>*/
}
{/*<div className="roo_ads">*/
}
{/*<div className="roo_ads fl">*/
}
{/*地铁 1号线,八通线 / 约22平米 / 独卫*/
}
{/*</div>*/
}
{/*<div className="room_money fr">*/
}
{/*3940<span>元/月</span>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*/!*<div className="room_pro_box">*!/*/
}
{/*/!*<a href="#">*!/*/
}
{/*/!*<img*!/*/
}
{/*/!*src="http://public.wutongwan.org/public-20170122-Fty1bFXa4ZGNtxk2kF66wOHk0VMq?imageView2/1/w/380/h/285"*!/*/
}
{/*/!*alt="金台路 公园5号 主卧 朝东南 A室图片" title="金台路 公园5号 主卧 朝东南 A室" width="380"/>*!/*/
}
{/*/!*</a>*!/*/
}
{/*/!*<div className="room_ti">*!/*/
}
{/*/!*<a href="#">金台路 公园5号 主卧 朝东南 A室</a>*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*<div className="roo_ads">*!/*/
}
{/*/!*<div className="roo_ads fl">*!/*/
}
{/*/!*地铁 6号线,14号线 / 约22平米 / 独卫*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*<div className="room_money fr">*!/*/
}
{/*/!*4730<span>元/月</span>*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*<div className="room_pro_box">*!/*/
}
{/*/!*<a href="#">*!/*/
}
{/*/!*<img*!/*/
}
{/*/!*src="http://public.wutongwan.org/public-20171219-Fq30Y-oNU2Hw2iN6GXUk_IzXK3M4?imageView2/1/w/380/h/285"*!/*/
}
{/*/!*alt="双井 广渠路48号院 主卧 朝南 B室图片" title="双井 广渠路48号院 主卧 朝南 B室" width="380"/>*!/*/
}
{/*/!*</a>*!/*/
}
{/*/!*<div className="room_ti">*!/*/
}
{/*/!*<a href="#">双井 广渠路48号院 主卧 朝南 B室</a>*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*<div className="roo_ads">*!/*/
}
{/*/!*<div className="roo_ads fl">*!/*/
}
{/*/!*地铁 10号线 / 约14平米*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*<div className="room_money fr">*!/*/
}
{/*/!*3300<span>元/月</span>*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*</div>*!/*/
}

{/*</div>*/
}
{/*</div>*/
}
{/*</div>*/
}