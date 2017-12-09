import React from 'react';
import {Card} from 'antd';
import EditableTable from '../../pages/limit/LimitEditableTable';
import {Containerization, setTitle} from '../../common/PublicComponent';
import {recordData} from '../../actions/limitActions';

@setTitle('操作记录')
@Containerization(state=>({
}))
export default class OperationRecord extends React.Component {
    componentWillMount() {
        //let id = this.props.match.params.id
        //this.props.dispatch(recordData({id:id}));
    }

    render() {

        return (
            <div style={{ marginLeft: 0}}>

                    <EditableTable/>



            </div>
        )
    }
}

