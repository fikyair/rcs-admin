import React from 'react';
import { Containerization } from '../common/PublicComponent';
import { Select } from 'antd'

@Containerization()
export default class HomePage extends React.Component{

    state = {
      options:null
    }
    componentWillMount(){


    }
    render(){
        const {options} =this.state;
        return (
          <div>
              <Select style={{ width:'50%',marginLeft: '25%', marginTop: '20px' }} placeholder={"查询..."} allowClear={true} showSearch={true}>
                {options}
              </Select>
              <div>
              <Select defaultValue="lucy" style={{ width: 120 }} >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="disabled" disabled>Disabled</Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
              </Select>
              </div>
            </div>
        );
    }
}