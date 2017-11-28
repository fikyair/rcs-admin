import React from 'react';
import { Containerization } from '../common/PublicComponent';
import SelectComs, {Option} from '../components/SelectComs'

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
              <SelectComs labelName="中国" style={{ width:'50%',marginLeft: '25%', marginTop: '20px' }} placeholder={"查询..."} allowClear={true} showSearch={true}>
                {options}
              </SelectComs>
              <div>
              <SelectComs labelName="中国" defaultValue="lucy" style={{ width: 120 }} >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
              </SelectComs>
              </div>
            </div>
        );
    }
}