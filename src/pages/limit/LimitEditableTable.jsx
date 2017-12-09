import React from 'react';
import { Table, Pagination, Card ,Button } from 'antd';
import '../../style/style.less';
import {Containerization} from '../../common/PublicComponent';
import {recordData} from '../../actions/limitActions';

@Containerization(state=>({
    selectsData:state.LimitReducer.selectsData,
    bussinessType:state.LimitReducer.bussinessType,
    cardType:state.LimitReducer.cardType,
    bodyProperty:state.LimitReducer.bodyProperty,
    mainAccount:state.LimitReducer.mainAccount,
    modelsData: state.LimitReducer.modelsData,
    formTemp:state.GlobalReducer.formTemp,
    recordData:state.LimitReducer.recordData,
}))
// const datamock=[{
//     key: '1',
//     singleLimit: '12000',
//     dayAmountLimit: '1325',
//     monthAmountLimit: '4532',
//     yearAmountLimit: '781501',
//     lifeAmountLimit: '12452',
//     twoIntervals: '450',
//     strokeCount: '500',
//     stroke: '12330',
//     state: '1',
//     operational: '王永飞',
//     operationTime: '2017-11-29 12:30:12'
// }];
// function showTotal(total) {
//     return `Total ${total} items`;
// }
export default class EditableTable extends React.Component {
    state = {
        pageNum : 1,
        pageSize: 3,
        total: 0,
        data: [],
        key: '1',
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
            dataIndex: 'countLimitCountValue',
        },{
            title: '笔/日',
            dataIndex: 'dayCountLimit',
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
    changePage = (s) =>{
        this.setState({
            pageNum:current,
            pageSize:size
        })
        this.handleRecord({pageNum:current, pageSize:size})
    }
    render() {
        const { recordData } = this.props;
        const columns = this.columns;
        return (
            <div className="limitable">
                <Button type="primary" style={{marginBottom: 10}} onClick={()=>{this.props.history.goBack()}}>返回</Button>

                <Card noHovering= {true} title={<div>限额名称&nbsp;&nbsp;&nbsp;&nbsp;<span>123456</span></div>} bodyStyle={{padding: '0px',}}

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
