import React from 'react';
import { Icon, Button, Input, AutoComplete, Menu,Select, Row, Col } from 'antd';

const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
function onSelect(value) {
    console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
    return (new Array(getRandomInt(5))).join('.').split('.')
        .map((item, idx) => ({
            query,
            category: `${query}${idx}`,
            count: getRandomInt(200, 100),
        }));
}

function renderOption(item) {
    return (
        <Option key={item.category} text={item.category}>
            {item.query} 在
            <a
                href={`https://s.taobao.com/search?q=${item.query}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.category}
            </a>
            区块中
            <span className="global-search-item-count">约 {item.count} 个结果</span>
        </Option>
    );
}
export default class Record extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: value ? searchResult(value) : [],
        });
    }
    render(){
        const { dataSource } = this.state;
        return(
            <div className="global-search-wrapper" style={{ marginTop: 25}}>
                <div style={{height:60, marginLeft:100}}>
                    <AutoComplete
                        className="global-search"
                        size="large"
                        style={{ width: 700,marginLeft:200, marginTop:14 }}
                        dataSource={dataSource.map(renderOption)}
                        onSelect={onSelect}
                        onSearch={this.handleSearch}
                        placeholder="请输入...."
                        optionLabelProp="text"
                    >
                        <Input
                            suffix={(
                                <Button className="search-btn" size="large" type="primary">
                                    <Icon type="search" />搜  索
                                </Button>
                            )}
                        />
                    </AutoComplete>
                </div>
                <div style={{marginTop:60, marginLeft:100}}>
                    <Row gutter={16} style={{marginTop:20}}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                目标群体:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="1">非真实</Option>
                                    <Option value="2">真实</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择产品:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="1">大POS</Option>
                                    <Option value="2">MPOS</Option>
                                    <Option value="3">VV</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择设备身份:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="1">大POS</Option>
                                    <Option value="2">MPOS</Option>
                                    <Option value="3">VV</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择终端:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="1">大POS</Option>
                                    <Option value="2">MPOS</Option>
                                    <Option value="3">VV</Option>
                                </Select>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{marginTop:20}}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择风险等级:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">扫码</Option>
                                    <Option value="">刷卡</Option>
                                    <Option value="">云闪付</Option>
                                    <Option value="">无卡</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择结算方式:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">银联</Option>
                                    <Option value="">QQ</Option>
                                    <Option value="">微信</Option>
                                    <Option value="">支付宝</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择行业大类:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">银联</Option>
                                    <Option value="">QQ</Option>
                                    <Option value="">微信</Option>
                                    <Option value="">支付宝</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择行业细类:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">银联</Option>
                                    <Option value="">QQ</Option>
                                    <Option value="">微信</Option>
                                    <Option value="">支付宝</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{marginTop:20}}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择MCC码:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">扫码</Option>
                                    <Option value="">刷卡</Option>
                                    <Option value="">云闪付</Option>
                                    <Option value="">无卡</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择交易方式:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">银联</Option>
                                    <Option value="">QQ</Option>
                                    <Option value="">微信</Option>
                                    <Option value="">支付宝</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择渠道:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">银联</Option>
                                    <Option value="">QQ</Option>
                                    <Option value="">微信</Option>
                                    <Option value="">支付宝</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择扫码方式:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">银联</Option>
                                    <Option value="">QQ</Option>
                                    <Option value="">微信</Option>
                                    <Option value="">支付宝</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{marginTop:20}}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择卡片所属人:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">扫码</Option>
                                    <Option value="">刷卡</Option>
                                    <Option value="">云闪付</Option>
                                    <Option value="">无卡</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择卡属性:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">银联</Option>
                                    <Option value="">QQ</Option>
                                    <Option value="">微信</Option>
                                    <Option value="">支付宝</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                请选择卡介质:
                                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, marginLeft:30 }}>
                                    <Option value="">银联</Option>
                                    <Option value="">QQ</Option>
                                    <Option value="">微信</Option>
                                    <Option value="">支付宝</Option>
                                    <Option value="1">全部</Option>
                                </Select>
                            </div>
                        </Col>

                    </Row>

                </div>

            </div>
        );
    }
}