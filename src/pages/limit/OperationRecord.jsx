import React from 'react';
import {Card} from 'antd';
import EditableTable from '../../pages/limit/LimitEditableTable';

import {Containerization, setTitle} from '../../common/PublicComponent';

@setTitle('操作记录')
@Containerization()
export default class OperationRecord extends React.Component {
    componentWillMount(){

    }
    render() {

        return (
            <div style={{ marginLeft: 0}}>

                    <EditableTable/>



            </div>
        )
    }
}

