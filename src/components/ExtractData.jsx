import React from 'react';

export default class ExtractData extends React.Component{

  uploadFIle(e){

    const reader = new FileReader();
    reader.readAsText(e.target.files[0],"UTF-8");
    reader.onload = (event)=>{
      debugger;
      console.log(event.currentTarget.result);
    }
  }

  render(){
    return (<div>
      <input type="file" id="extract" onChange={(e)=>this.uploadFIle(e)}/>
    </div>)
  }
}