import React from 'react';
import XLSX from 'xlsx';
import {Input} from 'antd'
import './ExtractData.less'

export default class ExtractData extends React.Component {
    make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x, i) => ({
        name: XLSX.utils.encode_col(i),
        key: i
    }));

    constructor(props) {
        super(props);
        this.state = {
            data: [], /* Array of Arrays e.g. [["a","b"],[1,2]] */
            cols: []  /* Array of column objects e.g. { name: "C", K: 2 } */
        };
        this.handleFile = this.handleFile.bind(this);
    };

    uploadFIle(e) {

        const reader = new FileReader();
        reader.readAsText(e.target.files[0], "UTF-8");
        reader.onload = (event) => {
            debugger;
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
            console.log(data)
            this.setState({data: data, cols: this.make_cols(ws['!ref'])});
        };
        reader.readAsBinaryString(e.target.files[0]);

    };

    render() {
        return (
            <a href="javascript:;" className="file">选择文件
                <input type="file" id="extract" onChange={(e) => this.handleFile(e)}/>
            </a>
        )
    }
}