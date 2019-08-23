import React from 'react';
import './signup.scss';
let errorStyle ={
    color:"#d9534f"
};
class SignupComponent extends React.Component {
    constructor() {
        super()
        this.state = { firstname: '', lastname: '', email: '', password: '',errors: {} };
        this.submitSignup = this.submitSignup.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(name, value){
        let errors = this.state.errors;
        if( !value ){
            errors[name] = "This field is required!!" ;
         }
         else {
             delete errors[name];
         }
        this.setState({[name] : value });
        this.setState({errors});
    }
    submitSignup(event) {
        event.preventDefault();
        const required  = "This field is required!";
        let errors = this.state.errors;
        if(!this.state.firstname){
            errors.firstname = required;
         }
        if(!this.state.lastname){
           errors.lastname = required;
        }
        if(!this.state.email){
            errors.email = required;
        }
        if(!this.state.password){
            errors.password = required;
        }
        this.setState({errors});
        console.log("this.state",this.state);
        fetch('http://localhost:3001/auth/signup', { method: "post", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state) }).
            then((res) => console.log("res.json() ", res.json())
            )
    }
    goToLogin() {
        const { history } = this.props;
        history.push('/login');
    }

    render() {
        return (
            <div className="container">
                <div className="loginBlock col-6">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group">
                                <label className="form-label">Firstname:</label>
                                <input type="text" className="form-control" onChange={(e)=> this.handleInputChange("firstname", e.target.value)}></input>
                                <span>{this.state.errors.firstname ? <span style={errorStyle}>{this.state.errors.firstname}</span> : ""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group">
                                <label className="form-label">Lastname:</label>
                                <input type="text" className="form-control" onChange={(e)=> this.handleInputChange("lastname", e.target.value)}></input>
                                <span>{this.state.errors.lastname ? <span style={errorStyle}>{this.state.errors.lastname}</span> : ""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group">
                                <label className="form-label">Username:</label>
                                <input type="text" className="form-control" onChange={(e)=> this.handleInputChange("email", e.target.value)}></input>
                                <span>{this.state.errors.email ? <span style={errorStyle}>{this.state.errors.email}</span> : ""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group">
                                <label className="form-label">Password:</label>
                                <input type="password" className="form-control" onChange={(e)=> this.handleInputChange("password", e.target.value)}></input>
                                <span>{this.state.errors.password ? <span style={errorStyle}>{this.state.errors.password}</span> : ""}</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8 offset-2">
                            <button className="btn btn-primary w-100" onClick={this.submitSignup}>Signup</button>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <button className="btn btn-primary w-100" onClick={this.goToLogin}>Login</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default SignupComponent;