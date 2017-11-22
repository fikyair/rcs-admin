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

    valueChange(v){
        this.setState(v)
    }
    submit(){
        const { name, password} =this.state;
        if(name && password){
            // this.props.dispatch(loginWithUser({...this.state}));
            FetchAPI(`/login?Loginname=${name}&password=${password}`,'POST').then((data)=>{
                console.log(data)
               this.setState({token:data.token})
            })
        }

    }

    render(){
        const {name , password} = this.state;
        return (
            <div>
                <div>name<input value={name} onChange={(e)=>{this.valueChange({name:e.currentTarget.value})}}></input></div>
                <div>password<input value={password} onChange={(e)=>{this.valueChange({password:e.currentTarget.value})}}></input></div>
                <button onClick={()=>{this.submit()}}>登录</button>
                {this.state.token}
            </div>
        )
    }
}