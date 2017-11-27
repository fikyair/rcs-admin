import React from 'react';
// import { Containerization } from '../../common/PublicComponent';
import {Icon, Button, AutoComplete, Select, Row, Col, Form, Input, Table, Columns, Pagination} from 'antd';
import {FetchAPI} from '../../utils/fetch-middleware';

const FormItem = Form.Item;


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

@Form.create()
export default class Record extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        dataSource: [],
        pageNum: 1,
        pageSize: 3,
        total: 0,
        data: [],
    };

    mockData = {
        list:[{
            label:'银行卡类型',
            name:'cardType',
            option:[
                {
                    value:'1',
                    name:'中國銀行'
                },
                {
                    value:'2',
                    name:'花旗銀行'
                }
            ],

        },{
            label:'目标对象',
            name:'cardObject',
            option:[
                {
                    value:'1',
                    name:'实体'
                },{
                    value:'2',
                    name:'非实体',
                }
            ],
        }],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: value ? searchResult(value) : [],
        });
    }
    columns = [{
        title: '用户名字',
        dataIndex: 'optUserName',
    }, {
        title: '日交易限额',
        dataIndex: 'dayAmountLimit',
    }, {
        title: '月交易限额',
        dataIndex: 'monthAmountLimit',
    }, {
        title: '年交易限额',
        dataIndex: 'yearAmountLimit',
    }];

    //获取数据存入
    search(args) {
        const {pageNum, pageSize} = this.state;
        const {getFieldsValue} =  this.props.form.getFieldsValue();
        console.log('form屬性值========>',getFieldsValue)
        const params = {
            ...getFieldsValue,
            pageNum,
            pageSize,
            ...args,
        }
        FetchAPI(`/rcslmodelcardbinoptlog?pageNum=${params.pageNum}&pageSize=${params.pageSize}`, 'GET').then((data) => {
            this.setState({
                pageNum: data.current,
                total: data.total,
                pageSize: data.size,
                data: data.records
            })
            //console.log(data)
        })

    }

    // submit(){
    //     console.log('222')
    //     this.props.form.validateFieldsAndScroll((err, values) => {
    //             const {name, password} = this.state;
    //             let data = this.props.form.getFieldsValue();
    //             console.log('form数据', data);
    //             FetchAPI(`/record`, 'post', data).then((data) => {
    //                 console.log(data)
    //             })
    //     });
    // }
    //首次进入加载数据
    componentWillMount() {
        // console.log('=====>obj',this.props.location.state.some)
        this.search();
    }

    onChange = (page) => {
        this.setState({pageNum: page})
        this.search({
            pageNum: page,
        })
    }

    render() {
        const {dataSource} = this.state;
        const {getFieldDecorator} = this.props.form;
        //const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {//文字
                xs: {span: 24},//小于768px
                sm: {span: 10},//大于768px
            },
            wrapperCol: {//标签
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const queryItemLayout ={
            xs: 12,
            sm: 8,
            md: 6,
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };

        return (
            <div style={{marginTop: 25}}>
                {/*搜索框*/}
                <div style={{height: 60, marginLeft: 100}}>
                    <AutoComplete
                        className="global-search"
                        size="large"
                        style={{width: 700, marginLeft: 200, marginTop: 14}}
                        dataSource={dataSource.map(renderOption)}
                        // onSelect={onSelect}
                        onSearch={this.handleSearch}
                        placeholder="请输入...."
                        optionLabelProp="text"
                    >
                        <Input
                            suffix={(
                                <Button className="search-btn" size="large" type="primary">
                                    <Icon type="search"/>搜 索
                                </Button>
                            )}
                        />
                    </AutoComplete>
                </div>
                {/*选择框*/}
                <div style={{marginLeft: 200}}>
                    <Form>
                        {/*  <FormItem
                            {...formItemLayout}
                            //label="目标群体:"
                            hasFeedback
                        >*/}

                        {/*{
                            this.mockData.list.map((v,k)=>{
                                return (
                                    <FormItem
                                        key={k}
                                        {...formItemLayout}
                                        label={v.label}
                                    >{
                                        getFieldDecorator(v.name)(
                                            <Select labelInValue defaultValue={{key: '1'}}
                                                    style={{width: 120, marginLeft: 30}}>
                                                {
                                                    v.option.map((va,k)=>{
                                                        return <Option key={k} value={va.value}>{va.name}</Option>
                                                    })
                                                }
                                            </Select>
                                        )
                                    }</FormItem>
                                )
                            })
                        }*/}

                        <Row style={{marginTop: 40}}>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="目标群体:"
                                    >
                                        {
                                            getFieldDecorator('qunti')(
                                                <Select labelInValue defaultValue={{key: '1'}}
                                                        style={{width: 120, marginLeft: 30}}>
                                                    <Option value="1">非真实</Option>
                                                    <Option value="2">真实</Option>
                                                </Select>
                                            )

                                        }

                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择产品:"
                                    >
                                        {
                                            getFieldDecorator('qunti')(
                                                <Select labelInValue defaultValue={{key: '1'}}
                                                        style={{width: 120, marginLeft: 30}}>
                                                    <Option value="1">大POS</Option>
                                                    <Option value="2">MPOS</Option>
                                                    <Option value="3">VV</Option>
                                                </Select>)
                                        }
                                    </FormItem>
                                </div>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择设备身份:"
                                    >
                                        {
                                            getFieldDecorator('qunti')(
                                                <Select labelInValue defaultValue={{key: '1'}}
                                                        style={{width: 120, marginLeft: 30}}>
                                                    <Option value="1">大POS</Option>
                                                    <Option value="2">MPOS</Option>
                                                    <Option value="3">VV</Option>
                                                </Select>
                                            )
                                        }</FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                      <FormItem
                                    {...formItemLayout}
                                    label="请选择终端:"
                                >
                                    {
                                        getFieldDecorator('qunti')(
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="1">大POS</Option>
                                        <Option value="2">MPOS</Option>
                                        <Option value="3">VV</Option>
                                    </Select>
                                        )
                                    }</FormItem>
                            </Col>
                        </Row>

                        <Row gutter={16} style={{marginTop: 40}}>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择风险等级:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">扫码</Option>
                                        <Option value="">刷卡</Option>
                                        <Option value="">云闪付</Option>
                                        <Option value="">无卡</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择结算方式:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">银联</Option>
                                        <Option value="">QQ</Option>
                                        <Option value="">微信</Option>
                                        <Option value="">支付宝</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择行业大类:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">银联</Option>
                                        <Option value="">QQ</Option>
                                        <Option value="">微信</Option>
                                        <Option value="">支付宝</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择行业细类:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">银联</Option>
                                        <Option value="">QQ</Option>
                                        <Option value="">微信</Option>
                                        <Option value="">支付宝</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{marginTop: 40}}>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择MCC码:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">扫码</Option>
                                        <Option value="">刷卡</Option>
                                        <Option value="">云闪付</Option>
                                        <Option value="">无卡</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择交易方式:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">银联</Option>
                                        <Option value="">QQ</Option>
                                        <Option value="">微信</Option>
                                        <Option value="">支付宝</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择渠道:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">银联</Option>
                                        <Option value="">QQ</Option>
                                        <Option value="">微信</Option>
                                        <Option value="">支付宝</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择扫码方式:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">银联</Option>
                                        <Option value="">QQ</Option>
                                        <Option value="">微信</Option>
                                        <Option value="">支付宝</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{marginTop: 40}}>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择卡片所属人:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">扫码</Option>
                                        <Option value="">刷卡</Option>
                                        <Option value="">云闪付</Option>
                                        <Option value="">无卡</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择卡属性:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">银联</Option>
                                        <Option value="">QQ</Option>
                                        <Option value="">微信</Option>
                                        <Option value="">支付宝</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                            <Col className="gutter-row" {...queryItemLayout}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="请选择卡介质:"
                                    >
                                    <Select labelInValue defaultValue={{key: '1'}} style={{width: 120, marginLeft: 30}}>
                                        <Option value="">银联</Option>
                                        <Option value="">QQ</Option>
                                        <Option value="">微信</Option>
                                        <Option value="">支付宝</Option>
                                        <Option value="1">全部</Option>
                                    </Select>
                                    </FormItem>
                            </Col>
                        </Row>
                        {/*</FormItem>*/}
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" onClick={() => {
                                this.submit()
                            }}>查询</Button>
                        </FormItem>
                    </Form>
                </div>
                {/*table表格显示数据*/}
                <div style={{width: 1200, marginLeft: 80}}>
                    <Table bordered datas={this.state.data} pagination={false} columns={this.columns}/>
                    <div className="query">
                        <Pagination current={this.state.pageNum} pageSize={this.state.pageSize} total={this.state.total}
                                    onChange={this.onChange}/>
                    </div>
                </div>
            </div>
        );
    }
}