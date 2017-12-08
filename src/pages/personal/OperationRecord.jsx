import React from 'react';
import EditableTable from './LimitEditableTable';

import {Containerization, setTitle} from '../../common/PublicComponent';

@setTitle('个性限额操作记录')
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

