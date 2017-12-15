import React from 'react';
import XLSX from 'xlsx';
import {Modal,message,Button} from 'antd'
import './ExtractData.less'

export default class ExtractData extends React.Component {
    make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x, i) => ({
        name: XLSX.utils.encode_col(i),
        key: i
    }));

    constructor(props) {
        super(props);
        this.state = {
            data:'',
            data: [], /* Array of Arrays e.g. [["a","b"],[1,2]] */
            cols: [],  /* Array of column objects e.g. { name: "C", K: 2 } */
            visible: false,
            display: 'none',
        };
        this.handleFile = this.handleFile.bind(this);
    };

    uploadFIle(e) {

        const reader = new FileReader();
        reader.readAsText(e.target.files[0], "UTF-8");
        reader.onload = (event) => {

            console.log(event.currentTarget.result);
        }
    }

    handleFile(e) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, {type: 'binary'});
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws, {header: 1});
            let list = []
            _.compact(data).map((v,k)=>{
                if(v[0]){
                    list.push({mainPartValue:v[0],remark:v[1]})
                }

            })
            console.log(data)
            this.setState({data: list, cols: this.make_cols(ws['!ref'])});
            this.props.getData(list)
            this.setState({
                visible: false,
                display: 'inline',
                disabled: false,
            })
            //$this.Button.addClass("disabled")

        };
        reader.readAsBinaryString(e.target.files[0]);
    };

    showModal(){
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });

    }
    check(){
     const {mainPartValue,remark}=this.props.data;

     if(mainPartValue || remark){
         message.warning('请清空商户配置或备注输入框');
     }else {
         this.showModal()
     }
    }

    render() {
        return (
            <div>
               {/* <a href="javascript:;" className="file">批量导入
                    <input type="file" id="extract" onChange={() => this.showModal()}/>
                </a>*/}
                <Button className="file"  onClick={()=>this.check()}>批量配置商户</Button>
                <div style={{display: this.state.display}} ><span>添加商户成功</span></div>
                <Modal
                title={"批量配置商户"}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
                >
                    <div className={"import-file"}>
                        <a href="/public/stencil.xlsx" type="application/octet-stream" download="模版"  className="file ">下载模版</a>
                        <a href="javascript:;" className="file">批量导入
                            <input type="file" id="extract" onChange={(e) => this.handleFile(e)}/>
                        </a>
                    </div>
                </Modal>
            </div>
        )
    }
}