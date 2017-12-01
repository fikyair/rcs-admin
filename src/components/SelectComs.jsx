import React from 'react';
import {Select} from 'antd';

export class Option extends Select.Option{}

/*
* labelName
* labelNStyles
* 封装后的下拉菜单
* */
export default  class  SelectComs extends React.Component{

  render(){
    const {labelName,children,labelNStyles} = this.props;
    return (<div style={{display:'inline-block',margin:'10px'}} >
      <span style={{...labelNStyles,marginRight:'10px',minWidth:'80px',display: 'inline-block'}}>{labelName}:</span>
      <Select {...this.props}>
        {children}
      </Select>
    </div>)
  }
}