import React from 'react';
import {Button, Layout} from 'antd';
import EditableTable from '../../pages/limit/LimitEditableTable';

import {Containerization, setTitle} from '../../common/PublicComponent';

@setTitle('操作记录')
@Containerization()
export default class OperationRecord extends React.Component {
    state = {
    }

    componentWillMount(){
    }
    render() {
        return (
            <div style={{ marginLeft: 10}}>
                <p style={{fontSize: 14, marginBottom: 10}}>操作记录</p>
                <Button style={{marginBottom: 20}}>返回</Button>
                <div style={{marginBottom: 10}}>
                    <h2>商户编号：</h2>
                </div>
                <EditableTable/>
            </div>
        )
    }
}

