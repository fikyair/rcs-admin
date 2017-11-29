import React from 'react';
import { Layout } from 'antd';
import { Containerization} from '../common/PublicComponent';
import { getCardBin } from '../actions'


@Containerization((state)=>{
    return {
      cardBInData:state.LoginEditReducer.cardBInData
    }
})
export default class TraceComs extends React.Component {

  componentWillMount(){
    this.props.dispatch(getCardBin())
  }

  render(){
    return (<Layout>

    </Layout>)
  }
}