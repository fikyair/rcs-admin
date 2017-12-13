import React from 'react';
import { Table, Pagination, Card, Input, Button} from 'antd';
import '../../style/style.less';
import {Containerization} from "../../common/PublicComponent";
import {getOptLog} from "../../actions/limitActions";


function showTotal(total) {
    return `Total ${total} items`;
}
@Containerization(state =>({
    operationData: state.LimitReducer.operationData,
    paginationData: state.LimitReducer.paginationData,
    })
)
export default class EditableTable extends React.Component {
    state = {
        current : 1,
        size: 3,
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
            dataIndex: 'countEveryMin',
        },{
            title: '备注',
            dataIndex: 'remark',
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

    handleSearch = (args) => {
        const {current,size}=this.state;
        const {id}=this.props.match.params;
        let params = {
            modelPrivateId: id,
            current,
            size,
            ...args,
        }
        this.props.dispatch(getOptLog({...params})).then(()=>{//异步(请求之后)显示数据
            const {total, current ,size,mainPartValue}= this.props.paginationData;
            this.setState({total:total,current:current,size: size,mainPartValue:mainPartValue})
        });
    }


    componentWillMount(){

         this.handleSearch();

    }

    changePage (page){    //=(page)=>
        this.handleSearch({current: page});
    }
    render() {
        let {operationData=[]} = this.props
        operationData = operationData && operationData.map(v=> {
            if(v['countLimitMinuteValue']>=0 && v['countLimitCountValue']>=0){
                v['countEveryMin'] = `${v['countLimitCountValue']}/${v['countLimitMinuteValue']}`
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
        debugger
        const columns = this.columns;
        return (
            <div className="limitable">
                <Button type="primary" style={{marginBottom: 10}} onClick={()=>{this.props.history.goBack()}}>返回</Button>
                <Card noHovering= {true} title={<div>商户编号&nbsp;&nbsp;&nbsp;&nbsp;{operationData.length ? operationData[0].mainPartValue : ''}</div>} bodyStyle={{padding: '0px',}}

                >
                    <Table className="btl" dataSource={operationData}  pagination={false} columns={columns} />

                    <div style={{textAlign: 'right',margin: 29}}>
                        <Pagination pageSize={this.state.size} current={this.state.current}  total={this.state.total}
                         onChange={this.changePage.bind(this)}
                        />
                    </div>
                </Card>
            </div>
        );
    }
}
