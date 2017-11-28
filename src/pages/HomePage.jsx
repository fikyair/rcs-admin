import React from 'react';
import { Containerization } from '../common/PublicComponent';
import SelectComs, {Option} from '../components/SelectComs';
import { Layout,Input,Icon} from 'antd'

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
          <Layout>
            <Input/><Icon type="search" />
              <SelectComs labelName="中国" defaultValue="lucy" style={{ width: 120 }} >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
              </SelectComs>

            </Layout>
        );
    }
}