import React from 'react';
import EditableTable from '../../pages/limit/LimitEditableTable';

import {Containerization, setTitle} from '../../common/PublicComponent';

@setTitle('操作记录')
@Containerization()
export default class OperationRecord extends React.Component {

    render() {
        return (
            <div>
                <EditableTable/>
            </div>
        )
    }
}

