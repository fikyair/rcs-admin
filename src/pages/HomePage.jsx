import React from 'react';
import { Containerization } from '../common/PublicComponent';
import { getAllInstance, dagNodejsLoad } from '../actions';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';

@Containerization()
export default class HomePage extends React.Component{

    state ={
    }
    componentWillMount(){

    }
    render(){
        return <div>
            <div>111122</div>
        </div>
    }
}