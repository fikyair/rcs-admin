import React from 'react';
import {Input} from 'antd';


/*
* labelName
* labelNStyles
* 封装后的下拉菜单
* */
export default class InputComs extends React.Component {

    render() {
        const {labelName, children, labelNStyles, ...rest} = this.props;

        return (<div style={{display: 'inline-block', margin: '10px'}}>
                <span style={{
                    ...labelNStyles,
                    marginRight: '10px',
                    minWidth: '40px',
                    display: 'inline-block'
                }}>{labelName}:</span>
            <Input {...rest} />
        </div>)
    }
}