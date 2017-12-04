import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import error404 from './404.svg';
import './style.less';

export default class NoMatch extends React.Component {

    state = {
        url: null,
    }

    render() {
        return (
            <div>
                <div className="exception___2aJ0K" style={{minHeight: 500, height: '80%'}}>
                    <div className="imgBlock___2pLzV">
                        <div className="imgEle___BEmAa" style={{backgroundImage:`url(${error404})`}}></div>
                    </div>
                    <div className="content___Vjtij"><h1>404</h1>
                        <div className="desc___3v73k">抱歉，你访问的页面不存在</div>
                        <div className="actions___2I7s9">
                            <Button type="primary">

                                <Link to={"/"}><span>返回首页</span></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}