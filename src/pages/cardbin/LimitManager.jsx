import React from 'react';
import { Table, Input, Icon, Button, Popconfirm  } from 'antd';
import EditableTable from '../cardbin/EditableTable';
const Search = Input.Search;

export default class LimitManager extends React.Component{

    render(){
        return(
            <div style={{marginTop: 35,marginLeft: 300, marginRight : 300}}>
                <Search
                    placeholder="你想要搜索什么"
                    style={{ width: 200 }}
                    onSearch={value => console.log(value)}
                />
                <EditableTable
                />
            </div>
        )
    }
}

