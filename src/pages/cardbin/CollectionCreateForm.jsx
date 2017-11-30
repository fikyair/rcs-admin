import React from 'react'
import {Modal, Form, Row, Col,Input,Select,Button} from 'antd'
import {FetchAPI} from '../../utils/fetch-middleware';
import {Containerization} from '../../common/PublicComponent'

const Option = Select.Option
const FormItem = Form.Item
@Form.create()
@Containerization()
export default class CollectionCreateForm extends React.Component {
    handleCreate = () => {
        const {initdata} = this.props;
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            // form.resetFields();
            this.setState({ visible: false });

            let params = {
                ...initdata,
                ... this.props.form.getFieldsValue()
            }
            console.log('=========>params',params)
            FetchAPI(`/rcslmainpart/${initdata.id}`, 'put', params).then((data) => {
                // console.log(data)
                //this.props.location.port.reload('/modify')
                this.props.history.push('/modify')
                this.props.form.resetFields()
                //this.props.history.go('/modify')
            })
        });
    }
    render(){
        const { visible, onCancel, form, initdata } = this.props;
        console.log('initdata========>',initdata)

        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="修改信息"
                okText="确认"
                onCancel={onCancel}
                onOk={()=>this.handleCreate()}
            >
                <Form layout="vertical">
                    <FormItem label="主体编码">
                        {getFieldDecorator('mainPartCode', {
                            initialValue: initdata.mainPartCode,
                            rules: [{ required: false, message: 'Please input the title of collection!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="主体名称">
                        {getFieldDecorator('mainPartName',{
                            initialValue:initdata.mainPartName,
                        })(<Input />)}
                    </FormItem>
                    <Row style={{marginTop: 40}}>
                        <Col className="gutter-row" span={12}>
                            <FormItem label="主体类型:">
                                {getFieldDecorator('type',{initialValue:initdata.type,})(
                                    <Select style={{width:150}}>
                                        <Option value="1">B</Option>
                                        <Option value="2">C</Option>
                                    </Select>)}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="状态:">
                                {getFieldDecorator('status',{initialValue:initdata.status,})(
                                    <Select style={{width:150}}>
                                        <Option value="0">无效</Option>
                                        <Option value="1">有效</Option>
                                    </Select>)}
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem label="创建人ID">
                        {getFieldDecorator('createUserId',{initialValue:initdata.createUserId,})(<Input />)}
                    </FormItem>
                    <FormItem label="创建人姓名">
                        {getFieldDecorator('createUserName',{initialValue:initdata.createUserName,})(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}