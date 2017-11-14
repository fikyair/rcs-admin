import { queryMyFund_REQUEST,API_GET_ALL_INSTANCE,API_GET_DAGNODEJS_LOAD } from '../utils/ActionsType';
const initialState ={
    errMsg:'',
    myFund:{},
    allInstance:{},
    echart_option_dag:{
    },
    _images:{},

};

export default function (state = initialState,actions ) {

    switch (actions.type){
        case queryMyFund_REQUEST[1]:
            return {
                ...state,
                myFund:actions.result,
                reqMsg:'',
            };
        case API_GET_ALL_INSTANCE[1]:
            const { timeBucket } = actions.result;
            const timeDifferent = moment().format("x") - moment(timeBucket, "YYYYMMDDHHmmss").format("x");
            const data = moment(timeBucket, "YYYYMMDDHHmmss").format('YYYYMMDDHHmm');
            return {
                ...state,
                vueData:{...state.vueData,timeBucket:data},

            };
        case API_GET_DAGNODEJS_LOAD[1]:
            const graphData  = actions.result;
            const {nodes,nodeRefs} = graphData;
            if(nodeRefs.length <= 0 || nodeRefs.length <=0 ){
                return state;
            }
            let dag_data = [] ,links=[];
            const categories = [
                {
                    name: '真实节点',
                    icon: 'circle',
                    textStyle: {
                        color: 'red'
                    }
                },
                {
                    name: '虚拟节点',
                    icon: 'circle',
                    textStyle: {
                        color: 'blue'
                    }
                },
            ];
            nodes.map((v,k)=>{
                dag_data.push({
                    id:k,
                    name:v.label,
                    symbolSize:['10','10'],
                    category:v.real?"1":"0",
                    attributes:{},
                    itemStyle:{}
                });
            });
            nodeRefs.map((v,k)=>{
                links.push({
                    lineStyle: {normal:{}},
                    source: v.from,
                    target: v.to,
                    symbolSize : 10,
                })
            });
            const echart_option_dag = {
                title: {
                    text: '服务调用链',
                    top: 'top',
                    left: 'left'
                },
                tooltip: {},
                legend: [{
                    data: categories
                }],
                animation: false,
                series: [
                    {
                        name: '服务调用链',
                        type: 'graph',
                        layout: 'force',
                        data: dag_data,
                        links: links,
                        categories: [{
                            name:'真实节点',
                            symbol:'circle',
                            symbolSize:['10','10'],
                        },{
                            name:'虚拟节点',
                            symbol:'circle',
                            symbolSize:['10','10'],
                        }],
                        roam: true,
                        label: {
                            normal: {
                                position: 'right'
                            }
                        },
                        force: {
                            repulsion: 100
                        }
                    }
                ]
            };
            return {
                ...state,
                echart_option_dag
            };
        case 'FAILURE':
            return {
                ...state,
                errMsg:actions.error.msg,
            };
        default:
            return state
    }
}
