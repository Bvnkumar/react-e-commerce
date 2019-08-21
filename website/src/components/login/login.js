import React from 'react';
import './login.scss';
class LoginComponent extends React.Component {
    constructor() {
        super()
        this.state={email:'',password:''};
        this.onEmailChange=this.onEmailChange.bind(this);
        this.onPassChange=this.onPassChange.bind(this);
        this.submitLogin=this.submitLogin.bind(this);

    }
    onEmailChange(event){
        this.setState({email:event.target.value});
    }
    onPassChange(event){
        this.setState({password:event.target.value});
    }
    submitLogin(event){
    console.log("this.state.email",this.state.email);
    console.log("this.state.password",this.state.password)
fetch('http://localhost:3001/users/login',{method:"post",headers:{'Content-Type':'application/json'},body:JSON.stringify(this.state)}).
then((res)=> console.log("res.json() ", res.json())
)
    }

    render() {
        return (
            <div className="container">
                <div className="loginBlock col-6">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group">
                                <label className="form-label">Username:</label>
                                <input type="text" className="form-control" onChange={this.onEmailChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group">
                                <label className="form-label">Password:</label>
                                <input type="password" className="form-control" onChange={this.onPassChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <button className="btn btn-primary w-100" onClick={this.submitLogin}>Click</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <button className="btn btn-primary w-100" onClick={this.submitLogin}>Signup</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default LoginComponent;