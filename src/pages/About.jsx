import React from 'react';
import '../style/about.less';
import {Card} from 'antd';
import logo from '../img/logo.png';
import {AboutAiJia, ConcatAiJia} from '../components/AboutItems';
import { Link } from 'react-router-dom';

export default class Index extends React.Component {

    state = {
        about: true,
        concat: false,
        join: false,
        flag: 'about',
        changeA: true,
        changeB: false,
        changeC: false,
     }


    left = () => {
        if (this.state.about) {
            return (
                <AboutAiJia/>
            )
        } else if (this.state.concat) {
            return (
                <ConcatAiJia/>
            )

        }

    }

    itemClick = (flag) => {
        if(flag === 'about'){
            this.setState({about: true, concat: false, changeB: false, changeA: !this.state.changeA, changeC: false})
        }else if( flag === 'concat'){
            this.setState({about: false, concat: true, changeA: false, changeB: !this.state.changeB, changeC: false})
        }else {
            this.state({about: false, concat: false, changeA: false, changeB: false ,changeC: !this.state.changeC})
        }

    }

    render() {
        return (
            <div>
                <div className="wrapper clearfix" style={{marginTop: 50}}>
                    <Card className="fl roomintro" noHovering={true}>
                        <div className="hp_usbox">
                            <ul>
                                <li className={this.state.changeA?'active': ''} onClick={()=>{this.itemClick('about')}}>
                                    <Link to='#' >关于爱家</Link>
                                </li>
                                <li className={this.state.changeB?'active': ''} onClick={()=>{this.itemClick('concat')}}>
                                    <Link to="#">联系爱家</Link>
                                </li>
                                <li className={this.state.changeC?'active': ''} onClick={()=>{this.itemClick('join')}}>
                                    <Link to="#">加入爱家</Link>
                                </li>
                            </ul>
                        </div>
                    </Card>

                    {this.left()}

                </div>
                <div className="footer-new">
                    <div className="wrapper">
                        <div className="clear"></div>
                        <div className="foot-logo">
                            <div className="foot-logo-box">
                                <a href="//www.dankegongyu.com/" className="logo">
                                    <img src={logo} alt="愛家房屋官网图片" title="愛家房屋官网" width="140" height="28"/>
                                </a>
                                <span>© 2017 愛家房屋 京ICP备15009197号-1<br/>地址：北京市东城区朝阳门内大街8号朝阳首府2层212 </span>
                            </div>
                            <div className="web-belive">
                                <a href="//www.baidu.com/s?wd=%E7%B4%AB%E6%A2%A7%E6%A1%90%28%E5%8C%97%E4%BA%AC%29%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8@v"
                                   target="_blank"><img src="//s3.wutongwan.org/img/public/zxrz2016.jpeg"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}