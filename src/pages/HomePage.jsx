import React from 'react';
import { Containerization } from '../common/PublicComponent';
import { getAllInstance, dagNodejsLoad } from '../actions';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';

@Containerization((state)=>({echart_option_dag:state.PromiseReducer.echart_option_dag}))
export default class HomePage extends React.Component{

    state ={
        _image:{},
        _data:{
            nodes:[],
            nodeRefs:[],
        },
    }
    componentWillMount(){
        //dagNodesLoad?startTime=201711101046&endTime=201711101146
        this.props.dispatch(getAllInstance());
        this.props.dispatch(dagNodejsLoad());
    }
    getOption() {

    }

    getData(){
        const categories = [];
        const graph = {
            nodes:[],

        }
    }

    render(){

        const {allInstance,echart_option_dag} = this.props;
        return <div>
            { echart_option_dag.title ? <ReactEcharts
                option={echart_option_dag}
                style={{height: '500px', width: '100%'}}
            />:''}

        </div>
    }
}