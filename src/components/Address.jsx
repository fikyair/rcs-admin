import React from 'react'
import {Select} from 'antd';
import {Form} from 'antd'
const FormItem = Form.Item
const Option = Select.Option;
@Form.create()
export default class Address extends React.Component {
    state = {
        provinceData: [],
        cityData: [],
        areaData: []
    }
    handleProvinceChange = (value) => {
        this.getCity(1)
    }
    handleCityChange = (value) => {
        this.getArea(2)
    }


    // 获取省份下拉数据
    getProvince() {
        //　接口返回的数据
        this.setState({provinceData: [{areaId: '1', areaNm: '北京'}, {areaId: '２', areaNm: '黑龙江'},]})
    }

    // 获取省份下拉数据
    getCity(provinceId) {
        //　接口返回的数据
        this.setState({cityData: [{areaId: '1', areaNm: '北京'}, {areaId: '２', areaNm: '黑龙江'},]})
    }


    // 获取地址区下拉列表
    getArea(cityId) {
        //　接口返回的数据
        this.setState({areaData: [{areaId: '1', areaNm: '北京'}, {areaId: '２', areaNm: '黑龙江'},]})
    }


    // 渲染地址省下拉列表
    renderProvince() {
        return this.state.provinceData.map(item => <Option key={item.areaId}
                                                           value={String(item.areaId)}>{item.areaNm}</Option>);
    }

    // 渲染地址市下拉列表
    renderCity() {
        return this.state.cityData.map(item => <Option key={item.areaId}
                                                       value={String(item.areaId)}>{item.areaNm}</Option>);
    }

    // 渲染地址区下拉列表
    renderArea() {
        return this.state.areaData.map(item => <Option key={item.areaId}
                                                       value={String(item.areaId)}>{item.areaNm}</Option>);
    }

    componentWillMount() {
        this.getProvince()
    }


    render() {
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 10},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const formItemWidth = 300;
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <FormItem
                    style={{display: 'inline-block', width: formItemWidth, marginRight: 8}}
                    {...formItemLayout}
                    label="省"
                >
                    {getFieldDecorator('provinceField', {
                        onChange: this.handleProvinceChange,
                        rules: [
                            {
                                required: true, message: '省不能为空',
                            },
                        ],
                    })(
                        <Select style={{width: '80px'}} placeholder="请选择省">
                            {this.renderProvince()}
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    style={{display: 'inline-block', width: formItemWidth, marginRight: 8}}
                    {...formItemLayout}
                    label="市"
                >
                    {getFieldDecorator('cityField', {
                        onChange: this.handleCityChange,
                        rules: [
                            {
                                required: true, message: '省不能为空',
                            },
                        ],
                    })(
                        <Select style={{width: '80px'}} placeholder="请选择市">
                            {this.renderCity()}
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    style={{display: 'inline-block', width: formItemWidth, marginRight: 8}}
                    {...formItemLayout}
                    label="区"
                >
                    {getFieldDecorator('areaField', {
                        rules: [
                            {
                                required: true, message: '省不能为空',
                            },
                        ],
                    })(
                        <Select placeholder="请选择区" style={{width: '80px'}}>
                            {this.renderArea()}
                        </Select>
                    )}
                </FormItem>



            </div>
        );
    }
}