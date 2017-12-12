import React from 'react';
import { Table, Pagination, Card ,Button, Input } from 'antd';
import '../../style/style.less';
import {Containerization} from '../../common/PublicComponent';
import {recordData} from '../../actions/limitActions';

@Containerization(state=>({
    recordData:state.LimitReducer.recordData,
    recordType:state.LimitReducer.recordType,
}))
export default class EditableTable extends React.Component {
    state = {
        pageNum : 1,
        pageSize: 3,
        total: 0,
        data: [],
        key: '1',
        modelName: '',
    };
    constructor(props) {
        super(props);
        this.columns = [{
            title: '单笔(金额)',
            dataIndex: 'singleAmountLimit',
        }, {
            title: '单日(金额)',
            dataIndex: 'dayAmountLimit',
        },  {
            title: '单月(金额)',
            dataIndex: 'monthAmountLimit',
        },{
            title: '年(金额)',
            dataIndex: 'yearAmountLimit',
        },{
            title: '终身(金额)',
            dataIndex: 'lifeAmountLimit',
        },{
            title: '两笔间隔(秒)',
            dataIndex: 'intervalSecondsLimit',
        },{
            title: '笔数/分钟',
            dataIndex: 'countEveryMin',
        },{
            title: '笔/日',
            dataIndex: 'dayCountLimit',
        },{
            title: '备注',
            dataIndex: 'remark',
        },{
            title: '操作人',
            dataIndex: 'optUserName'
        },{
            title: '操作时间',
            dataIndex: 'optTime',
        }];


    }
    componentWillMount() {
        this.handleRecord();
    }
    handleRecord = (args) => {
        //从路由带参数
        const {id} = this.props.match.params;
        const {pageNum, pageSize} = this.state;
        let params = {
            modelId:id,
            current:pageNum,
            size:pageSize,
            ...args,
        };
        //调用接口
        this.props.dispatch(recordData({...params})).then(()=>{
            const {total, current,size, id} = this.props.recordType
            this.setState({total: total,pageNum:current,pageSize: size,modelId:id})
        })
    }
    changePage = (page) =>{
        this.handleRecord({current:page})
    }
    render() {
        let { recordData =[]}  = this.props;
        const columns = this.columns;
        let modelName = ''
        if(recordData.length > 0){
            modelName = recordData[0].modelName
        };

        recordData = recordData && recordData.map(v=> {
            if(v['countLimitMinuteValue']>=0 && v['countLimitCountValue']>=0){
                v['countEveryMin'] = `${v['countLimitMinuteValue']}/${v['countLimitCountValue']}`
            } else {
                v['countEveryMin'] = '无'
            }
            for(let p in v){
                if(v[p]<= 0){
                    v[p] = '无'
                }
            }
            return v
        })
        return (
            <div className="limitable">
                <Button type="primary" style={{marginBottom: 10}} onClick={()=>{this.props.history.goBack()}}>返回</Button>

                <Card noHovering= {true} title={<div>限额名称&nbsp;&nbsp;&nbsp;&nbsp;<Input disabled={true} style={{width: 200}} value={modelName}/> </div>} bodyStyle={{padding: '0px',}}

                >
                    <Table className="btl" dataSource={recordData}  pagination={false} columns={columns} />

                <div style={{textAlign: 'right',margin: 29,}}>
                    <Pagination current={this.state.pageNum} pageSize={this.state.pageSize} total={this.state.total}
                                onChange={this.changePage}/>
                </div>
                </Card>
            </div>
        );
    }
}
