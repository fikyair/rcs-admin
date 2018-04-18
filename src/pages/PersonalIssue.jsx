import React from 'react';
import './style/personalissue.less';
import '../style/footer.less';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
import logo from '../img/logo.png';

@Form.create()
export default class PersonalIssue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fCity: '',
            fName: '',
            fBuilding: '',
            fUnit: '',
            fHouse: '',
            fExpectPrice: '',
            fOwnerName: '',
            fOwnerMobile: '',
        }
    }

    onSubmit = (e) => {
        console.log("ss",this.state);
        window.location.href = "/personal";
        e.preventDefault()
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 12},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 12},
                sm: {span: 6},
            },
        };

        return (

            <div>
                <div className="m-jumbotron">
                    <div className="tit">发布出售房源</div>
                    <div className="sub-tit">8000+全国爱家门店·10万+全国经纪人·爱家倾情服务15年+</div>
                </div>
                <div className="m-form">
                    <div className="box-l m-entry">
                        <form  >
                            <dl className="compact">
                                <dt>小区所在城市</dt>
                                <dd>
                                    <input className="sugInput" name="fCity" value={this.state.fCity} onChange={e=>this.setState({fCity:e.target.value})} type="text"  placeholder="请输入所在城市"/>
                                </dd>
                            </dl>
                            <dl>
                                <dt>小区</dt>
                                <dd className="wrap-sug">
                                    <div className="u-sug" id="u-sug">
                                        <input className="sugInput" name="fName" value={this.state.fName} onChange={e=>this.setState({fName:e.target.value})} type="text"  placeholder="请输入小区名"/>
                                        <ul style={{display: 'none'}}></ul>
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>房屋地址</dt>
                                <dd>
                                    <div className="u-select u-select-build">
                                        <input placeholder="楼栋号" name="fBuilding" className="u-select-selected"
                                               onChange={e=>this.setState({fBuilding: e.target.value})}
                                               type="text" value={this.state.fBuilding}/>
                                        <ul className="u-select-options hide" style={{display: 'none'}}></ul>
                                    </div>
                                    <div className="u-select u-select-build" >
                                        <input placeholder="单元号" name="fUnit" className="u-select-selected" type="text"
                                               onChange={e=>this.setState({fUnit: e.target.value})}
                                               value={this.state.fUnit}/>
                                        <ul className="u-select-options hide" style={{display: 'none'}}></ul>
                                    </div>
                                    <div className="u-select u-select-build" >
                                        <input placeholder="门牌号" name="fHouse" className="u-select-selected" type="text"
                                               onChange={e=>this.setState({fHouse: e.target.value})}
                                               value={ this.state.fHouse }/>
                                        <ul className="u-select-options hide"style={{display: 'none'}}></ul>
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>期望售价</dt>
                                <dd>
                                    <input name="fExpectPrice" value={ this.state.fExpectPrice } type="text"
                                           placeholder="请输入您期望卖出的价格"
                                           onChange={e=>this.setState({fExpectPrice: e.target.value})}
                                           style= {{width: 210}}/>
                                    <div className="unit">万元</div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>称呼</dt>
                                <dd>
                                    <input name="fOwnerName" value={ this.state.fOwnerName }
                                           onChange={e=>this.setState({fOwnerName: e.target.value})}
                                           type="text"
                                           placeholder="我们应该如何称呼您"
                                           style= {{width: 210}}/>
                                </dd>
                            </dl>
                            <dl>
                                <dt>手机号码</dt>
                                <dd>
                                    <input name="fOwnerMobile" value={ this.state.fOwnerMobile }
                                           onChange={e=>this.setState({fOwnerMobile: e.target.value})}
                                           type="text"
                                           placeholder="您的联系方式"
                                           style= {{width: 210}}/>
                                </dd>
                            </dl>
                            <input className="btn-submit" type="submit" onClick={this.onSubmit}  value="提交委托"/>
                        </form>
                    </div>
                </div>
                <div className="footer-per">
                    <div className="wrapper">
                        <div className="clear"></div>
                        <div className="foot-logo">
                            <div className="foot-logo-box">
                                <a href="//www.dankegongyu.com/" className="logo">
                                    <img src = {logo} alt="愛家房屋官网图片" title="愛家房屋官网" width="140" height="28"/>
                                </a>
                                <span>© 2017 愛家房屋 京ICP备15009197号-1<br/>地址：北京市东城区朝阳门内大街8号朝阳首府2层212 </span>
                            </div>
                            <div className="web-belive">
                                <a href="#" target="_blank"><img src="//s3.wutongwan.org/img/public/zxrz2016.jpeg"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}