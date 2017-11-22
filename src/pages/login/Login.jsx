import React from 'react';
import {  loginWithUser} from '../../actions/login/LoginEdit';
import { Containerization } from '../../common/PublicComponent';
import {FetchAPI} from '../../utils/fetch-middleware'


export default class Login extends React.Component {
    state = {
        name:'',
        password:'',
        token:''
    }

    componentWillMount() {
        //alert(this.props.match.params.id)
    }

    valueChange(v){
        this.setState(v)
    }
    submit(){
        const { name, password} =this.state;
        if(name && password){
            // this.props.dispatch(loginWithUser({...this.state}));
            FetchAPI(`/login?Loginname=${name}&password=${password}`,'POST').then((data)=>{
                console.log(data)
              $.cookie('token',data.token,{ expires: 8, path:'/'})
               this.setState({token:data.token})
            }).catch((err)=>{
                console.log(err);
            })
        }

    }

    addUser(){
      FetchAPI(`/cuser`,'POST',{
        "id": 0,
        "code": "string",
        "name": "string",
        "loginname": "string",
        "password": "string",
        "sex": 0,
        "age": 0,
        "email": "string",
        "mobilephone": "string",
        "telephone": "string",
        "iscancel": 0,
        "userType": 0,
        "userState": 0,
        "remark": "string"
      }).then((data)=>{
        console.log(data)
        $.cookie('token',data.token,{ expires: 8, path:'/'})
        this.setState({token:data.token})
      }).catch((err)=>{
        console.log(err);
      })
    }

    render(){
        const {name , password} = this.state;
        return (
            <div>
                <div>name<input value={name} onChange={(e)=>{this.valueChange({name:e.currentTarget.value})}}></input></div>
                <div>password<input value={password} onChange={(e)=>{this.valueChange({password:e.currentTarget.value})}}></input></div>
                <button onClick={()=>{this.submit()}}>登录</button>
                {this.state.token}
                <button onClick={()=>{this.addUser()}}>add</button>
            </div>
        )
    }
}