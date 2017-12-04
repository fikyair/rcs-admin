import React from 'react';
import {Button, Layout} from 'antd';
import EditableTable from '../../pages/limit/LimitEditableTable';

import {Containerization, setTitle} from '../../common/PublicComponent';

@setTitle('操作记录')
@Containerization()
export default class OperationRecord extends React.Component {
    state = {
        isMerchant: false,
    }

    componentWillMount(){
        if (this.props.match.path.indexOf('merchant') > 0) {
            this.setState({isMerchant: true})
        }
    }
    render() {
        const {isMerchant} = this.state;
        return (
            <div style={{ marginLeft: 10}}>
                <p style={{fontSize: 14, marginBottom: 10}}>操作记录</p>
                <Button style={{marginBottom: 20}}>返回</Button>
                <div style={{marginBottom: 10}}>
                    {isMerchant? <h2>商户编号：</h2> : <h2>限额名称XXXXXXXXXXXXXXX</h2>}
                </div>
                <EditableTable/>
            </div>
        )
    }
}

