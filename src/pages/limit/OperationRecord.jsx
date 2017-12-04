import React from 'react';
import {Button, Layout} from 'antd';
import EditableTable from '../../pages/limit/LimitEditableTable';

import {Containerization, setTitle} from '../../common/PublicComponent';

@setTitle('操作记录')
@Containerization()
export default class OperationRecord extends React.Component {
    componentWillMount(){

    }
    render() {

        return (
            <div style={{ marginLeft: 10}}>

                <div style={{marginBottom: 10}}>
                      <h2>限额名称XXXXXXXXXXXXXXX</h2>
                </div>
                <EditableTable/>
            </div>
        )
    }
}

