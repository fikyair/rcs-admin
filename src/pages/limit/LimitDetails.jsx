import React from 'react';
import {Input, Layout, Form, Row, Col} from 'antd'
import {Containerization, setTitle} from '../../common/PublicComponent';
const InputGroup = Input.Group;

const FormItem = Form.Item;
@setTitle('限额详情页')
@Containerization()
@Form.create()
export default class LimitDetails extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        };
       const queryItemLayout ={
           xs: 12,
           sm: 8,
           md: 6,
        }
        return (
            <div>

                <Layout>
                    <h3>限额名称：POS商户对私结算限额</h3>
                </Layout>

                <h3>商户属性：</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Row style={{marginTop: 10}}>
                        <Col span={8}>
                            <FormItem
                                {...formItemLayout}
                                label="结算账户类型："
                            >
                                {getFieldDecorator('accountType')(
                                    <Input disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem
                                {...formItemLayout}
                                label="名单类型："
                            >
                                {getFieldDecorator('listType')(
                                    <Input disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem
                                {...formItemLayout}
                                label="是否优质商户："
                            >
                                {getFieldDecorator('isExcellentClient')(
                                    <Input disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                            <Col span={8}>
                                <FormItem
                                    {...formItemLayout}
                                    label="行业大类："
                                >
                                    {getFieldDecorator('industryCategory')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    {...formItemLayout}
                                    label="细类："
                                >
                                    {getFieldDecorator('detailCategory')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    {...formItemLayout}
                                    label="MCC："
                                >
                                    {getFieldDecorator('mcc')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否小额双免："
                                >
                                    {getFieldDecorator('isSmallExemption')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    {...formItemLayout}
                                    label="是否有终端："
                                >
                                    {getFieldDecorator('hasTerminal')(
                                        <Input disabled={true}/>

                                    )}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    {...formItemLayout}
                                    label="POS商户类型："
                                >
                                    {getFieldDecorator('posClientType')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    {...formItemLayout}
                                    label="POS秒到等级："
                                >
                                    {getFieldDecorator('posSecondRank')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem
                                    {...formItemLayout}
                                    label="POS结算周期："
                                >
                                    {getFieldDecorator('posbalanceTime')(
                                        <Input disabled={true}/>
                                    )}
                                </FormItem>
                            </Col>
                    </Row>
                </Form>
                <div style={{backgroundColor: '#DBDBDB',height: 0.5, width: '100%', marginBottom: 10}}></div>
                <h3>交易属性：</h3>
                <h4>线下交易：</h4>
                <Form>
                      <Row style={{marginTop: 10}}>
                          <Col span={6}>
                              <FormItem
                                  {...formItemLayout}
                                  label="卡属性："
                              >

                                  {getFieldDecorator('carType')(
                                      <Input disabled={true}/>
                                  )}
                              </FormItem>
                          </Col>
                          <Col span={6}>
                              <FormItem
                                  {...formItemLayout}
                                  label="卡介质："
                              >

                                  {getFieldDecorator('media')(
                                      <Input disabled={true}/>
                                  )}
                              </FormItem>
                          </Col>
                          <Col span={6}>
                              <FormItem
                                  {...formItemLayout}
                                  label="消费方式："
                              >

                                  {getFieldDecorator('consumeType')(
                                      <Input disabled={true}/>
                                  )}
                              </FormItem>
                          </Col>
                          <Col span={6}>
                              <FormItem
                                  {...formItemLayout}
                                  label="接触方式："
                              >

                                  {getFieldDecorator('contactType')(
                                      <Input disabled={true}/>
                                  )}
                              </FormItem>
                          </Col>
                      </Row>
                </Form>
                <h4>扫码交易：</h4>
                <Form>
                    <Row style={{marginTop: 10}}>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="扫码类型："
                            >

                                {getFieldDecorator('scanType')(
                                    <Input disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="扫码类型："
                            >

                                {getFieldDecorator('scanType')(
                                    <Input disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="扫码类型："
                            >

                                {getFieldDecorator('scanType')(
                                    <Input disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
                <div style={{backgroundColor: '#DBDBDB',height: 0.5, width: '100%', marginBottom: 10}}></div>
                <h3>修改限额值：</h3>
                <Form>
                    <Row style={{marginTop: 10}}>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单笔(金额)："
                            >

                                {getFieldDecorator('singleAmount')(
                                    <Input addonAfter={'元'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单日(金额)："
                            >

                                {getFieldDecorator('singleAmountDay')(
                                    <Input addonAfter={'元'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="单月(金额)："
                            >

                                {getFieldDecorator('singleAmountMonth')(
                                    <Input addonAfter={'元'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="终身(金额)："
                            >

                                {getFieldDecorator('lifeAmountDay')(
                                    <Input addonAfter={'元'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
                <Form>
                    <Row style={{marginTop: 10}}>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="两笔间隔："
                            >

                                {getFieldDecorator('scanType')(
                                    <Input addonAfter={'秒'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="笔数/分钟："
                            >

                                {getFieldDecorator('countByMinute')(
                                        <InputGroup compact >
                                            <Input disabled={true} style={{width: 70}}addonAfter={'笔'} />
                                            <Input style={{width: 24, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="/" disabled />
                                            <Input disabled={true} style={{width: 70, borderLeft: 0}} addonAfter={'分'} />
                                        </InputGroup>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="笔/日"
                            >
                                {getFieldDecorator('minute')(
                                    <Input addonAfter={'笔'} disabled={true}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
    }

